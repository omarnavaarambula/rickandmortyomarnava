import React from "react";



const LocationInfo = ({location}) => {

// console.log(location)

return(
    <article className="menuWord">
        <h2>{location?.name}</h2>
        <ul>
            <li><span><b>Type: </b> </span> {location?.type} </li>
            <li><span> <b>Dimension: </b> </span> {location?.dimension}</li>
            <li><span><b>Population: </b> </span> {location?.residents.length} </li>
             
             
        </ul>
    </article>
)


}
export default LocationInfo