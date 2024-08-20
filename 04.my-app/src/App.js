import logo from './logo.svg';
import './App.css';

function App() {
  const isStudent = true;

  
  return (
    <div>
      {/* 삼항연산자로 인식하게 하려면 {} 를 넣어야함
          중괄호가 없으면 글자로 인식
      */}
      {isStudent === true ? <h1>학생임다</h1> : <h1>바보입니다</h1>}
    </div>
  );
}

export default App;
