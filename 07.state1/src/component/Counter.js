import {useState} from 'react'; 

const Counter=() => {
    const [count, setCount] = useState(1);
    const count2 = 0;
    
    return (
        /*
        <>
            <h1> {count} </h1>
            <button onClick={() => {setCount(count+1)}}> + </button>&emsp;
            <button onClick={() => {setCount(count-1)}}> - </button>&emsp;
        </>
        */

        <>
        <h1> {count2} </h1>
        <button onClick={() => {setCount(count2 = count2+1)}}> + </button>&emsp;
        <button onClick={() => {setCount(count2 = count2-1)}}> - </button>&emsp;
         </>
    )
}

export default Counter;