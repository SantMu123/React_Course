import  {useState} from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

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
           
            {
                categories.map((category) => (

                    <GifGrid 
                        key={category}
                        category={category}
                    />
                    // <div key = { category }>
                    //     <h3>{category}</h3>
                    //     <li>{category}</li>
                    // </div>
                ))
            }
    
        </>
    )
}