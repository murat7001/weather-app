import React from 'react'
import { useWeather } from '../contexts/WeatherContext'

function Card() {
    const { weather } = useWeather();
    if (!weather) {
        return <p>Yükleniyor</p>
    }
    return (
        <div>
            {weather && (
                <div className='container'>

                    {
                        weather.forecast.forecastday.map((day) => (
                            <div className='card' key={day.date} >
                                <h2 className='date'>{day.date}</h2>
                                <img src={day.day.condition.icon} alt={day.day.condition.text} />
                                <h3>{day.day.maxtemp_c} °C</h3>
                                <h3>{day.day.mintemp_c} °C</h3>
                                <p>{day.day.condition.text}</p>
                            </div>
                        )
                        )
                    }
                </div>
            )}
        </div>
    )
}

export default Card