import React, {useState, useEffect} from 'react';
import axios from "axios";


import Search from "./Search.js";
import Images from "./Images.js";

function App(){

  const [search, setSearch] = useState("");
  const [images, setImages] = useState([]);

  useEffect(()=> {
    const API = async () => {
      const key = "24227838-09e448edb9649325c2d888e65";
      const res = await axios.get("https://pixabay.com/api/", {
        params: {
          key, 
          q: search
        }
      })  
    setImages(res.data.hits);
    }

    if (search === "") return;

    API();

  }, [search]);

  return (
    <div className = "container">
      <div className=" bg-info">
        <p className="text-center "> Small ReactJS Test - Stephan Laure</p>
        <Search setSearch={setSearch} />
      </div>
      <div>
        <Images images = {images} />
      </div>
    </div>
  )
  
}

export default App;