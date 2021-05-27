import React, { useState, useEffect } from 'react'
import krediti from '../krediti.json'
import Slider from './Slider'
export default function Kalkulator() {
    const [tip, setTip] = useState(krediti[0]);
    const [iznos, setIznos] = useState(krediti[0].min);
    const [godine, setGodine] = useState(krediti[0].minGodine);
    const [rata, setRata] = useState(0);


    useEffect(() => {
        let vrednost = iznos * Math.pow(1 + tip.kamata / 100, godine) * tip.kamata / 1200;
        vrednost = vrednost / (Math.pow(1 + tip.kamata / 100, godine) - 1);
        setRata(vrednost);

    }, [iznos, tip, godine,])
    return (
        <div className='container'>
            <div className='row mt-2'>
                <div className='col-12'>
                    <h1>Izracunajte ratu za kredit</h1>
                </div>
            </div>
            <div className='row mt-2'>
                <div className='col-12'>

                    <label >Izaberite tip kredita</label>
                    <select value={tip.id} onChange={(e) => {
                        const value = e.target.value;
                        const noviTip = krediti.find(kredit => kredit.id === parseInt(value));
                        setTip(noviTip);
                        if (iznos > noviTip.max) {
                            setIznos(noviTip.max)
                        }
                        if (iznos < noviTip.min) {
                            setIznos(noviTip.min)
                        }
                        if (godine > noviTip.maxGodine) {
                            setGodine(noviTip.maxGodine)
                        }
                        if (godine < noviTip.minGodine) {

                            setGodine(noviTip.minGodine)
                        }

                    }} className='form-control mb-4'>
                        {krediti.map(kredit => {
                            return (
                                <option value={kredit.id}  >{kredit.tip}</option>
                            )
                        })}
                    </select>
                    <Slider naziv="Izaberite iznos kredita" min={tip.min} max={tip.max} vrednost={iznos} onChange={(val) => {
                        setIznos(val);

                    }} />
                    <Slider naziv="Izaberite vreme otplate" min={tip.minGodine} max={tip.maxGodine} vrednost={godine} onChange={(val) => {
                        setGodine(val);

                    }} />

                </div>
            </div>
            <div className='row mt-2 text-center'>
                <h1>Ukupan iznos: {(12 * godine * rata).toFixed(2)}</h1>

            </div>
            <div className='row mt-2 text-center'>
                <h1>Mesecna rata: {rata.toFixed(2)}</h1>

            </div>
        </div>
    )
}
