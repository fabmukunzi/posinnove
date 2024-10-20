'use client';
import * as React from "react";
import "./line.css";

const Line = (props:any) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={450}
            height={13}
            fill="none"
            {...props}
            className="line-animation"
        >
            <path
                stroke="#002278"
                strokeOpacity={0.6}
                strokeWidth={3}
                d="m1 2 19.787 9L478 2"
                className="svg-line"
            />
        </svg>
    );
};

export default Line;
