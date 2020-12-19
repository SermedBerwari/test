import React from 'react';


const cars = ["Toyota" , "BMW" , "Mazda" , "Lamborgini"];


function List(props) {
    return(
        <div>
            {cars.map(item=>
                <p key={item} >{item}</p>
            )}
            
        </div>
    );
}
export default List;