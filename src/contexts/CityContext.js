import { useContext, createContext, useState, useEffect } from "react";
import { useWeather } from "./WeatherContext";
import { useLang } from "./LangContext";


const CityContext = createContext();


export const CityProvider = ({ children }) => {
    const { fetchData } = useWeather();
    const { lang } = useLang();
    const [city, setCity] = useState("İstanbul")


    useEffect(() => {
        city && fetchData(city, lang)
    }, [city, lang])


    const values = {
        setCity,
    }



    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}


export const useCity = () => {
    const value = useContext(CityContext);

    if (!value) {
        throw new Error(
            "You have to add the CityProvider to make it work"
        );
    }

    return value;
}