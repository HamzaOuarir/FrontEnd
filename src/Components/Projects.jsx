import React, { useEffect, useState } from "react";
import "../Styles/Projects.css";
//import ParticlesBackground from "./particles/Particles";
import axios from "axios";
import Loading from "./Loading";

function Projects() {
    const [project, setProject] = useState([]);
    useEffect(() => {
        fetchProject();
    }, []);


    const fetchProject = async () => {
        try {
            const response = await axios.get("https://mernbackend-vhvd.onrender.com/api/projects");
            setProject(response.data.projects);
           
        } catch (error) {
            console.log(error);
        }
    };


    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % project.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? project.length - 1 : prevIndex - 1
        );
    };
/*<ParticlesBackground />*/
    return (
        <div>
            
            <Loading dta={[1]} />

            <div className="parentdev">
                <div className="prtit">
                    <div className="titdiv">liste of my projects</div>
                    <div className="paragdiv">
                        This is a list of the projects we have completed, along with the technologies we used in them
                    </div>
                </div>
                <div className="projects1">
                    <button onClick={goToPrevSlide} className="prev">
                        &#10094;
                    </button>
                    {project?.map((proj, index) => (
                        <div
                            key={proj._id}
                            className={`product-slide ${index === currentIndex ? "active" : ""
                                }`}
                        >
                            <div className="pro">
                                <div className="divbac">
                                    <img
                                        src={`https://mernbackend-vhvd.onrender.com/public/${proj.image}`} 
                                        alt=""
                                        width="100%"
                                        height="100%"
                                    />
                                </div>

                                <div className="tool1">
                                    {proj.tools?.map((tool) => (

                                        (() => {
                                            
                                                return <div key={tool.name} className="toolinf">
                                                    <img
                                                        src ={`https://mernbackend-vhvd.onrender.com/public/${tool.image}`} 
                                                        width="70%"
                                                        alt=""
                                                    />
                                                    <div className="toolname1">
                                                        {tool.name}
                                                    </div>
                                                </div>
                                            
                                        })()



                                    ))}
                                </div>

                                <div className="proinf">
                                    <div></div>
                                    <div className="divmr">
                                        <div className="namepro">
                                            {proj.Name}
                                        </div>{" "}
                                        <div className="prodesc">
                                            {" "}
                                            {proj.Description}{" "}
                                        </div>
                                        <div className="btnmr">
                                            <a href={proj.link}>PERVIEW</a>{" "}
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button onClick={goToNextSlide} className="next">
                                &#10095;
                            </button>
                        </div>
                    ))}
                </div>
                <div className="projects2">
                    {project?.map((proj) => (
                        <div className="pro" key={proj._id}>
                            <div className="divbac">
                                <img 
                                   src={`https://mernbackend-vhvd.onrender.com/public/${proj.image}`} 
                                    width="100%"
                                    height="100%"
                                    alt=""
                                />
                            </div>

                            <div className="tool1">
                                {proj.tools?.map((tool) => (

                                    (() => {
                                       
                                            return <div key={tool.name} className="toolinf">
                                                <img
                                                  src ={`https://mernbackend-vhvd.onrender.com/public/${tool.image}`} 
                                                    width="80%"
                                                    alt=""
                                                />
                                                <div className="toolname1">
                                                    {tool.name}
                                                </div>
                                            </div>
                                        
                                    })()



                                ))}
                            </div>

                            <div className="proinf">
                                <div></div>
                                <div className="divmr">
                                    <div className="namepro">{proj.Name}</div>{" "}
                                    <div className="prodesc">
                                        {proj.Description}
                                    </div>
                                    <div className="btnmr">
                                        <a href={proj.link}>Perview</a>{" "}
                                        <span></span>
                                    </div>
                                </div>
                            </div>

                            <div className="betwenpro"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Projects;
