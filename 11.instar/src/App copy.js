import './App.css';
import { useState } from 'react';

function App() {
    // const [count1,setCount1] = useState(0);
    let [title ,setTitle] = useState(["초밥","찬란한 아구","역전 우동"]);
    let [modal, setModal] = useState(false);
    const [count2 , setCount2] = useState([0,0,0]);
    const [modalTitle, setModalTitle] = useState(0);

  return (
 
    <div className="App">
      <h2  className="title">맛집 추천 INSTAR</h2>
      {/* 원본이 바뀜 */}
      {/* <button onClick = {() => {setTitle(["청담등심","찬란한 아구","역전우동"])}}    */}
      <button onClick={() =>{
          let copy = [...title];
          copy[0] = "청담등심";
          setTitle(copy);
      }}>글 제목 수정</button>

        {
          title.map(function(t,i){
            return(
              <div className="list"  key={t+i}>
                <h4 onClick={() => {setModal(!modal); setModalTitle(i)}}>{t}</h4>
                <p>8월 22일 <span onClick={()=>{
                    let tmp = [...count2];
                    tmp[i] = tmp[i]+1;
                    console.log(tmp);
                    setCount2(tmp);
                }}>👍</span>&emsp; {count2[i]}</p>
              </div>

            )
          })

        }

{/* 

      <div className="list">
        <h4 onClick={()=>{setModal(!modal)}}>{title[0]}</h4>
        <p>8월 22일 <span onClick={()=>{setCount1(count1+1)}}>👍</span>&emsp; {count1}</p>
      </div>

      <div  className="list">
        <h4>{title[1]}</h4>
        <p>8월 17일 <span>👍</span>&emsp;0</p>
      </div>

      <div  className="list">
        <h4>{title[2]}</h4>
        <p>8월 13일 <span>👍</span> &emsp;0</p>
      </div> */}

    { modal ? <Modal title={title} modalTitle={modalTitle}/> : null }
    </div>
  );
}
function Modal(props) {
  return(
    <div className="modal">
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...pro.title];
        copy[0] = "청담등심";
        props.setTitle(copy);
      }}>글제목 수정</button>
    </div>
  );
}

export default App;
