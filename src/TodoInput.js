import { useState } from "react";

export default function TodoInput({ onAddItems}) {

  // create a state to handle list items
  const [description, setDescription] = useState('')


  function handleSubmit(e) {
    e.preventDefault()
    if (!description) return

    const newItem = {description, id: Date.now(), completed: false}
    // console.log(newItem)
 
    onAddItems(newItem)

    setDescription('')
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
    <input className="form-input" placeholder="enter new todo" value={description} onChange={(e) => setDescription(e.target.value)} />
    <button className="btn">add</button>
  </form>
  )
}
