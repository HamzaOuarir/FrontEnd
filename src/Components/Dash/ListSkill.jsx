import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Styles/ListPro.css";
import Swal from "sweetalert2";
import Loading from "../Loading";
function ListSkill() {




    const [skillsList, setSkillsList] = useState([]);

    useEffect(() => {
        fetchSkill();
    }, []);

    const fetchSkill = async () => {
        try {
            const response = await axios.get('https://mernbackend-vhvd.onrender.com/api/skills')
            setSkillsList(response.data.skills);
        } catch (error) {
            console.log(error);
        }
    };

    /******************************************************/



    const delSkill = (skillId, skillName) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete " + skillName + "!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await axios.delete(
                        `https://mernbackend-vhvd.onrender.com/api/skills/${skillId}`
                    );
                    Swal.fire("Deleted!", response.data.msg, "success");

                    fetchSkill();
                } catch (error) {
                    console.log(error);
                }
            }
        });
    };






    return (
        <div className="listparent">
            <Loading dta={skillsList} />
            <div className="listtitl">SKILLS LIST</div>
            <div className="parenttable">
                <div className="tablehead">
                    <div>ID</div>
                    <div>NAME</div>
                    <div>ACTION</div>
                </div>



                {
                    skillsList?.map((skill) => (
                        <div key={skill._id} className="tablebody">
                            <div>{skill._id.substring(0, 5)}...</div>
                            <div>{skill.name}</div>
                            <div>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => delSkill(skill._id, skill.Name)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                }


            </div>
        </div>
    )
}
export default ListSkill