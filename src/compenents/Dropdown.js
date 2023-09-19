import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useCity } from '../contexts/CityContext';

function Dropdown() {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('İstanbul');
    const { setCity } = useCity()
    const [size, setSize] = useState(1);


    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/ozdemirburak/4821a26db048cc0972c1beee48a408de/raw/4754e5f9d09dade2e6c461d7e960e13ef38eaa88/cities_of_turkey.json')
            .then(response => {
                const cities = response.data;
                setCities(cities);
            })
            .catch(error => {
                console.error(error);
            });
    }, [])


    const handleSelect = (e) => {
        setSelectedCity(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setCity(selectedCity);
        setSelectedCity('');
    };

    return (
        <div className='dropdown' >
            <form  onSubmit={handleSubmit} className="form">
                <select onFocus={() => setSize(2)}  size={size} value={selectedCity} onChange={handleSelect}>
                    <option value="">Select a city</option>
                    {cities.map((city) => (
                        <option key={city.id} value={city.name}>
                            {city.name}
                        </option>
                    ))}
                </select>
                <button onClick={() => setSize(1)} type='submit'>Search</button>
            </form>

        </div >


    )
}


export default Dropdown