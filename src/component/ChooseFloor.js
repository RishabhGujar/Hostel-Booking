import {useState } from "react";

import { useParams } from "react-router";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Pop } from "./Pop";





function ChooseFloor(){
   const [isclick,setIsClick] = useState(false);
   const [room,setroom] = useState();
   const value = useParams();
   const HostelName = value.floors;
   const username = value.username;
   function handleClick (e){
      setroom(e.target.textContent)
      e.target.style.backgroundColor = "grey";
      e.target.style.color ="white";
      setIsClick(!false);
      
   }


   
   let depends  = isclick ? "block" : "none";
   
   return <div className="Container">
        <h1>Choose A Floor</h1>
        <select className="options">
             <option value="1">1st Floor</option>
             <option value="2">2nd Floor</option>
             <option value="3">3rd Floor</option>
             <option value="4">5th Floor</option>
             <option value="5">6th Floor</option>
            
        </select>
        <div className="gridRooms">
            <button className="btnColour"  onClick={handleClick} value={"1"}>1</button>
            <button className="btnColour"  onClick={handleClick} value={2}>2</button>
            <button className="btnColour"  onClick={handleClick} value={3}>3</button>
            <button className="btnColour"  onClick={handleClick} value={4}>4</button>
            <button className="btnColour"  onClick={handleClick} value={10}>10</button>
            <div></div>
            <div></div>
            <button className="btnColour"  onClick={handleClick} value={5}>5</button>
            <button className="btnColour"  onClick={handleClick} value={9}>9</button>
            <button className="btnColour"  onClick={handleClick} value={8}>8</button>
         
            <button className="btnColour"  onClick={handleClick} value={7}>7</button>
            <button className="btnColour"  onClick={handleClick} value={6}>6</button>
         
          
           
        </div>
     

        <Popup trigger={<button  className="bookbtn" style={{display:depends}}> Book Room </button>} position="center">
    <div>
        <Pop username={username} room={room} HostelName={HostelName}/>
    </div>
  </Popup>
   </div>
   

   
       
   
}
export {ChooseFloor};