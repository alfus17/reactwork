import {useState} from 'react';

const Light_on_off = () =>{
    const[light, setLight] = useState(true);

    return(
        <>
            {light === true ? <h1>전구 on</h1> :  <h1>전구 off</h1>}

            {/* {light === true ? <button onClick={() => {setLight(!light)} }> 끄기</button> :  <button  onClick={() => {setLight(!light)}}>켜기</button>} */}
            <button onClick={() => {setLight(!light)}}>
                {light ? "끄기" : "켜기"}
            </button>
        </>

    )
}

export default  Light_on_off;