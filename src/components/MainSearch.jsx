import { useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import Job from "./Job";
import {addJob} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");
    const dispatch = useDispatch()
     const fetchError = useSelector((state) => {
    return state.job.error
  })
     
  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Esegui la dispatch solo quando l'utente preme Invio
    if (query.length > 0) {
        dispatch(addJob(query));
    }
};
  
   const jobs = useSelector((currentState) => {
    return currentState.job.job 
  })

  return (
    <Container>
      <Row>
        {fetchError ? (
          <>
          <Alert variant="danger" className="my-5">Errore nel recupero libri</Alert>
        </>
        ) : (
          <>
         <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
        </>
        )}
       
      </Row>
    </Container>
  );
};

export default MainSearch;
