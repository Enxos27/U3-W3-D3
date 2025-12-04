import { Row, Col, Button, Toast } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { removeFromFavorites } from '../redux/actions';

const FavoritesPage = () => {
     const [show, setShow] = useState(false);
    const favorites = useSelector((state) => { return state.favorites.favorites });
    const dispatch = useDispatch();
    return (
        <>
        <Row>
            <h1 className="my-4 text-center">Favorite Companies</h1>
            {favorites.length === 0 ? (
           <li className='fs-2 text-center'> No favorites added yet.</li>
          ) :  (
            <Col xs={12} className="my-4">
         <ul style={{ listStyle: 'none' }}>
          {favorites.map((agency, i) => (
            <li key={i} className="my-4 container d-flex justify-content-between align-items-center border-bottom p-2 ">
                 <p className='d-inline-block m-0'>{agency}</p>
              <Button
                variant="danger"
                onClick={() => {
                     setShow(true)
                      dispatch(removeFromFavorites(agency))
                }}
              >
               <i className="bi bi-trash"></i>
              </Button>
               <Toast bg='danger' onClose={() => setShow(false)} show={show} delay={2500} autohide 
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
            </li>
             ))}
           </ul>
         </Col>
            )}
        </Row> 
        </>
    );
}
export default FavoritesPage;