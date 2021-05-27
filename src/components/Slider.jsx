import React from 'react'

export default function Slider(props) {
    return (
        <>
            <label >{props.naziv}</label>
            <input type="range"
                onChange={(e) => {

                    const value = e.target.value;

                    props.onChange(value);
                }}
                value={props.vrednost}
                min={props.min} max={props.max} className='form-control' />
            <input type="number" onChange={(e) => {
                const value = e.target.value;

                props.onChange(value);
            }} value={props.vrednost} className='form-control' />
        </>
    )
}
