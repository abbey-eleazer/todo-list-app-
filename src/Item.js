export default function Item({ item, onDeleteItem, onToggleItem }) {

  return (
    <li className="li">
      <div>
        <span style={item.completed ? { textDecoration: "line-through"} : {}}>
        <input type="checkbox"  value={item.completed} onChange={() => onToggleItem(item.id)} className="check" />
        {item.description}
      </span>
      </div>
      <button className="delete" onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
