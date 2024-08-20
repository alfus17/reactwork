import logo from './logo.svg';
import './App.css';

function App() {
  // 변수나 함수 정의하여 사용
  // 사용할 때는 {}안에 넣어서 사용
  const name = '더조은';
  let classname = '의료용 영상';
  var value = '변수들';
  const funcName = function(){}
  const funcName2 = ()=>{
    return '함수에서 문자 반환';
  }

  // 사용할 때는  {}안에 넣어서 사용
  return (
    <div classname="App">
      <h1>{name}에 오신것을 환영합니다</h1>
      <h3>과정명 : {classname}</h3>

      <h3>중괄호 안에 넣을 수 있는 것들</h3>
      <ul>
          <li>{"문자"}와 {1+5}숫자 가능</li>
          <li>{funcName2()} : 함수 가능</li>
          <li>{value} 에 들어잇는 값 출력 가능</li>
      </ul>
      <h3>중괄호 안에 넣을 수 없는 것들</h3>
      <ul>
          <li>{true} 불리언 불가</li>
          <li>{[]} : 배열 불가</li>
  
      </ul>
    </div>
  );
}

export default App;
