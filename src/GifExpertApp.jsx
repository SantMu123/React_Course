import  {useState} from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExportApp = () => {
    const [categories, setCategories] = useState(["One Punch", "Dragon Ball"]);

    const HandleAddCategory = ( newCategory ) => {
        if(categories.includes(newCategory)) return;
        
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories = {setCategories}
                onNewCategory = {event => HandleAddCategory(event)}
            />
            <button onClick = {HandleAddCategory}>Añadir</button>
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
                
            </ol>
        </>
    )
}