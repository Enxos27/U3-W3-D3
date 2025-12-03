import { Row, Col, Button, Toast } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Bookmark } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Job = ({ data }) => {
   const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  return (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={3}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={7}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>

    </Col>
    <Col xs={2} className="d-flex justify-content-end">
           <Button variant="warning" onClick={()=>{
            setShow(true)
            dispatch({type: 'ADD_TO_FAVORITES', payload: data.company_name})
           }}>
            <Bookmark />
           </Button>
            <Toast bg='success' onClose={() => setShow(false)} show={show} delay={2500} autohide style={{
                position: 'fixed', // Posiziona rispetto al viewport
                bottom: 20,         // 20px dal basso
                right: 20,          // 20px da destra
                zIndex: 1050,       // Assicurati che sia sopra altri elementi
             }}>
          <Toast.Header>
            <strong className="me-auto">Saved!</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>Agency saved to favorites!</Toast.Body>
        </Toast>
           
    </Col>
  </Row>
)
}

export default Job
