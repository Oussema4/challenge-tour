import { Card } from "react-bootstrap"




function Moredetails(props) {

    const found=props.countries.find(el=>el.id==props.match.params.id)
    console.log(props.match.params.id)
    return(


        <div>

<h1 style={{textAlign:"center"}}>Details </h1>

<>
  <Card>
      
    <Card.Img variant="top" src={found.image} height={600}/>
    <Card.Body>
      <Card.Text>
          <h5>{found.details}</h5>
        
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  
</>
        </div>
    )

    
}
export default Moredetails