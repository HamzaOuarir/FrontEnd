import React, { useEffect, useState } from "react";
import "../Styles/Home.css"
import ParticlesBackground from "./particles/Particles";
import me from './images/AppImages/goat.png'
import axios from "axios";
import Loading from "./Loading";

function Home() {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        fetchSkill();
    }, []);
    const fetchSkill = async () => {
        try {
            const response=await axios.get('https://mernbackend-vhvd.onrender.com/api/skills')
            setSkills(response.data.skills);
        } catch (error) {
            console.log(error);
        }
    };



    /**************** */
  const Hamb = () => (
<div className="divsvgpr" >

    <svg className="photo" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 700 700" style={{ overflow: "hidden", display: "block" }} width="700" height="700"><defs><linearGradient id="two-135" x1="350" y1="-350" x2="350" y2="350" spreadMethod="pad" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#FF595A" stopOpacity="1"></stop><stop offset="100%" stopColor="#f5f5dc" stopOpacity="1"></stop></linearGradient></defs><g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity="1"><path transform="matrix(1 0 0 1 350 350)" id="two-795" d="M 328.463321 77.847237 C 330.024486 103.793992 324.526928 136.527902 304.261022 152.805628 C 275.907093 175.579716 221.025205 138.313124 194.55198 163.248494 C 174.836659 181.818533 199.452405 223.710034 181.904974 244.340785 C 166.822433 262.073532 135.933062 256.381443 114.851521 266.255754 C 93.283142 276.358095 76.131984 296.573045 53.71004 304.604774 C 31.161245 312.681943 5.664282 313.242044 -18.279766 313.851453 C -42.756117 314.47441 -68.631934 314.589637 -92.255542 308.154968 C -115.930698 301.706258 -138.392156 288.724214 -159.046915 275.477337 C -179.475274 262.375661 -206.892418 251.424829 -215.974434 228.919525 C -227.692671 199.881644 -187.730238 160.950455 -204.790049 134.692533 C -221.596633 108.82437 -271.394475 127.936368 -294.085967 107.038537 C -312.245188 90.314722 -327.544264 61.697126 -322.012814 37.637899 C -314.671073 5.704753 -259.056349 1.960006 -248.438963 -29.038351 C -241.316408 -49.833256 -257.952178 -72.750228 -260.007085 -94.63484 C -262.383292 -119.941263 -264.017522 -146.415981 -260.98432 -171.652088 C -257.630598 -199.554897 -261.398806 -236.19881 -239.755876 -254.126382 C -216.916681 -273.04486 -177.004521 -247.514583 -150.074162 -259.936073 C -126.324129 -270.890653 -120.758245 -313.298757 -94.835137 -316.771415 C -64.789022 -320.796391 -46.010686 -268.642867 -15.729801 -270.07024 C 13.850298 -271.46458 28.528583 -314.308901 56.910817 -322.757285 C 82.437644 -330.355714 119.065455 -338.014544 137.522636 -318.813307 C 167.807264 -287.307829 113.153689 -221.802493 138.764202 -186.392671 C 150.882565 -169.637478 180.149816 -176.501792 198.088343 -166.215857 C 216.561071 -155.623611 229.304587 -136.011049 246.879289 -123.98744 C 273.21638 -105.969104 322.680746 -109.178624 332.355361 -78.769668 C 341.186344 -51.012391 293.044349 -29.123582 292.525007 -0.000001 C 292.02052 28.290485 326.763941 49.603331 328.463321 77.847237 Z " fill="url(#two-135)" stroke="undefined" strokeWidth="1" strokeOpacity="1" fillOpacity="1" visibility="visible" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="4"></path></g>

    </svg>
    <div className="imgcontainer">
     <img src={me} className="me" width="150px" alt=""/>
     </div>
</div>
    /*
<div style={{position:"relative"}}>
<div className="zwa9-parent">
<div className="moi">

</div>
<div className="zwa91"></div>
<div className="zwa92"></div>
<div className="zwa93"></div>
</div></div>*/
  )
  return (
    <div>
        <Loading dta={skills}/>
      <ParticlesBackground />
      <div className="homediv">
        <div className="PerInfo">
          <div className="HelloI">Hi I'm Hamza Ouarir</div>
          <div className="HelloDesc">
            I'm a web developer based in morocco. I strive to build immersive
            and beautiful web applications through carefully crafted code.
          </div>
          <ul className="Zicon">
            <li>
                <a href="https://www.facebook.com/hamza.ouarir"  datatext="Facebook"> <i className="fa-brands fa-facebook-f"></i> </a>
            </li>
            <li>
                <a href="https://instagram.com/ouarir_hamza?igshid=MzNlNGNkZWQ4Mg=="  datatext="instagram"> <i className="fa-brands fa-instagram"></i> </a>
            </li>
            <li>
                <a href="https://codepen.io/KT-ELBNAR" datatext="Codepen"> <i className="fa-brands fa-codepen"></i> </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/hamza-ouarir-83a657199" datatext="Linkedin"> <i className="fa-brands fa-linkedin-in"></i> </a>
            </li>
            <li>
                <a href="https://api.whatsapp.com/send?phone=2120706245871" datatext="whatsapp"> <i className="fa-brands fa-whatsapp"></i> </a>
            </li>
        </ul>
        </div>
        <div className="divphoto">
          <Hamb />
        </div>
      </div>
      <section className="Home2" id="skill">
        <div className="titl">SKILLS AND TECHNOLOGIES</div>
        <div className="parg">We've mastered the highlighted skills and maintain an ongoing commitment to learning new abilities and techniques. while our dedication to acquiring modern skills and technologies remains constant </div>
        <div className="stcontainer">
         {
           skills?.map((skill)=>(
    <div key={skill._id}>
        <img  src={`https://mernbackend-vhvd.onrender.com/public/${skill.image}`} width="50px" alt="" />
        <div className="skdesc">{skill.name}</div>
    </div>
))

         }
        </div>

      </section>



      <section className="home3"style={{marginTop:"20px"}}>
        <div className="titl">SERVICES</div>
        <div className="parg">Displayed below are our featured services, encompassing a variety of web-related solutions. Additionally, we offer a range of web services to cater to your specific requirements. Explore the options below to enhance your online presence
</div>
        <div className="servcont">

        <div className="scard"><div className="serimg"><i className="fa-solid fa-code"></i></div><div>Front-end development</div><div>We specialize in custom web frontend development, tailoring websites to individual needs and requirements</div></div>
          <div className="scard"><div className="serimg"><i className="fa-solid fa-database"></i></div><div>Back-end development</div><div>We excel in on-demand backend programming for websites, crafting tailored solutions to match specific demands</div></div>
          <div className="scard"><div className="serimg"><i className="fa-solid fa-desktop"></i></div><div>desktop apps development</div><div>We specialize in developing desktop applications, crafting tailored solutions that cater to your specific needs and requirements</div></div>  </div>

      </section>
    </div>
  );
}

export default Home;
