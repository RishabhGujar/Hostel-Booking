import React from "react";
import {Link} from "react-router-dom"

function Choose(props){
    const{username} = props;
    console.log(username);
    return<>
    <div className="Container">
       <h1>Choose Hostel</h1>
       <div className="gridView">
           <Link to={"/hostel/B/"+username}>
           <button className="btnboy"><img className="boyimg" src="https://img.flaticon.com/icons/png/512/145/145867.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt=""/></button>
           </Link>
           <Link to={"/hostel/G/"+username}>
           <button className="btngirl"><img className="girlimg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjfoFa1l6EIWgj7zhDovYqsA3-HREhlDVZzQ&usqp=CAU" alt=""/></button>
           </Link>
       </div>
     </div>
    </>
}

export {Choose};