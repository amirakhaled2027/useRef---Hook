import React, {useState, useEffect, useRef} from "react";

function MyComponent() {


    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect( () => {
        console.log("Component Rendered");
        console.log(inputRef1);
        console.log(inputRef2);
        console.log(inputRef3);
    });
    
    function handleClick1() {
        // ref.current++;
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "purple";

        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick2() {
        // ref.current++;
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = "orange";

        inputRef1.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3() {
        // ref.current++;
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = "red";

        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
    }



    return(
        <>
            <button onClick={handleClick1}>
                Click Meeeee😝!!
            </button> 
            <br/>
            <input ref={inputRef1}/>
            <br/>
            <br/>
            
            <button onClick={handleClick2}>
                Click Meeeee😝!!
            </button> 
            <br/>
            <input ref={inputRef2}/>
            <br/>
            <br/>
            <button onClick={handleClick3}>
                Click Meeeee😝!!
            </button> 
            <br/>
            <input ref={inputRef3}/>
            <br/>
            <br/>

        </>
    )
}
export default MyComponent;