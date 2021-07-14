import { useEffect, useLayoutEffect, useState } from "react";

export default function Timer(props)
{
    const [starttimer, setStarttimer] = useState(props.starSecond);
    const [endtimer, setEndtimer] = useState(props.endSecond);
    const [state, setState] = useState(false);
    useEffect(() =>
    {
        
        var s = setInterval(() => {
            setStarttimer((starttimer) =>
            {
                if (starttimer == endtimer)
                {
                    clearInterval(s);
                    setState(true);
                    return starttimer;
                }
                else
                return starttimer + 1;
            });
        }, 1000);
        
       
     },[])

    return <><h1>StartTimer : TargetTimer</h1><h1>{starttimer}s : {endtimer}s</h1><h1>{ state?"Timer is over":"Timer is Running...."}</h1></>;
}