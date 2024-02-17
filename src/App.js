import { useState } from "react";
import Title from "./Title";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";


export default function App() {
  const [items, setItems] = useState([])


  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  function handleDeleteItem(id){
    setItems((items) => items.filter((item) => item.id !== id))
  }

  function handleToggleItem(id){
     setItems((items) => items.map((item) => item.id === id ? {...item, completed: !item.completed } : item))
  }

  return (
    <div className="section">
    <div className="container">

     <Title />

     <TodoInput onAddItems={handleAddItems} />

     <TodoList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
    </div>

    </div>
  );
}



