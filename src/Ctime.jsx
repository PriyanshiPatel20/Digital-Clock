import React, { useState } from 'react';
const Ctime = ()=>{
    let Time=new Date().toLocaleTimeString();
    const [currenttime,settime] = useState(Time);
    const UpdateTime =()=>{
        Time=new Date().toLocaleTimeString();
        settime(Time);
    }
    setInterval(UpdateTime,1000);
    return(
        <>
        <div>
        <h2>digital Clock</h2>
        <h1>{currenttime}</h1>
        </div>
        </>
    );
}
export default Ctime;