
import './App.css';
import { useState } from 'react';



function App() {
  let [count, setCount] = useState([0,0,0]);
  let [title, setTitle] = useState(["초밥", "찬란한 아구", "역전우동"]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(0);  //div의 index번호를 변경 [0,1,2]
  let [inputValue , setInputValue] = useState("");
  let [deleteValue , setDeleteValue] = useState("");

  return (
    <div className="App">
      <h2 className="title">맛집 추천 INSTAR</h2>
      {/*<button onClick={() => {setTitle('청담등심');}}>글수정</button> => 원본이 바뀜 */}
      <button onClick={() => {
        let copy = [...title]; {/* ...title = "초밥", "찬란한 아구", "역전우동"*/}
        copy[0] = "청담등심";
        setTitle(copy);
        }}>글수정</button>

{
        title.map(function(t, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {setModal(!modal); setModalTitle(i)}}>{t}</h4>
              <p>8월 22일  <span onClick={() => {
                 let copy = [...count];
                 copy[i] = copy[i] + 1;
                 setCount(copy);
                }}>🍽</span>{count[i]}</p>
            </div>
          )
        })
      }
    <div>
      <input onChange={(e) => {setInputValue(e.target.value) }} />
      <button onClick={() => {
          let copy_title = [...title];
          copy_title.unshift(inputValue);
          setTitle(copy_title);
      }}>글추가</button>
    </div>
    <div>
    <input onChange={(e) => {setDeleteValue(e.target.value) }} />
    <button onClick={() => {
          let copy_title = [...title];
          console.log(copy_title.indexOf(deleteValue));
          
          if(copy_title.indexOf(deleteValue) != -1){
            copy_title.splice( copy_title.indexOf(deleteValue),1 );
          }else{
            alert("삭제할 글이 없습니다.");
          }
          
          setTitle(copy_title);
      }}>글삭제</button>
    </div>

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
        let copy = [...props.title];
        copy[props.modalTitle] = props.title[props.modalTitle];
        props.setTitle(copy);
      }}>글제목 수정</button>
    </div>
  );
}
export default App;
