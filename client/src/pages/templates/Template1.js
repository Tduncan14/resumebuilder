import React from 'react'
import '../../resources/template.css'



function Template1 () {

    const user = JSON.parse(localStorage.getItem('user'));



    return(
        <div className="template1-parent">
          <div className=" top d-flex justify-content-between">
              <h1>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h1>
              <div>
                  <p>{user.email}</p>
                  <p>{user.address}</p>
                  <p>{user.mobileNumber}</p>
              </div>
          </div>

           <div className="divider  mt-5">
           


           </div>

           <div className="objective mt-5">
                   <h3>Objective</h3>
                   <hr />
                   <p> {user.careerObjective}</p>

               </div>
               
           <div className="divider  mt-5">
           


           </div>

            <div className="education mt-5">
                <h3> Education</h3>
                <hr />

                {user.education.map((education) => {

                    return <div className="d-flex align-items-center">
                        <h6 style={{width:120}}> <b>{education.range} :</b></h6>
                         <p>{education.qualification} with {education.percentage} in {education.institution}</p>
                        </div>
                })}

            </div>


            <div className="divider  mt-5">
           


           </div>

            <div className="education mt-5">
                <h3> Experience</h3>
                <hr />

                {user.experience.map((experience) => {

                    return <div className="d-flex align-items-center">
                        <h6 style={{width:120}}> <b>{experience.range} :</b></h6>
                         <p>{experience.company}  in {experience.place}</p>
                        </div>
                })}

            </div>



            <div className="divider  mt-5">
           


           </div>

            <div className="education mt-5">
                <h3> Projects </h3>
                <hr />

                {user.projects.map((project) => {

                    return <div className="d-flex  flex-column">
                        <h6 > <b> {project.title} [{project.range}] </b></h6>
                         <p>{project.rating} </p>
                        </div>
                })}

            </div>


            <div className="divider  mt-5">
           


           </div>

            <div className="education mt-5">
                <h3> Skills </h3>
                <hr />

                {user.skills.map((skill) => {

                    return <div className="d-flex  flex-column">
                        {skill.technology}

                        </div>
                })}

            </div>



        </div>
    )
}


export default Template1