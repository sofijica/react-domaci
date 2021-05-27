import React from 'react'

export default function KreditPrikaz(props) {
    return (
        <div className='row mt-2 border'>
            <div className='col-2'>
                <h5>{props.kredit.tip}</h5>
            </div>
            <div className='col-2'>
                <h5>{props.kredit.kamata}%</h5>
            </div>
            <div className='col-2'>
                <h5>{props.kredit.min} EUR</h5>
            </div>
            <div className='col-2'>
                <h5>{props.kredit.max} EUR</h5>
            </div>
            <div className='col-2'>
                <h5>{props.kredit.minGodine} godina</h5>
            </div>
            <div className='col-2'>
                <h5>{props.kredit.maxGodine} godina</h5>
            </div>
        </div>
    )
}
