import React, {useState, useEffect} from 'react';
import DecorationImg from "../DecorationImg/DecorationImg";
import {OrganizationsButton} from "../Button/Button.styles";
import Organizations_section3 from "./Organizations_section3";
import OrganizationsSection1 from "./Organizations_section1";
import OrganizationsSection2 from "./Organizations_section2";
import {db} from "../../firebase";

const Organizations = () => {
    const [section1, setSection1] = useState(false);
    const [section2, setSection2] = useState(false);
    const [section3, setSection3] = useState(false);
    const [institutions, setInstitutions] = useState(null);
    const [organizations, setOrganizations] = useState(null);
    const [locals, setLocals] = useState(null);

    //change the view
    const handleClick1 = () => {
        setSection1(prev => !prev)
        setSection2(false)
        setSection3(false)
    };

    const handleClick2 = () => {
        setSection2(prev => !prev)
        setSection3(false)
        setSection1(false)
    };

    const handleClick3 = () => {
        setSection3(prev => !prev)
        setSection2(false)
        setSection1(false)
    };

    //get data from firestore to state
    useEffect(() => {
        db.collection('fundations')
            .get()
            .then(promise => {
                let items = []
                promise.forEach( doc => {
                    const data = doc.data()
                    items = [...items, data]
                })
                setInstitutions(items)
            })
            .catch(error => console.log(error))

        db.collection('locals')
            .get()
            .then(promise => {
                let items = []
                promise.forEach( doc => {
                    const data = doc.data()
                    items = [...items, data]
                })
                setLocals(items)
            })
            .catch(error => console.log(error))

        db.collection('organizations')
            .get()
            .then(promise => {
                let items = []
                promise.forEach( doc => {
                    const data = doc.data()
                    items = [...items, data]
                })
                setOrganizations(items)
            })
            .catch(error => console.log(error))
    }, []);

    return (
        <div className={'organizations'} name='organizations'>
            <h2>Komu pomagamy?</h2>
            <DecorationImg />
            <div className={'organizations__buttons'}>
                <OrganizationsButton onClick={handleClick1}>Fundacjom</OrganizationsButton>
                <OrganizationsButton onClick={handleClick2}>Organizacjom Pozarządowym</OrganizationsButton>
                <OrganizationsButton onClick={handleClick3}>Lokalnym Zbiórkom</OrganizationsButton>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            {section1 ? <OrganizationsSection1 institutions={institutions} /> : ''}
            {section2 ? <OrganizationsSection2 organizations={organizations} /> : ''}
            {section3 ? <Organizations_section3 locals={locals} /> : ''}
        </div>
    );
};

export default Organizations;