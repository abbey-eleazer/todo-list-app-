import Item from './Item.js' 

export default function TodoList({ items, onDeleteItem, onToggleItem }) {

  return (
    <ul className="ul">
    
    {/* to render list items , create items(li) comp pass in the props(item={}) and object {item} */}
    { items.map((item) => (<Item item={item} key={item.id}  onDeleteItem={onDeleteItem}  onToggleItem={onToggleItem} />))}   
  </ul>
  )
}