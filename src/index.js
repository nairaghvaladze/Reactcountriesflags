import React, {useState} from "react";
import ReactDOM  from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import "./style.css"

function App() {
const [data, setData] =useState([]);
const [image, setImage] =useState([]);


    axios.get("https://restcountries.com/v3.1/all?fields=name,flags")
    .then(function(response){
        setData(response.data);
        setImage(response.data)
    }).catch(function(error){
        console.log(error)
    });

return (<div class="container">
    <div class="row">
    <div className="col-12">
    <div className="div1 mt-3"> 
    
    <div>
      <h1 className="text-center"> მსოფლიო ქვეყნები , სრული დასახელება, დროშები! </h1>
        </div>
      
                
        {data.map(item => (
            
            <div className="div2 mt-3">
                
               <img src={item.flags.png} />
       
                <p className="text"><bold>{item.name.common}</bold></p>
                <p className="text1"> {item.name.official}</p>

                </div>

                
            
            ))}
            </div>
    </div>
    </div>
    </div>
);
}
var root=document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);