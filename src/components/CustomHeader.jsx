import React, { Component } from 'react';
import {Image} from 'react-bootstrap';


export default class CustomHeader extends Component {
    
    render() {
        return (

            
            <div>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </head>
                <div className="header">

                    <div>
                        <Image src="./assets/f4-logo.png" />  
                        <h2 className="name">OCR CONVERTER</h2>
                        <button class="btn"><i class="logoutbtn"></i> Logout</button>  
                    </div>
                </div>
                <div className="mainImage">
                    <Image src = "./assets/1.png" />

                </div>
               
            </div>    
                    
            

        )
    }

}
    