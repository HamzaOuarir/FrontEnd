import React, { useEffect, useState } from "react";
import "../Styles/loading.css";

 function Loading(props) {
    const [dta,setDta]=useState([])
    const [onLoad,setOnLoad]=useState("grid")

useEffect(()=>{
    setTimeout(() => {
        setDta(props.dta)
        if(dta.length!==0){
        setOnLoad('none')}
    }, 3000);
},[props.dta,dta.length])
    const MyCss = {

    display: onLoad,
    };

    return (
        <div style={MyCss} className="divld">
          <div className="spinner">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

        </div>
    );
}
export default Loading;