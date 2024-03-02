import React, { useEffect, useState } from "react";

 function Scroll () {

    const [visib,setVisib]=useState('none')
    const MyCss = {
        fontSize: "22px",
        color: "var(--three)",
        boxShadow: "inset -3px -3px 5px #0000002e, inset 3px 3px 6px #534f4f4a",
        position: "fixed",
        right: "15px",
        bottom: "15px",
        background: "var(--white)",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
    placeItems: "center",
    display: visib,
    transform: "rotate(90deg)",cursor:"pointer"
    };
    const GoTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
   const disScroll=()=>{
    if (window.scrollY>200) {
        setVisib("grid")
    }else{
        setVisib("none")
    }
   }

   useEffect(()=>{
    window.addEventListener("scroll",disScroll)
    return ()=>{

    window.removeEventListener("scroll",disScroll)
    }
   },[])
    return (
        <div style={MyCss} onClick={GoTop}>
            <i className="fa-solid fa-left-long"></i>

        </div>
    );
}
export default Scroll
