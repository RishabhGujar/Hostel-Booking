function DataExists(props){
    const {value,username} =props;
    console.log(value);
    let arr = value.split(":");
    console.log(arr);
    return<><div className="Container">
       <div className="border">
      <h1>Welcome Back {username}</h1>
      <p>you already have booked a room</p>
      <h2>Your room details are as follows</h2>
      <p>Hostel NO.{arr[0]}</p>
      <p>Room No.{arr[1]}</p>
      </div>
      </div>
    </>


}

export{DataExists};