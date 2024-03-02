import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Styles/AdminDash.css";
import Swal from "sweetalert2";
function Addpro() {
    const [NameP, setNameP] = useState("");
    const [Desc, setDesc] = useState("");
    const [Image, setImage] = useState('');
    const [link, setLink] = useState("");
    const [loadingP, setLoadingP] = useState(false);
    const [loadingT, setLoadingT] = useState(false);

    const [formSubmittedP, setFormSubmittedP] = useState(false);
    const [formSubmittedT, setFormSubmittedT] = useState(false);

    useEffect(() => {
        fetchProId();
    }, []);

    const addPro = async (e) => {
        setLoadingP(true);
        e.preventDefault();
        setFormSubmittedP(true)
           // Check if any of the required fields are empty
           if (!NameP || !Image || !Desc || !link) {
            setLoadingP(false)
            return; 
        }
        const project = new FormData();
        project.append("NameP", NameP);
        project.append("Image", Image);
        project.append("Desc", Desc);
        project.append("link", link);
        const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await axios.post("https://mernbackend-vhvd.onrender.com/api/projects", project);
            Swal.fire({
                position: "center",
                icon: "success",
                title: `<div style=" font-size:17px">${NameP}  Added successfuly</div>`,
                showConfirmButton: false,
                width: "300px",
                timer: 2000,
            });
            setFormSubmittedP(false);
            setImage("");
            setLink("");
            setDesc("");
            setNameP("");
            setGoodLink('')
            setGoodDescP('')
            setGoodNameP('')
            setLoadingP(false); fetchProId();
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
            setLoadingP(false);
        }
    };

    /********************Add project tools********************* */

    const [NameTol, setNameTol] = useState("");
    const [ImageTol, setImageTol] = useState("");
    const [idPro, setIdPro] = useState("");

    const addTolPro = async (e) => {
        setLoadingT(true);
         setFormSubmittedT(true)
        e.preventDefault();
        if (!NameTol || !ImageTol || !projId ) {
            setLoadingT(false)
            return; 
        }
        const formData = new FormData();
        formData.append("NameTol", NameTol);
        formData.append("ImageTol", ImageTol);
        formData.append("idPro", idPro);
        const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Token not found');
            }
        try {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await axios.put("https://mernbackend-vhvd.onrender.com/api/projects", formData)
                .then(

            )
                ;
            Swal.fire({
                position: "center",
                icon: "success",
                title: `<div style=" font-size:17px">${NameTol}  Added successfuly</div>`,
                showConfirmButton: false,
                width: "300px",

                timer: 2000,
            });
            setFormSubmittedT(false);
            setLoadingT(false);
            setNameTol("");
            setImageTol("");
            setGoodNameT('')

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
            setLoadingT(false);
        }
    };

    /******************************************* */
    /**********************************Errors*********************************/

    const showErrorT = (field) => {

        if (formSubmittedT && !field) {
            return (
                <div style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <span className="mx-2">This field is required</span>
                </div>
            );
        }
    };
    const showErrorP = (field) => {
        if (formSubmittedP && !field) {
            return (
                <div style={{ color: "red", fontSize: "13px", marginTop: "5px" }}>
                    <i className="fa-solid fa-circle-exclamation"></i>
                    <span className="mx-2">This field is required</span>
                </div>
            );
        }
    };
    /*************************************************************************/
    /*************************************************************************/

    const [GoodLink, setGoodLink] = useState(false);
    const [GoodNameP, setGoodNameP] = useState(false);
    const [GoodDescP, setGoodDescP] = useState(false);

    /************************************************************************/
    const [GoodNameT, setGoodNameT] = useState(false);
    const [GoodIdP, setGoodIdP] = useState(false);
    /********************************************************************** */
    const [projId, setProjId] = useState([]);

    const fetchProId = async () => {
        try {
            const response = await axios.get("https://mernbackend-vhvd.onrender.com/api/projects");
            setProjId(response.data.projects);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="h-100 d-flex align-items-center justify-content-center flex-wrap gap-2">
            <div
                className=" d-flex align-items-center  justify-content-center my-3"
                style={{ margin: "0 20px" }}
            >
                <div
                    className="card  carddz"
                    style={{ boxShadow: "inset -3px -3px 5px #0000002e, inset 3px 3px 6px #534f4f4a" }}
                >
                    <div className="card-header ">
                        <h4 className="text-center mt-2 text-uppercase">
                            ADD NEW PROJECT
                        </h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => addPro(e)} className="mt-3">




                            <div style={{ position: "relative" }}>
                                <input
                                    type="text"
                                    value={NameP}
                                    onChange={(e) => setNameP(e.target.value)}
                                    placeholder="Project Name"
                                    className="form-control mt-3"
                                    name=""
                                    id=""
                                    onBlur={(e) =>
                                        e.target.value
                                            ? setGoodNameP(true)
                                            : setGoodNameP(false)
                                    }
                                />  {
                                    <span
                                        style={
                                            GoodNameP
                                                ? {
                                                    color: "green",
                                                    position: "absolute",
                                                    right: "5px",
                                                    top: "24px",
                                                }
                                                : { display: "none" }
                                        }
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                }
                            </div>
                            {showErrorP(NameP)}





                            <div style={{ position: "relative" }}>
                                <textarea
                                    type="text"
                                    value={Desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                    placeholder="Project Description"
                                    className="form-control mt-3"
                                    onBlur={(e) =>
                                        e.target.value
                                            ? setGoodDescP(true)
                                            : setGoodDescP(false)
                                    }
                                ></textarea>  {
                                    <span
                                        style={
                                            GoodDescP
                                                ? {
                                                    color: "green",
                                                    position: "absolute",
                                                    right: "5px",
                                                    top: "24px",
                                                }
                                                : { display: "none" }
                                        }
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                }
                            </div>







                            {showErrorP(Desc)}
                            <div style={{ position: "relative" }}>
                                <input
                                    type="text"
                                    value={link}
                                    onChange={(e) => setLink(e.target.value)}
                                    placeholder="Project Link"
                                    className="form-control mt-3"
                                    onBlur={(e) =>
                                        e.target.value.includes('https://')
                                            ? setGoodLink(true)
                                            : setGoodLink(false)
                                    }
                                />  {
                                    <span
                                        style={
                                            GoodLink
                                                ? {
                                                    color: "green",
                                                    position: "absolute",
                                                    right: "5px",
                                                    top: "24px",
                                                }
                                                : { display: "none" }
                                        }
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                }
                            </div>





                            {showErrorP(link)}
                            <label
                                htmlFor="fileinp"
                                className="form-control mt-3"
                                style={{ color: "#6c757d", position: "relative" }}
                            >
                                {Image ? Image.name : "Project Image"}
                                <span style={Image ? { color: "green", position: "absolute", right: "5px" } : { display: "none" }}><i className="fa-solid fa-check"></i></span>

                            </label>
                            {showErrorP(Image)}
                            <input
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                id="fileinp"
                                style={{ display: "none" }}
                            />
                            {loadingP ? (
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

            <div
                className="d-flex align-items-center  justify-content-center  my-3"
                style={{ margin: "0 20px" }}
            >
                <div
                    className="card  carddz"
                    style={{ boxShadow: "inset -3px -3px 5px #0000002e, inset 3px 3px 6px #534f4f4a" }}
                >
                    <div className="card-header ">
                        <h4 className="text-center mt-2 text-uppercase">
                            ADD YOUR PROJECT TOOLS
                        </h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={(e) => addTolPro(e)} className="mt-3">



                            <div style={{ position: "relative" }}>
                                <select value={idPro} className="form-control mt-3" onChange={(e) => { setIdPro(e.target.value); e.target.value ? setGoodIdP(true) : setGoodIdP(false) }}>
                                    <option disabled value="" >Select Project</option>
                                    {projId?.map(pro => (
                                        <option key={pro._id} value={pro._id}>{pro.name}</option>
                                    ))}
                                </select>
                                {
                                    <span
                                        style={
                                            GoodIdP
                                                ? {
                                                    color: "green",
                                                    position: "absolute",
                                                    right: "5px",
                                                    top: "24px", background: "#ffffff"
                                                }
                                                : { display: "none" }
                                        }
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                }
                            </div>




                            {showErrorT(idPro)}
                            <div style={{ position: "relative" }}>
                                <input
                                    type="text"
                                    value={NameTol}
                                    onChange={(e) => setNameTol(e.target.value)}
                                    placeholder="Tool Name"
                                    className="form-control mt-3"
                                    name=""
                                    id=""
                                    onBlur={(e) =>
                                        e.target.value
                                            ? setGoodNameT(true)
                                            : setGoodNameT(false)
                                    }
                                />  {
                                    <span
                                        style={
                                            GoodNameT
                                                ? {
                                                    color: "green",
                                                    position: "absolute",
                                                    right: "5px",
                                                    top: "24px",
                                                }
                                                : { display: "none" }
                                        }
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                }
                            </div>

                            {showErrorT(NameTol)}


                            <label
                                htmlFor="filetool"
                                className="form-control mt-3"
                                style={{ color: "#6c757d", position: "relative" }}
                            >
                                {ImageTol ? ImageTol.name : "Tool Image"}
                                <span style={ImageTol ? { color: "green", position: "absolute", right: "5px" } : { display: "none" }}><i className="fa-solid fa-check"></i></span>

                            </label>
                            {showErrorT(ImageTol)}


                            <input
                                type="file"
                                onChange={(e) => setImageTol(e.target.files[0])}
                                id="filetool"
                                style={{ display: "none" }}
                            />



                            {loadingT ? (
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
export default Addpro