import React from "react";
import Image from "./Image";

function Images ({images}){
    return (
        <div className="p-2 row "> 
            {
                images.map(image => (
                    <Image key = {image.id} image={image}/>
                ))
            }
        </div>
    );
}

export default Images;