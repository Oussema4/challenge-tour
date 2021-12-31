
import { useState } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

function Tourcard({el,countries,setCountries}){

  const supprimer=(id)=>{setCountries(countries.filter(el=>el.id!==id))}
 const [show,setshow]=useState(false)
const toggle=()=>{setshow(!show)}
const more=()=>{el.title.slice(0,5)}

return(
<div >

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
      {show?el.details:el.details.slice(0,80)}
      <a className="read" onClick={()=>toggle()} variant="light" style={{color:"red",margin:"5px"}}> {show?"read less":"read more"}</a>
    </Card.Text>
    
    <h6>{`${el.price} $`}</h6>
    <Link to={`/moredetails/${el.id}`} ><li className="links">More details</li></Link>
    <br/>
    <Button onClick={()=>supprimer(el.id)} variant="primary">Not intersted</Button>
    
  </Card.Body>
</Card>
</div>
)



}
export default Tourcard