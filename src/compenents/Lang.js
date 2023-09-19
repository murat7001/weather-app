import React from 'react'
import { useLang } from '../contexts/LangContext'

function Lang() {
    const { setLang } = useLang();

    const handleChange = (e) => {
        setLang(e.target.value);
    }

    return (
        <div >
            <select className='lang' onChange={handleChange}>
                <option value="tr">TR</option>
                <option value="en">EN</option>
                <option value="de">DE</option>
            </select>
        </div>
    )
}

export default Lang