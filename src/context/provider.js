import { createContext, useState } from "react";

export const Context = createContext()

export default function Provider({ children }) {

    const [tarefas, setTarefas] = useState([])

    return (
        <Context.Provider value={{ tarefas, setTarefas }}>
            {children}
        </Context.Provider>
    )
}