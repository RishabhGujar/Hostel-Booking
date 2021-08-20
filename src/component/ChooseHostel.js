import { useParams } from "react-router";
import { Link } from "react-router-dom";
function ChooseHostel(){
    const value = useParams();
    
    return <>
        <div className="Container">
            <h1>Choose a Hostel</h1>
    <div className="gridHostel">
        <Link to={"/floors/"+ value.name +"1/"+value.username}> 
              <button className="btnHostel">{value.name}1</button>
        </Link>

        <Link to={"/floors/"+ value.name+"2/"+value.username}> 
        <button className="btnHostel">{value.name}2</button>
        </Link>
       
        <Link to={"/floors/"+ value.name +"3/"+value.username}> 
           <button className="btnHostel">{value.name}3</button>
       </Link>

        <Link to={"/floors/"+ value.name+"4/"+value.username}> 
        <button className="btnHostel">{value.name}4</button>
        </Link>
        
        <Link to={"/floors/"+ value.name +"5/"+value.username }> 
        <button className="btnHostel">{value.name}5</button>
        </Link>
        
        <Link to={"/floors/"+ value.name +"6/"+value.username}> 
        <button className="btnHostel">{value.name}6</button>
        </Link>

    </div>
    </div>
    </>
       
    
}
export{ChooseHostel};