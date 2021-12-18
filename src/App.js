import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [items,setItems] = useState([]);

  useEffect( () => {
    const apiData = async ()=>{
  const api = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await api.json();
  setItems(data);
  console.log(data);
}
apiData();
  }, [])
  return (
    <>
      <div className = "App">
      <div className='container'>
        <h1>Map The Data</h1>
              {
                items.map((item) => ( 
                  
                <ul key = { item.id } className='info' >
                  <li>User_Name: { item.username }</li>
                    <li> Full_Name: { item.name }</li>
                   <li>User_Email: { item.email }</li>
                     
                    </ul>
                    
                ))
            }
            </div>
        </div>
    </>
  );
}

export default App;
