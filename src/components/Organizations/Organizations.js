import React, {useState, useEffect} from 'react';
import DecorationImg from "../DecorationImg/DecorationImg";
import {OrganizationsButton} from "../Button/Button.styles";
import {db} from "../../firebase";
import {Theme} from "../../Utils/Theme";
import {DataTable} from "./DataTable";

const Organizations = () => {
    const [selectTable, setSelectTable] = useState('foundations')
    const [page, setPage] = useState({
        section1: true,
        section2: false,
        section3: false
    });
    const [institutions, setInstitutions] = useState({
        foundations: [],
        organizations: [],
        locals: []
    });

    const handleOrganization = (e, path) => {
        const pageTmp = {
            section1: false,
            section2: false,
            section3: false
        };
        const name = e.target.name
        pageTmp[name] = true
        setPage(pageTmp);
        setSelectTable(path)
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
                    return {...prev, foundations: items}
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
                <OrganizationsButton name={'section1'} onClick={(e) => handleOrganization(e, 'foundations')}
                                     style={page.section1 ? styleOn : styleOff}>
                    Fundacjom</OrganizationsButton>
                <OrganizationsButton name={'section2'} onClick={(e) => handleOrganization(e, 'organizations')}>
                    Organizacjom Pozarządowym</OrganizationsButton>
                <OrganizationsButton name={'section3'} onClick={(e) => handleOrganization(e, 'locals')}>
                    Lokalnym Zbiórkom</OrganizationsButton>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et
                dolore magna aliqua. Ut enim ad minim veniam.</p>
            <DataTable data={institutions[selectTable]} />
        </div>
    );
};

export default Organizations;