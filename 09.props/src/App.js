
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import Body from './component/Body';
import Button from './component/Button';

/*
// 1. 변수에 담긴값을 Body로 넘겨주기
function App() {
  
  const addr = "서초구 강남대로";
  const name = "박장김현";

  return (
    <div className="App">
      <Header />
      <section>
        <Body address = {addr}  user = {name}/>  
      </section>
      <Footer />
    </div>
  );
}
*/
// 2.2 객체형태로 넘기기
// function App() {
//   const userInfo = {
//     name : "이고잉",
//     addr : "서초구 강남대로",
//     likeList : ["캐릭터","만화","웹툰"]
//   }
//   return (
//     <div className="App">
//       <Header />
//       <section>
//         <Body userInfo={userInfo}/>  
//       </section>
//       <Footer />
//     </div>
//   );
// }


// 2.2 객체형태의 값을 풀어서 넘겨준 값 받기
// function App() {
//   const userInfo = {
//     name : "이고잉",
//     addr : "서초구 강남대로",
//     likeList : ["캐릭터","만화","웹툰"]
//   }
//   return (
//     <div className="App">
//       <Header />
//       <section>
//         <Body  info= {...userInfo}/>  
//       </section>
//       <Footer />
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">
      <Header />
      <section>
        {/* <Body userInfo={userInfo}/>   */}
      
        <Body/>
     
      </section>
      <Button/>
      <Footer />
    </div>
  );
}


export default App;
