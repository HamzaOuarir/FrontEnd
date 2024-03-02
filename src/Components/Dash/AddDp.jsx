import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

function AddDp() {
    const [NameDp, setNameDp] = useState("");
    const [titleDp, settitleDp] = useState('');
    const [imgDep, setimgDep] = useState('');
    const [dateDp, setDateDp] = useState('');
    const [loading, setLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [GoodName, setGoodName] = useState(false);
    const [GoodDate, setGoodDate] = useState(false);
    const [GoodTit, setGoodTit] = useState(false);
 

    const addDp = async (e) => {
        setLoading(true);
        e.preventDefault();
        setFormSubmitted(true); // Set formSubmitted to true when form is submitted
        if (!titleDp || !NameDp || !dateDp || !imgDep ) {
            setLoading(false)
            return; 
        }
        const Fdata = new FormData();
        Fdata.append("titleDp", titleDp);
        Fdata.append("NameDp", NameDp);
        Fdata.append("dateDp", dateDp);
        Fdata.append("imgDep", imgDep);

        const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await axios.post("https://mernbackend-vhvd.onrender.com/api/deplomates", Fdata);
            Swal.fire({
                position: "center",
                icon: "success",
                title: `<div style=" font-size:17px">${NameDp}  Added successfuly</div>`,
                showConfirmButton: false,
                width: "300px",
                timer: 2000,
            });
            setLoading(false);
            setFormSubmitted(false); // Reset formSubmitted after successful submission
            settitleDp("");
            setNameDp("");
            setDateDp("")
            setGoodName(false);
            setGoodTit(false);
            setGoodDate(false);
            setimgDep('');
        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: `<div style=" font-size:17px">Ooops...! Try Again</div>`,
                showConfirmButton: false,
                width: "300px",
                timer: 2000,
            });

            settitleDp("");
            setLoading(false);
        }
    };

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

    const handleName = (e) => {
        e.target.value ? setGoodName(true) : setGoodName(false);
    };

    const handleDate = (e) => {
        e.target.value ? setGoodDate(true) : setGoodDate(false);
    };

    const handleTit = (e) => {
        e.target.value ? setGoodTit(true) : setGoodTit(false);
    };

  

    return (
        <div className="h-100">
            <div className="h-100 d-flex align-items-center  justify-content-center">
                <div
                    className="card"
                    style={{ boxShadow: "inset -3px -3px 5px #0000002e, inset 3px 3px 6px #534f4f4a" }}
                >
                    <div className="card-header bg-whi">
                        <h4 className="text-center mt-2 text-uppercase">
                            Add new CERTIFICATE
                        </h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => addDp(e)} className="mt-3">

                        <div style={{position:"relative"}}> <input
                                type="text"
                                value={NameDp}
                                onChange={(e) => setNameDp(e.target.value)}
                                placeholder="Certificate Name"
                                className="form-control mt-3"
                                name=""onBlur={(e)=>handleName(e)}
                                id=""
                            />
                            {<span  style={GoodName?{color:"green",position:"absolute",right: "5px",top:"24px"}:{display:"none"}}><i className="fa-solid fa-check"></i></span>}

                            </div>
                            {showError(NameDp)}




                            <div style={{position:"relative"}}> <input
                                type="text"
                                value={titleDp}
                                onChange={(e) => settitleDp(e.target.value)}
                                placeholder="Certificate Title"
                                className="form-control mt-3"
                                name=""onBlur={(e)=>handleTit(e)}
                                id=""
                            />
                            {<span  style={GoodTit?{color:"green",position:"absolute",right: "5px",top:"24px"}:{display:"none"}}><i className="fa-solid fa-check"></i></span>}

                            </div>
                            {showError(titleDp)}






                            <div style={{position:"relative"}}> <input
                                type="text"
                                value={dateDp}
                                onChange={(e) => setDateDp(e.target.value)}
                                placeholder="Certificate Date"
                                className="form-control mt-3"
                                name=""onBlur={(e)=>handleDate(e)}
                                id=""
                            />
                             {<span  style={GoodDate?{color:"green",position:"absolute",right: "5px",top:"24px"}:{display:"none"}}><i className="fa-solid fa-check"></i></span>}

                            </div>
                            {showError(dateDp)}

                            <label
                                htmlFor="skillimag"
                                className="form-control mt-3"
                                style={{ color: "#6c757d",position:"relative" }}
                            >
                                {imgDep ? imgDep.name : "Certificate Image"}
                                <span  style={imgDep?{color:"green",position:"absolute",right: "5px"}:{display:"none"}}><i className="fa-solid fa-check"></i></span>
                            </label>
                            {showError(imgDep)}
                            <input
                                type="file"
                                onChange={(e)=>setimgDep(e.target.files[0])}
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

export default AddDp
