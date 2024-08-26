import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col , Button} from 'react-bootstrap';
import pList from './data/ProductList';
import { useState } from 'react';


import './App.css';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';
import axios from 'axios';

/*
  *ajax 로 서버로부터 데이터 얻어오기
    1. 설치하기 : npm i axios

*/



function App() {
  let [clothes , setClothes] = useState(pList);
  let navigate = useNavigate();
  let [count , setCount] = useState(2);


  return (
    <div className="App">
        {/* 네비게이션 바 */}
       <Navbar bg="light" data-bs-theme="light">
        <Container key="main1">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/1')}}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>앞으로 이동</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로 이동</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        {/* 메인페이지 라우터 */}
        <Route path='/' element={<div>
          <Container>
            
          <Row >
          <div className='main-bg' />
          {/* map으로 돌면서 이미지와 상세정보 가져오기 */}
            {
              clothes.map(function(clothes,i){
                return(
                <PlistCol clothes ={clothes} i={i+1}/>
                )
              })
            }

          </Row>
        </Container>

        <Button variant="info" onClick={()=>{
          console.log(count);
          setCount(count+1);
          axios.get(`https://raw.githubusercontent.com/professorjiwon/data/main/data${count}.json`)
              .then( (result) =>{
                  console.log(result.data);

                  // 배열 여러개 연결시킬때 .concat
                  let clothes_copy = [...clothes,...result.data];
                  setClothes(clothes_copy);
                  
                  console.log(clothes_copy);
                } 
                               
              )
              .catch(()=>{
                  console.log('실패');
                }
              )
        }}>서버에서 데이터 가져오기</Button>

        {/* 서버로 데이터 보낼때
            axiox.post('url', 데이터)
            ex) axiox.post('url',{name : 'kim'})

            동시에 요청을 여러개 할 때
              Promise.all ( [axios.get('url'), axios.get('url'), axios.post('url',데이터)])
        
        */}

        </div>} 
        /> 
        
        {/* 디테일 라우터 */}
        <Route path='/detail/:index' element={<div> <Detail clothes={clothes} /></div>} />

        {/* 카트 라우터 */}
        <Route path='/cart' element={<div>장바구니 입니다.</div>} />

        {/* 잘못된 주소로 들어갔을때 페이지 */}
        <Route path='*' element={<div> 
          <h1>없는 페이지여! 얼렁 돌아가슈!</h1>
          <img id="a" src={`${process.env.PUBLIC_URL}/img/back.jpg`} /></div>} />
        </Routes>
    </div>
  );
}

function About(){
  return(
    <>

        <h3> 더 좋은 회사</h3>
        <h3> 1234</h3>
        {/* 중첩 라우팅 */}
        <Outlet></Outlet>
    </>
  )
}

function PlistCol({clothes}){
  return(
  <>
    <Col md={4}>
        <img id="a" src={`${process.env.PUBLIC_URL}/img/main${clothes.id}.jpg`} />
        <h4>{clothes.title}</h4>
        <p>{clothes.price}</p>
        <p>{clothes.content}</p>
    </Col>
  </>
  )
}



export default App;
