import React from 'react'
import '../Css/Registration.css'
import { Button } from "@material-ui/core";
import Input from '@material-ui/core/Input';


function Registration() {
    return (
        <div className="registration">  
         <div className="registration_info">
          <img 
src="https://a0.muscache.com/4ea/air/v2/pictures/9d08d356-59b9-4ac4-9f41-5b9c13c2b211.jpg?t=r:w1440-h960-sfit,e:fwebp-c75"
alt=""
          />
        

<div className="registration_infoForm">

         <h1>Earn money as an Airbnb host</h1>
          <p>Tell us a little about your place</p>
       <Input placeholder="Location" />
       
       <Input/>
       <Input/>
        <Button variant="outlined">
          In der Umgebung entdecken
        </Button>
        
        </div>
      </div>
      
        </div>
    )
}

export default Registration
