
import React from "react";
import useFetch from "../hooks/useFetch";

const CardResident = ({url}) => {
    
    // console.log(url)
    const resident = useFetch(url) 

console.log(resident)

return (
    <body className="card-container">
 <article className="cardUser">
    <header>
        <img src={resident?.image} alt={`ìmage of ${resident?.name}` } />
        <div>

      
        <div ></div>
        <span>{resident?.status} </span>
  </div>
    </header>
<div>
<h3>{resident?.name}</h3>
<ul>
    <li> <span><b>Species: </b> </span>{resident?.species}  </li>
    <li><span> <b>Origin: </b> </span>   {resident?.origin.name}</li>
    <li><span><b>Episodes:  </b></span> {resident?.episode.length} </li>
</ul>
</div>
 </article>
 </body>
)
}
export default CardResident