import React from "react";


const Image = ({image}) => (
    <div className = "col-3 mb-4">
        <div>
            <img src = {image.previewURL} alt = {image.tags} className="card-img-top"/>
        </div>
    </div>
);

export default Image;