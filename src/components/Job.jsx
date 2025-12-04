import { Row, Col , Toast } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addToFavorites, removeFromFavorites } from '../redux/actions';
import { useSelector } from 'react-redux';

const Job = ({ data }) => {
   const [show, setShow] = useState(false);
   const [show2, setShow2] = useState(false);
   const arrayDiFavs = useSelector((state) => {
    return state.favorites.favorites
  })
   
  const dispatch = useDispatch();
  return (
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={4}>
    {
          arrayDiFavs.includes(data.company_name) ? (
           <i className="me-2 bi bi-heart-fill"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setShow2(true)
                dispatch(removeFromFavorites(data.company_name))
              }}></i>
          ) : (
            <i className=" bi bi-heart me-2"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                setShow(true)
                dispatch(addToFavorites(data.company_name))
              }}></i>
           
          )
        }
        {/* Toast per pop up conferma salvataggio */}
            <Toast bg='success' onClose={() => setShow(false)} show={show} delay={2500} autohide style={{
                position: 'fixed', 
                bottom: 20,        
                left: 20,          
                zIndex: 1050,  
             }}>
          <Toast.Header>
            <strong className="me-auto">Saved!</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body className='text-white'>Agency saved to favorites!</Toast.Body>
        </Toast>
        {/* Toast per pop up conferma eliminazione */}
         <Toast bg='danger' onClose={() => setShow2(false)} show={show2} delay={2500} autohide 
               style={{
                position: 'fixed', 
                bottom: 20,         
                right: 20,   
                zIndex: 1050,     
             }}>
          <Toast.Header>
            <strong className="me-auto">Removed!</strong>
            <small>just now</small>
          </Toast.Header>
          <Toast.Body>Agency removed from favorites!</Toast.Body>
        </Toast>
      <Link to={`/${data.company_name}`}> {data.company_name} </Link>
    </Col>
    <Col xs={8}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>

    </Col>
  </Row>
)
}

export default Job
