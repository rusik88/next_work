"use client";

const Button = ({text, url}:{text: string, url: string | undefined}) => {
    return (
        <>
            <button onClick={() => alert("Hello")}>{text}</button>
            <p>{url}</p>
        </>
    );
};

export default Button;