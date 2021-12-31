
import './App.css';
import Navi from './Nav';
import Home from './home';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';
import Ourtours from './ourtours';
import Moredetails from './moredetails';
import Add from './Addnewtour';



function App() {

const [countries,setCountries]=useState([{id:0,price:100.5,title:"Paris",details:"Paris, the capital of France, is a large European city and a world center of art, fashion, gastronomy and culture. Its 19th century urban landscape is crossed by wide boulevards and the Seine. Besides monuments like the Eiffel Tower and the 12th-century Gothic Notre-Dame cathedral, the city is renowned for its cafes and luxury boutiques lining rue du Faubourg-Saint-Honoré.",image:"https://hospitality-on.com/sites/default/files/2017-09/Paris.jpg"}
,{id:1,price:220,title:"Mexico",details:"Mexico City is the densely populated capital of Mexico. Located at high altitude, it is known for the Templo Mayor (13th century Aztec temple), the Mexico City Metropolitan Cathedral built by the Spanish conquistadors and the National Palace, which houses historic murals by Diego Rivera. All of these monuments can be found in and around the Plaza de la Constitución, the large main square also known as Zócalo. ",image:"https://static1.mclcm.net/iod/images/v2/69/citytheque/localite_101_931/1200x630_100_300_000000x30x0.jpg"}
,{id:2,price:322.3,title:"Tunis",details:" Tunis is the immense capital of Tunisia, a country in North Africa. It is located along Lake Tunis, just set back from the Gulf of Tunis, on the Mediterranean Sea. It hosts a century-old medina and the Bardo, an archaeological museum where famous Roman mosaics are exhibited in a 15th century palace complex. The ruins of ancient Carthage, reminiscent of a park, are located in the northern districts of the city.",image:"https://www.sejours-tunisie.com/wp-content/uploads/2019/02/africa-tunis.jpg"}
,{id:3,price:141.5,title:"Tokyo",details:"In Japan, the eastern part of Tokyo Prefecture is divided into 23 special wards, more generally referred to as the 23 wards. They used to form the city of Tokyo, but since 1943 it no longer exists as a political or administrative entity in itself",image:"https://lumieresdelaville.net/wp-content/uploads/2020/03/jezael-melgoza-laymbsj3yoe-unsplash.jpg"}





])

const [title,settitle]=useState("")
  return (
    <div className="App">
      <Navi title={title} settitle={settitle} ></Navi>
      <Route  exact path="/" component={Home}  ></Route>
      <Route  exact path="/tours" render={(props)=><Ourtours countries={countries} setCountries={setCountries} title={title}  {...props}></Ourtours>}  ></Route>
      <Route  exact path="/Newtour" render={(props)=><Add countries={countries} setCountries={setCountries} {...props}></Add>}  ></Route>
      <Route  path='/moredetails/:id' render={(props)=><Moredetails countries={countries}  {...props}></Moredetails>}  ></Route>
      
   
    </div>
  );
}

export default App;
