function Pop(props){
    const{room,HostelName} =props;
    return <div className="popup">
       
       <h1 className="header">Success</h1>
       <h4>Your room is has been Booked successfully</h4>
       <p>Your Room details are as follows</p>
       <p>Hostel No :{HostelName}</p>
       <p>Room No :{room}</p>

    </div>
}
export {Pop} 