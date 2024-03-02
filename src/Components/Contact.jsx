import React, { useState } from "react";
import "../Styles/Contact.css";
import ParticlesBackground from "./particles/Particles";
import axios from "axios";
import Swal from "sweetalert2";
import Loading from "./Loading";
function Contact() {
    const [NameC, setNameC] = useState("");
    const [EmailC, setEmailC] = useState("");
    const [Subject, setSubject] = useState("");
    const [Msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMail = async (e) => {
        setLoading(true);
        e.preventDefault();
        const Fdat = new FormData();
        Fdat.append("NameC", NameC);
        Fdat.append("EmailC", EmailC);
        Fdat.append("Subject", Subject);
        Fdat.append("Msg", Msg);

        try {
            await axios.post("/api/sendM", Fdat);
            Swal.fire({
                position: "center",
                icon: "success",
                title: `<div style=" font-size:17px">Thanks For Your Message,I Will Answer You Soon</div>`,
                showConfirmButton: false,
                width: "300px",
                height: "150px",

                timer: 50000,
            });
            setLoading(false);
            setErrors([]);
            setNameC("");
            setEmailC("");
            setMsg("");
            setSubject("");
            //navigate('/')
        } catch (error) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: `<div style=" font-size:17px">Ooops...! Try Again</div>`,
                showConfirmButton: false,
                width: "300px",
                height: "150px",

                timer: 2000,
            });
            setLoading(false);
            setErrors(error.response.data.errors);
        }
    };
    /**********************************Errors*********************************/
    const [errors, setErrors] = useState([]);
    const showError = (field) =>
        errors?.[field]?.map((er, index) => (
            <div
                style={{
                    color: "#ff4d4d",
                    fontSize: "13px",
                    justifySelf: "self-start",
                    marginLeft: "35px",
                }}
                key={index}
            >
                <i className="fa-solid fa-circle-exclamation"></i>
                <span className="mx-2">{er}</span>
            </div>
        ));
    /*************************************************************************/
    /*****************************************************************************/
    const [GoodName, setGoodName] = useState(false);
    const [GoodMail, setGoodMail] = useState(false);
    const [GoodSubject, setGoodSubject] = useState(false);
    const [GoodMsg, setGoodMsg] = useState(false);

    /************************************************************************/
    return (
        <div>
            <Loading dta={[1]}/>
            <ParticlesBackground />
            <div className="conatactcotainer">
                <div className="conttitl">
                    <div className="bigtitl">CONTACT US</div>
                    <div className="smalltitl">We stand ready to assist you at all times, providing answers to your queries. Feel free to drop us a message, and we will be more than happy to help and respond to any questions you may have</div>
                </div>
                <div className="frmcont">
                    <div className="cntfist">
                        <div className="contf">
                            <div className="infocont">
                                <div className="infotit">
                                    <div className="iconinfo">
                                        <i className="fa-solid fa-phone-flip fa-l"></i>
                                    </div>
                                    <div>PHONE</div>
                                </div>
                                <div className="infodesc">+212 632132385</div>
                            </div>

                            <div className="infocont">
                                <div className="infotit">
                                    <div className="iconinfo">
                                        <i
                                            className="fa-solid fa-envelope"
                                            style={{ fontSize: "23px" }}
                                        ></i>
                                    </div>
                                    <div>E-MAIL</div>
                                </div>
                                <div className="infodesc">
                                    warirhamza43@gmail.com
                                </div>
                            </div>

                            <div className="infocont">
                                <div className="infotit">
                                    <div className="iconinfo">
                                        <i className="fa-brands fa-facebook fa-xl"></i>
                                    </div>
                                    <div>FACEBOOK</div>
                                </div>
                                <div className="infodesc">Hamza Ouarir</div>
                            </div>

                            <div className="infocont">
                                <div className="infotit">
                                    <div className="iconinfo">
                                        <i className="fa-brands fa-instagram fa-xl"></i>
                                    </div>
                                    <div>INSTAGRAM</div>
                                </div>
                                <div className="infodesc">ouarir_hamza</div>
                            </div>
                        </div>
                    </div>
                    <div className="cntscnd">
                        <form
                            className="form"
                            action=""
                            onSubmit={(e) => sendMail(e)}
                        >
                            <div style={{ position: "relative" }}>
                                <input
                                    value={NameC}
                                    onChange={(e) => setNameC(e.target.value)}
                                    type="text"
                                    placeholder="Name"
                                    onBlur={(e) =>
                                        e.target.value
                                            ? setGoodName(true)
                                            : setGoodName(false)
                                    }
                                />{" "}
                                {
                                    <span
                                        style={
                                            GoodName
                                                ? {
                                                      color: "green",
                                                      position: "absolute",
                                                      right: "5px",
                                                      top: "8px",
                                                  }
                                                : { display: "none" }
                                        }
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                }
                            </div>
                            {showError("NameC")}
                            <div style={{ position: "relative" }}>
                                <input
                                    value={Subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    type="text"
                                    placeholder="Subject"
                                    onBlur={(e) =>
                                        e.target.value
                                            ? setGoodSubject(true)
                                            : setGoodSubject(false)
                                    }
                                />
                                {
                                    <span
                                        style={
                                            GoodSubject
                                                ? {
                                                      color: "green",
                                                      position: "absolute",
                                                      right: "5px",
                                                      top: "8px",
                                                  }
                                                : { display: "none" }
                                        }
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                }
                            </div>
                            {showError("Subject")}
                            <div style={{ position: "relative" }}>
                                <input
                                    value={EmailC}
                                    onChange={(e) => setEmailC(e.target.value)}
                                    type="mail"
                                    placeholder="E-Mail"
                                    onBlur={(e) =>
                                        e.target.value.includes('@') && e.target.value.includes('.')
                                            ? setGoodMail(true)
                                            : setGoodMail(false)
                                    }
                                />
                                {
                                    <span
                                        style={
                                            GoodMail
                                                ? {
                                                      color: "green",
                                                      position: "absolute",
                                                      right: "5px",
                                                      top: "8px",
                                                  }
                                                : { display: "none" }
                                        }
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                }
                            </div>
                            {showError("EmailC")}
                            <div style={{ position: "relative" }}>
                                <textarea
                                    value={Msg}
                                    onChange={(e) => setMsg(e.target.value)}
                                    placeholder="Message"
                                    onBlur={(e) =>
                                        e.target.value
                                            ? setGoodMsg(true)
                                            : setGoodMsg(false)
                                    }
                                ></textarea>
                                {
                                    <span
                                        style={
                                            GoodMsg
                                                ? {
                                                      color: "green",
                                                      position: "absolute",
                                                      right: "5px",
                                                      top: "8px",
                                                  }
                                                : { display: "none" }
                                        }
                                    >
                                        <i className="fa-solid fa-check"></i>
                                    </span>
                                }
                            </div>
                            {showError("Msg")}
                            {loading ? (
                                <div  className="d-flex btn btn-primary justify-content-center" style={{height:"30px",width:"60px"}}>
                                <div className="spinner-border spinner-border-sm" role="status">
                                    <span className="visually-hidden"></span>
                                </div></div>
                            ) : (
                                <input
                                    value="Send"
                                    type="submit"
                                    className="btn btn-primary" style={{height:"30px",padding:"0px 10px"}}
                                />
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
