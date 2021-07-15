import { useEffect, useState } from "react";
import axios from 'axios';
export default function TodoData()
{
    const [text, setText] = useState("");
    const [todolist, setTodolist] = useState([]);
    const [adata, setAdata] = useState([]);

    useEffect(() => {
        renderdata();
        alldata();
    }, []);

    const alldata = () => {
        axios.get("http://localhost:3001/todos").then(({ data }) => {
            setAdata(data);
        });
    };

    const renderdata = () => {
        axios.get("http://localhost:3001/todos?_page=1&_limit=5").then(({ data }) => {
            setTodolist(data);
        });
    };
    return <div>
        <h1>[ Todo - App ]</h1>
        <input type="text" value={text} name="title" onChange={(e) => {
        setText(e.target.value);
    }} />
        <button onClick={() => {
            const payload = { title: text, status: false };
            axios.post("http://localhost:3001/todos", payload).then(() => {
                renderdata();
            });
            setText("");
            alldata();
        }}>Save Todo</button>
        <div>{todolist.map((e) => {
            return <><h2 key={e.id}>{e.title}  status : {e.status?"completed":"Not Completed"}</h2>
                <button onClick={() => {
                  axios.get(`http://localhost:3001/todos/?id=${e.id}`).then(({ data }) => {
                        renderdata();
                        if (data[0].status)
                        {
                            data[0].status = false;
                        }
                        else
                        {
                            data[0].status = true;
                        }
                        axios.put(`http://localhost:3001/todos/${e.id}`, data[0]);
                        renderdata();
                    })
                }}>toggle</button><button onClick={() => {
                        alldata();
                        renderdata();
                        axios.delete(`http://localhost:3001/todos/${e.id}`);
                         renderdata();
                         alldata();
                }}>Delete</button>
                
            </>
        })}</div>
        {adata.slice(0,Math.ceil(adata.length/5)).map((e,index) => {
            return <button onClick={() => {
                axios.get(`http://localhost:3001/todos/?_page=${index+1}&_limit=5`).then(({ data }) => {
                    setTodolist(data);
                })
            }}>{index+1}</button>
        }) }
    </div>
}