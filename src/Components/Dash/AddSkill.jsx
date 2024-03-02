import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
 function AddSkill() {
    const [NameS, setNameS] = useState("");
    const [ImageS, setImageS] = useState('');
    const [loading, setLoading] = useState(false);

    const [formSubmitted, setFormSubmitted] = useState(false);
  

    const addPro = async (e) => {
        setLoading(true);
        e.preventDefault();
        setFormSubmitted(true)
        if (!ImageS || !NameS  ) {
            setLoading(false)
            return; 
        }
        const Fdata = new FormData();
        Fdata.append("ImageS", ImageS);
        Fdata.append("name", NameS);
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('Token not found');
        }
    try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await axios.post("https://mernbackend-vhvd.onrender.com/api/skills", Fdata);
            Swal.fire({
                position: "center",
                icon: "success",
                title: `<div style=" font-size:17px">${NameS}  Added successfuly</div>`,
                showConfirmButton: false,
                width: "300px",

                timer: 2000,
            });
            setFormSubmitted(false)
            setLoading(false);
            setImageS("");
            setNameS("");
            setGoodName(false)
            //navigate('/')
        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: `<div style=" font-size:17px">Ooops...! Try Again</div>`,
                showConfirmButton: false,
                width: "300px",

                timer: 2000,
            });

            setImageS("");
            setLoading(false);
        }
    };
    /***********************************SetImg**************************************/


    /**********************************Errors*********************************/
    const showError = (field) => {
        if (formSubmitted && !field) {
            return (
                <div style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <span className="mx-2">This field is required</span>
                </div>
            );
        }
    };
    /*************************************************************************/
    const [GoodName,setGoodName]=useState(false)
    const handleName=(e)=>{
        e.target.value?setGoodName(true):setGoodName(false)

    }
    return (
        <div className="h-100">
            <div className="h-100 d-flex align-items-center  justify-content-center">
                <div
                    className="card"
                    style={{ boxShadow: "inset -3px -3px 5px #0000002e, inset 3px 3px 6px #534f4f4a" }}
                >
                    <div className="card-header bg-whi">
                        <h4 className="text-center mt-2 text-uppercase">
                            Add new Skill
                        </h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => addPro(e)} className="mt-3">
                           <div style={{position:"relative"}}> <input
                                type="text"
                                value={NameS}
                                onChange={(e) => setNameS(e.target.value)}
                                placeholder="Skill Name"
                                className="form-control mt-3"
                                name=""onBlur={(e)=>handleName(e)}
                                id=""
                            />
                            {<span  style={GoodName?{color:"green",position:"absolute",right: "5px",top:"24px"}:{display:"none"}}><i className="fa-solid fa-check"></i></span>}

                            </div>
                            {showError(NameS)}
                            <label
                                htmlFor="skillimag"
                                className="form-control mt-3"
                                style={{ color: "#6c757d",position:"relative" }}
                            >
                                {ImageS ? ImageS.name : "Skill Image"}
                                <span  style={ImageS?{color:"green",position:"absolute",right: "5px"}:{display:"none"}}><i className="fa-solid fa-check"></i></span>
                            </label>
                            {showError(ImageS)}
                            <input
                                type="file"
                                onChange={(e)=>setImageS(e.target.files[0])}
                                placeholder="image"
                                className="d-none"
                                name=""
                                id="skillimag"
                            />
                            {loading ? (
                                <div className="d-flex justify-content-center">
                                <div
                                    className="spinner-border mt-3"
                                    role="status"
                                >
                                    <span className="visually-hidden"></span>
                                </div>
</div>
                            ) : (
                                <button className="btn btn-primary form-control mt-2">
                                    Add
                                </button>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddSkill