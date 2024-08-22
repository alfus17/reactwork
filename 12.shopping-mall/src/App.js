import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import pList from './data/ProductList';
import { useState } from 'react';


import './App.css';
function App() {
  const [clothes , setClothes] = useState(pList);


  return (
    <div className="App">
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg' />

       <Container>
      <Row>
        <Col md={4}>
          <img id="a" src="/img/main2.jpg" />
          <h4>{pList[0].title}</h4>
          <p>{pList[0].price}</p>
          <p>{pList[0].content}</p>
        </Col>
        <Col md={4}> 
        {/* 배포시 ~~~.com의 경로에 배포하면 상관없지만 ~~~.com/~~~/~~ 이런 하위경로이면 그림을 못찾는다고 */}
           <img id="a" src={`${process.env.PUBLIC_URL}/img/main3.jpg`} />
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

        <PlistCol clothes={clothes[0]} />

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
    </div>
  );
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
