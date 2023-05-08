import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const LikePageDetail = () => {
    const { likes_post_is } = useParams();
    const [likeState, setLikeState] = useState([])
    const getData = () => {
        axios
            ?.get(`https://644f9340ba9f39c6ab66e61a.mockapi.io/all_posts/${likes_post_is}`)
            .then((res) => {
                setLikeState(res?.data?.like);
            })
            .catch((error) => console?.error(error));
    };
    useEffect(() => {
        getData();
    }, []);

    return (
        <div className='container'>
            <table className="table table-dark">
                <thead>
                    <tr>
                        {/* <th scope="col">id</th> */}
                        {/* <th scope="col">post id</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">Profile_Pic</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        likeState?.map((values) => {

                            return (
                                <tr key={values?.id}>
                                    {/* <th scope="row">{values?.id}</th> */}
                                    <td>{values?.name}</td>
                                    {/* <td>{values?.post_id}</td> */}
                                    <td>profile-picture</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default LikePageDetail