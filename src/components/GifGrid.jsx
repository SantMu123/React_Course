import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import GifItem from "./GifItem";



export const GifGrid = ({category}) => {

    const [images, setImages] = useState([]); 

    // const getImages = async() => {
    //     const newImages = await getGifs(category);
    //     setImages(newImages)
    // }

    useEffect(() => {
        getGifs(category)
            .then(newImages => setImages(newImages))
    }, [category])
    
    
    return (
        <>
            <h3>{category}</h3>
            
            <div className="card-grid">
                {
                    images.map(img => (
                        <GifItem 
                            key = {img.id}
                            title = {img.title}
                            url = {img.url}
                        />
                    ))
                }
            </div>
            
        </>
    )
}