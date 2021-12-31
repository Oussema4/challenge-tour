import { useState } from "react"
import { Button, Form } from "react-bootstrap"



function Add(props) {


    const [title,settitle]=useState("")
    const [details,setdetails]=useState("")
    const [image,setimage]=useState("")
    const [price,setprice]=useState()

    const ajouter=()=>{props.setCountries([...props.countries,{id:Math.random(),title,details,image,price}])}
    
    return(
        
        
<div>
    
        <div className="cards">

            <Button  onClick={()=>props.history.push('/')}>Back Home</Button>
            <h1>Add new tour</h1>
            </div>
<>
<label>Name</label>
  <Form.Control size="text" type="text" placeholder="Name" onChange={(e)=>settitle(e.target.value)} value={title}/>
  <br />
  <label>Info</label>
  <Form.Control type="text" placeholder="Info" onChange={(e)=>setdetails(e.target.value)} value={details}/>
  <br />
  <label>Image</label>
  <Form.Control size="text" type="text" placeholder="Image" onChange={(e)=>setimage(e.target.value)} value={image}/>
  <br />
  <label>Price</label>
  <Form.Control size="text" type="text" placeholder="Price" onChange={(e)=>setprice(e.target.value)} value={price} />
  <br />
  <Button onClick={()=>{ajouter();props.history.push('/tours')}}>Add new tour</Button>
</>

        </div>
    )
}
export default Add