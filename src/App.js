import logo from "./logo.svg";
import "./App.css";
import List from "./components/List";
import { useState } from "react";
import {data} from "./components/data";

function App() {
 

  const btnValues = [ "All", ...new Set(data.map((item) =>item.category),
  )];
  console.log(btnValues)
  const [value, setValue] = useState(btnValues);
  const [categories, setCategories] = useState([]);
  const [food, setFood] = useState(data);

  const uniqueCate = (category) => {
    const NewItems = data.filter((cate) => cate.category === category);
    setFood(NewItems);
    if(category === "All"){
      setFood(data)
    }
    
  };

  return (
    <div className=""> 
      <h1>Our Menu</h1>

      <div>
        <ul className="btnmenu-Container">
          {value.map((item,index) => {
          

            return (
              <li key={index}>
                <button
                  className="btnMenuBar"
                  onClick={() => uniqueCate(item)}
                >
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    
      {
        food.map((item)=>{
       
         return <div style={{display:"flex"}}>< List item={item} /></div>
  

        })}
   
     
    </div>
  );
}

export default App;



