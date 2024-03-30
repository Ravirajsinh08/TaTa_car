import React from "react";
import '../Css/Responsive.css';
import '../Css/index.css';

export default function View({ data }) {
    console.log(data)
    return (
        <>
            <div>
                <strong>Name</strong> : <span>{data?.firstName} {data?.lastName}</span>
            </div>

            <div>
                <strong>Email</strong> : <span>{data?.email} </span>
            </div>

            <div>
                <strong>Mobile</strong> : <span>{data?.mobile} </span>
            </div>

        </>
    );
}