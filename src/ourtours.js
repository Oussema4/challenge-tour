import { Button } from "react-bootstrap"
import Tourcard from "./tourcard"


function Ourtours(props){
    

    return(
        <div className="cards">
            
            <Button onClick={()=>props.history.push('/')}>Back Home</Button>
            <br/>
            <br/>
            <h1>Our tours</h1>
            {props.countries.length==0 ?             <Button variant="danger"  onClick={()=>props.history.go(0)}>Refresh</Button>
:null }
       
        <div className="flexy">


{props.countries.filter(el=>el.title.toLowerCase().includes(props.title.toLowerCase())).map((el)=><Tourcard setCountries={props.setCountries}  countries={props.countries} el={el} key={el.id}></Tourcard>)}


        </div>
        </div>
    )
}
export default Ourtours