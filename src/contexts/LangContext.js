import { useContext, createContext, useState } from "react";

const LangContext = createContext();


export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState('tr');


    const values = {
        lang,
        setLang,
    }

    return <LangContext.Provider value={values}>{children}</LangContext.Provider>
}

export const useLang = () => {
    const value = useContext(LangContext);

    if (!value) {
        throw new Error(
            "You have to add the LangProvider to make it work"
        );
    }

    return value;
}