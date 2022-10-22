import React from "react";
import NYCrestaurantsData from './restarantdata.json';


function RestaurantData() {
    console.log(NYCrestaurantsData)
    return (
        <div className="RestaurantData">
            <div className="center">
            
                <h1>NYC Restaurants Data</h1>
                </div>
            {
                NYCrestaurantsData[0].businesses.map((data) => {
                    return (
                        <div className="bussiness" >
                            <u><strong><strong>{data.name}</strong></strong></u>
                            
                            <br></br>
                            <img src={`${data.image_url}`} alt={`${data.name}`}
                            width="250" 
                                height="200" />
                            
                            <br></br>
                            <strong> Category:</strong>
                            {data.categories[0].title}
                            <br></br>
                            <strong>Location:</strong>
                            {data.location.display_address[0]}
                            {data.location.display_address[1]}
                            <br />
                            <strong>Phone:</strong>
                            {data.display_phone}
                            <br />
                            <strong>Rating:</strong>
                            {data.rating}
                            <br />
                            <strong>Review Count:</strong>
                            {data.review_count}

                            
                    </div>
                            )
                    
                    
                })
                 }   

            
    
        </div>
        
    )    
}

export default RestaurantData;