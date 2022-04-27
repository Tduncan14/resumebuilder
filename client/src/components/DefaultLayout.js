import React from 'react';
import './../resources/authenication.css'


function DefaultLayout ({children}){


    
    return(
        <div className="layout">
            <div className="header">
                <h1>Resume Builder</h1>

            </div>


          <div className="content">
              {children}
          </div>

        </div>
    )

}


export default DefaultLayout