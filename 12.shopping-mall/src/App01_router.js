import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import pList from './data/ProductList';
import { useState } from 'react';


import './App.css';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './pages/Detail';


/*
  * react-router-dom
    - 기존의 페이지 나누기
      만약 /detail로 접속하면 기존의 index.html 파일을 모두 비운 후 페이지를 보여줌
    - 페이지를 교체시켜주는 api : router-dom

*/
 
/*
  실행순서
  설치 : npm i react-router-dom
  index.js 파일에서 <BrowserRouter> </BrowserRouter>

*/

function App() {
  let [clothes , setClothes] = useState(pList);
  // 페이지의 이동을 도와주는 함수 
  // 오류가 낫을때 함수에서 오류가 나는 게 더 디버깅 하기 좋기때문에 href 보다 더 사용성이 좋다.
  let navigate = useNavigate();


  return (
    <div className="App">
       <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>홈</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>상세페이지</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>장바구니</Nav.Link>
            <Nav.Link onClick={()=>{navigate(1)}}>앞으로 이동</Nav.Link>
            <Nav.Link onClick={()=>{navigate(-1)}}>뒤로 이동</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
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
        </div>} /> 
   
        <Route path='/detail/:index' element={<div> <Detail clothes={clothes} /></div>} />
        {/* path에 파라미터로 넘겨줄 수 있음
            path='/detail/작명'
        */}
        {/* 파라미터를 여러개 넘겨 주기 */}
        {/* <Route path='/detail/:index/:member' element={<div> <Detail clothes={clothes} /></div>} /> */}


        <Route path='/cart' element={<div>장바구니 입니다.</div>} />

{/*       이렇게  about 밑에 하위로 폴더로 쓸수 있음
        <Route path='/about' element={<About/>} />
        <Route path='/about/member' element={<About/>} />
        <Route path='/about/location' element={<About/>} /> */}
{/* NestedRoutes ~~의 하위의 것들을 하위요소로 넣어서 페이지 보여주기 */}
        <Route path='/about' element={<About/>} >
            <Route path='member' element={<div>사람 정보메롱메롬</div>} />
            <Route path='location' element={<div>강남대로</div>} />
        </Route>

        <Route path='*' element={<div> 
          <h1>없는 페이지여! 얼렁 돌아가슈!</h1>
          <img id="a" src={`${process.env.PUBLIC_URL}/img/back.jpg`} /></div>} />
        </Routes>
       {/* <Container>
      
        <Col md={4}>
          <img id="a" src="/img/main2.jpg" />
          <h4>{pList[0].title}</h4>
          <p>{pList[0].price}</p>
          <p>{pList[0].content}</p>
        </Col>
        <Col md={4}>  */}
        {/* 배포시 ~~~.com의 경로에 배포하면 상관없지만 ~~~.com/~~~/~~ 이런 하위경로이면 그림을 못찾는다고 */}
           {/* <img id="a" src={`${process.env.PUBLIC_URL}/img/main3.jpg`} />
          <h4>{pList[1].title}</h4>
          <p>{pList[1].price}</p>
          <p>{pList[1].content}</p>
        </Col>
        <Col md={4}>
          <img id="a" src="/img/main4.jpg" />
          <h4>{pList[2].title}</h4>
          <p>{pList[2].price}</p>
          <p>{pList[2].content}</p>
        </Col>

        <PlistCol clothes={clothes[0]} /> */}

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



/*
  매우 작은 기기(모바일) - xs{} 너비가 768px미만인 화면
  작은 기기(태블릿) - sm{} 너비가 992px미만인 화면
  중간 기기(노트북) - md{} 너비가 1280px미만인 화면
  큰 기기(데스크탑) - lg{} 너비가 1200px이상인 화면

  - 한 행에 12개의 열을 가진다 (중간 기기 이상일 때)
  <Col md={4}> -> 12중 4개 차지
  <Col md={4}> -> 8중 4개 차지
  <Col md={2}> -> 4중 2개 차지
  <Col md={2}> -> 2중 2개 차지
*/ 




export default App;
