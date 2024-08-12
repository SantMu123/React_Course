import React from "react"
import  {useState} from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExportApp = () => {
    const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

    const HandleAddCategory = () => {
        setCategories([...categories, "Hola"])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory setCategories = {setCategories}/>
            <button onClick = {HandleAddCategory}>Añadir</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
                
            </ol>
        </>
    )
}