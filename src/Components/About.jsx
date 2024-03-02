import React, { useEffect, useState } from "react";
import ParticlesBackground from "./particles/Particles";
import "../Styles/about.css";
import Swal from "sweetalert2";
import Loading from "./Loading";
import axios from "axios";
 function About () {
    const [Deplo, setDeplo] = useState([]);
    const [WorkEXP, SetWorkEXP] = useState([]);
    useEffect(() => {
        fetchDeplo();
        fetchWorkEXP();
    }, []);
    
    const fetchDeplo = async () => {
        try {
            const response = await axios.get("https://mernbackend-vhvd.onrender.com/api/deplomates");

            setDeplo(response.data.certDep);
        } catch (error) {
            console.log(error);
        }
    };

    const fetchWorkEXP = async () => {
        try {
            const response = await axios.get("https://mernbackend-vhvd.onrender.com/api/experience");

            SetWorkEXP(response.data.wx);
        } catch (error) {
            console.log(error);
        }
    };
    /************************************************/
    const showImgDep = (urlImg) => {
        Swal.fire({ 
            html:
                '<img className="imgdp" style="width: 90%;max-width: 800px;" src="'+ require(`./images/${urlImg}`)+
                '" alt="gggg">',
            showConfirmButton: false,
            showCancelButton: true,
            customClass: "swall",
        });
    };

    /*/////////////////////////////////////////////////*/
    return (
        <div>
            <Loading dta={Deplo}/>
            <ParticlesBackground />
            <div className="divpar">
                <div className="divquist">
                    <div className="quist">
                        Who is <span>hamza ouarir</span>
                    </div>
                    <div className="ansr">
                        Lorem, ipsum dolor sit amet consectetur an adipisicing
                        elit. Minima ipsam quasi aliquam fugiat quis vero, ad
                        incidunt ab, aut nihil fugit, ducimus eaque dolores
                        nisi? Nobis cupiditate saepe fuga veniam.
                    </div>
                    <div className="workExpert">
                        <div className="tito my-3">WORK EXPERIENCES</div>
                    {
                        WorkEXP.length!==0?<div className="wTable">
                        <div className="workHead">
                        <div>Work Post</div>
                        <div>Company Name</div>
                        <div>Period</div>
                        </div>
                        {WorkEXP?.map((work) => (
                        <div key={work._id} className="workbody">
                        <div>{work.PostName}</div>
                        <div>{work.CmpName}</div>
                        <div>{work.period}</div>
                        </div>
                        ))}
                        </div>
                        : <div className="NoXp">No Experience Now</div>
                    }
                    </div>
                </div>
                <div className="exper">
                    <div className="tito">CERTIFICATE and Ddeplomates</div>
                    <div className="bodyexp">
                        {Deplo?.map((Dep) => (
                            <div key={Dep._id} className="depl">
                                <div className="deptit">{Dep.name}</div>
                                <div className="depspes">{Dep.title}</div>
                                <div className="depdat">{Dep.date}</div>
                                <div className="deplbef">
                                    <i className="fa-solid fa-code"></i>
                                </div>
                                <button
                                    onClick={() => showImgDep(Dep.image)}
                                    className="btnpr btn btn-primary"
                                >
                                    View
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About