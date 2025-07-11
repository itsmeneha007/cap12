import React, {useRef} from 'react';

const UncontrolledComponent = () => {
    const nameRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${nameRef.current.value}`)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
            ref={nameRef} placeholder='Enter your name'
            />
            <button type="submit">Submit</button>
 
        </form>
    )
}
export default UncontrolledComponent;