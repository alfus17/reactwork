import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import '../App.css';

/*
    - useEffect(()=> {실행할 코드}, [변경되는 state])
      변경되는 state가 변경되어 재렌더링 될때만 호출이 됨
      이외으이 재렌더링시에는 호출되지 않음

    - useEffect(()=>{실행할 코드}, [])
        최초 mount될 때 한번만 실행

    - useEffect(() => {변수.. return (리턴할 코드)},[])
        return 문법 : clean up function 이라 한다
        useEffect가 실행되기 전에 return을 먼저 실행
        return은 mount 시 실행 안되고, unmount시에만 실행됨

    * 정리
        useEffect(() => {}) : 재랜더링 될때마다 실행
        useEffect(()=> {},[]) : mount시 한번만 실행
        useEffect(()=> {},[???]) : ???이 재렌더링 될때마다 실행
        useEffect(()=> {...return (unmount)}) 
*/


function Detail (props) {

    let {index} = useParams();
    let findId=props.clothes.find(function(x){
        return x.id==index;
    })

    let[alert, setAlert] =useState(true);
    let[count, setCount] = useState(0);
    let[num, setNum] = useState(0);

    useEffect(()=> {
        let timer = setTimeout(() => {setAlert(false)},1000)
        return () => {
            clearTimeout(timer);
        }
    })


    // useEffect 는 실행할 코드 조건을 넣어주면 됨
    // 2초후 flg 사라짐
    useEffect(() => {
        let timer = setTimeout(() => {setAlert(false)}, 1000)
        return () =>{
            clearTimeout(timer);
        }

    },[alert])


    return (
        <div>
            <input onChange={(e)=>{setNum(e.target.value)}} />
{/* 
            {alert ? <div>2초 이내 구매시 할인</div>:null}
            <button onClick={()=>{setAlert(true)}}>alert버튼</button>
            {count}
            <button onClick={()=>{setCount(count+1)}}>버튼</button> */}
            <Container>
            <Row>
                <Col lg={6}>
                <img id="a" src={`${process.env.PUBLIC_URL}/img/main${findId.id+1}.jpg`} />
                </Col>
                <Col lg={6}>
                    <h2>{props.clothes[index].title}</h2>
                    <p>{props.clothes[index].content}</p>
                    <h2>{props.clothes[index].price}</h2>
                    <button variant="info"> 주문하기 </button>
                </Col>
            </Row>
            </Container>
    </div>
    )
}

export default Detail;