import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { providedata } from "../Global/Context";

const EditComment = () => {
    
    const { post_id, indexNumber } = useParams();
    const [inputValue, setInputValue] = useState("");
    const [matchInputValue, setMatchInputValue] = useState("");
    const number = Number(indexNumber)
    const navigate = useNavigate()
    const { userCommentEdit } = useContext(providedata);

    const commentUpdated = () => {
        if(inputValue.length !== 0){
            const changeComment = matchInputValue?.map((value,index)=>{
                if(index === number){
                    return { ...value, userComment: inputValue };
                }
                return value
            })
            userCommentEdit({post_id,changeComment})
            navigate("/")
        }else{
            alert("please Fill Comment Field")
        }
    }

    const getData = () => {
        axios?.get(`https://644f9340ba9f39c6ab66e61a.mockapi.io/all_posts/${post_id}`)
            .then((res) => {
                setInputValue(res?.data?.comment?.[number]?.userComment);
                setMatchInputValue(res?.data?.comment);
            })
            .catch((error) => console?.error(error));
    };
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className='container d-flex align-items-center justify-content-between flex-column'>
            <Link to="/" className="btn btn-outline-danger text-dark mb-2" style={{ height: "40px", width: "250px" }}>
                back to home page
            </Link>
            <input type="text" value={inputValue || ""} onChange={(e) => setInputValue(e?.target?.value)} style={{ height: "40px", width: "250px", paddingLeft: "19px" }} />
            <button onClick={commentUpdated} className='btn btn-outline-success mt-2' style={{ height: "40px", width: "250px" }}>update comment</button>
        </div>
    )
}

export default EditComment