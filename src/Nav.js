
import { Button, Container, Form, FormControl, Navbar,Nav } from "react-bootstrap"
import { Link } from "react-router-dom"

function Navi ({title,settitle}) {

  
  return (


    <div >
     <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Trips</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1" as={Link} to="/">Home</Nav.Link>
        <Nav.Link href="#action2" as={Link} to="/tours">Our tours</Nav.Link>
        <Nav.Link href="#action3" as={Link} to="/Newtour">Add new tour</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
        onChange={(e)=>settitle(e.target.value)} value={title}
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
     
    </div>
  )
}

export default Navi