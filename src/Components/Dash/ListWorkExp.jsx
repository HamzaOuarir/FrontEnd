import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../Styles/ListPro.css";
import Swal from "sweetalert2";
import Loading from "../Loading";
 function ListWorkExp() {




    const [WorkList, setWorkList] = useState([]);

    useEffect(() => {
        fetchWorkExp();
    }, []);

    const fetchWorkExp = async () => {
        try {
            const response=await axios.get('https://mernbackend-vhvd.onrender.com/api/experience')
            setWorkList(response.data.wx);
        } catch (error) {
            console.log(error);
        }
    };

/******************************************************/



const delwork = (workId, workName) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be delete " + workName + "!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                const response = await axios.delete(
                    `https://mernbackend-vhvd.onrender.com/api/experience/${workId}`
                );
                Swal.fire("Deleted!", response.data.msg, "success");

    fetchWorkExp();
            } catch (error) {
                console.log(error);
            }
        }
    });
};






return(
    <div className="listparent">
        <Loading dta={WorkList}/>
        <div className="listtitl">WORK EXPERIENCES LIST</div>
        <div className="parenttable">
            <div className="tablehead">
                <div>ID</div>
                <div>NAME</div>
                <div>ACTION</div>
            </div>



            {
            WorkList?.map((work)=>(
                <div key={work._id} className="tablebody">
                <div>{work._id.substring(0, 5)}...</div>
                <div>{work.CmpName}</div>
                <div>
                <button
                                className="btn btn-danger"
                                onClick={() => delwork(work._id, work.CmpName)}
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
export default ListWorkExp;