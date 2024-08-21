import moon from './moon.png';
import { Button, Modal, Form } from 'react-bootstrap';
import { useState } from 'react';


function Header(){
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
        <>
            <header>
                <img src={moon}/>
                <h2>The Joeun</h2>
                <div className="login">
                <Button variant="outline-info">회원가입</Button>{' '}
                <Button variant="outline-success"  onClick={handleShow} >로그인</Button>{' '}   
                </div>
            </header>
            <Login show={show}  />
            
        </>
    )
    
    function Login(){
        return(

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form></Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            닫기
        </Button>
        <Button variant="primary" onClick={handleClose}>
            확인
        </Button>
        </Modal.Footer>
        </Modal>
        )
    }
    
}

export default Header;