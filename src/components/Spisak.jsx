import React from 'react'
import krediti from '../krediti.json'
import KreditPrikaz from './KreditPrikaz'

export default function Spisak() {

    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-2'>
                    <h5>Tip kredita</h5>
                </div>
                <div className='col-2'>
                    <h5>Godisnja kamatna stopa</h5>
                </div>
                <div className='col-2'>
                    <h5>Minimalni iznos</h5>
                </div>
                <div className='col-2'>
                    <h5>Maksimalni iznos</h5>
                </div>
                <div className='col-2'>
                    <h5>Minimalno vreme otplate</h5>
                </div>
                <div className='col-2'>
                    <h5>Maksimalno vreme otplate</h5>
                </div>
            </div>
            {krediti.map(kredit => {
                return <KreditPrikaz key={kredit.id} kredit={kredit} />
            })}
        </div>
    )
}
