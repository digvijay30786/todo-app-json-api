import { useEffect, useState } from "react";

export default function Updateclock() {

    let today = new Date().toLocaleTimeString();
    const [time, setTime] = useState(today);

    const UpdateData = () =>
    {
        today = new Date().toLocaleTimeString();
        setTime(today);
    }

    useEffect(() => {
        var clear = setInterval(UpdateData, 1000);
        return function () {
            clearInterval(clear);
        }
    },[])

    
    

    return <><h1>{time}</h1>
    </>
 }