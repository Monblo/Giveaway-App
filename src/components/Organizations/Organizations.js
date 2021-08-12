import React, {useState, useEffect} from 'react';
import DecorationImg from "../DecorationImg/DecorationImg";
import {OrganizationsButton} from "../Button/Button.styles";
import Organizations_section3 from "./Organizations_section3";
import OrganizationsSection1 from "./Organizations_section1";
import OrganizationsSection2 from "./Organizations_section2";
import {db} from "../../firebase";
import {Theme} from "../../Utils/Theme";

const Organizations = () => {
    const [section, setSection] = useState({
        section1: true,
        section2: false,
        section3: false
    });
    const [institutions, setInstitutions] = useState({
        fundations: [],
        organizations: [],
        locals: []
    });

    //change the view
    const handleClick1 = () => {
        setSection(prev => {
            return {...prev, section1: prevState => !prevState}
        })
        setSection(prev => {
            return {...prev, section2: false}
        })
        setSection(prev => {
            return {...prev, section3: false}
        })
    };

    const handleClick2 = () => {
        setSection(prev => {
            return {...prev, section2: prevState => !prevState}
        })
        setSection(prev => {
            return {...prev, section3: false}
        })
        setSection(prev => {
            return {...prev, section1: false}
        })
    };

    const handleClick3 = () => {
        setSection(prev => {
            return {...prev, section3: prevState => !prevState}
        })
        setSection(prev => {
            return {...prev, section2: false}
        })
        setSection(prev => {
            return {...prev, section1: false}
        })
    };

    //get data from firestore to state
    useEffect(() => {
        db.collection('fundations')
            .get()
            .then(promise => {
                let items = []
                promise.forEach(doc => {
                    const data = doc.data()
                    items = [...items, data]
                })
                setInstitutions(prev => {
                    return {...prev, fundations: items}
                })
            })
            .catch(error => console.log(error))

        db.collection('locals')
            .get()
            .then(promise => {
                let items = []
                promise.forEach(doc => {
                    const data = doc.data()
                    items = [...items, data]
                })
                setInstitutions(prev => {
                    return {...prev, locals: items}
                })
            })
            .catch(error => console.log(error))

        db.collection('organizations')
            .get()
            .then(promise => {
                let items = []
                promise.forEach(doc => {
                    const data = doc.data()
                    items = [...items, data]
                })
                setInstitutions(prev => {
                    return {...prev, organizations: items}
                })
            })
            .catch(error => console.log(error))
    }, []);

    const styleOn = {
        border: `1px solid ${Theme.colors.darkColor}`
    };

    const styleOff = {
        border: `1px solid ${Theme.colors.lightColor}`
    };

    return (
        <div className={'organizations'} name='organizations'>
            <h2>Komu pomagamy?</h2>
            <DecorationImg/>
            <div className={'organizations__buttons'}>
                {section.section1 ? <OrganizationsButton onClick={handleClick1} style={styleOn}>Fundacjom
                </OrganizationsButton> : <OrganizationsButton onClick={handleClick1} style={styleOff}>
                    Fundacjom</OrganizationsButton>}
                <OrganizationsButton onClick={handleClick2}>Organizacjom Pozarządowym</OrganizationsButton>
                <OrganizationsButton onClick={handleClick3}>Lokalnym Zbiórkom</OrganizationsButton>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam.</p>
            {section.section1 ? <OrganizationsSection1 {...institutions} /> : ''}
            {section.section2 ? <OrganizationsSection2 {...institutions} /> : ''}
            {section.section3 ? <Organizations_section3 {...institutions} /> : ''}
        </div>
    );
};

export default Organizations;