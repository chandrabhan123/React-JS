import { useState } from "react";

const ReactStateExample = () => {
    
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log("Button Clicked");
        setCount(count + 1);
    }
    return (
        <>
            <button onClick={handleClick}>You Clicked {count}</button>
        </>
    );
}

export default ReactStateExample;