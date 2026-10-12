import { useState } from 'react';

const TodoItem = ({ todo, onUpdate, onDelete, onToggle }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim() !== '') {
      onUpdate(todo.id, editText);
    }
    setIsEditing(false);
  };

  return (
    <li className={`flex items-center justify-between p-3 border rounded-md ${todo.isCompleted ? 'bg-green-50 border-green-200' : 'bg-gray-50'}`}>
      <div className="flex items-center flex-grow">
        <input 
          type="checkbox" 
          checked={todo.isCompleted} 
          onChange={() => onToggle(todo.id)} 
          className="mr-3 w-5 h-5 cursor-pointer"
        />
        {isEditing ? (
          <input 
            type="text" 
            value={editText} 
            onChange={(e) => setEditText(e.target.value)}
            className="flex-grow p-1 border rounded focus:outline-none"
            autoFocus
          />
        ) : (
          <span className={`flex-grow ${todo.isCompleted ? 'line-through text-gray-400' : 'text-gray-800'}`}>
            {todo.text}
          </span>
        )}
      </div>

      <div className="flex space-x-2 ml-4">
        {isEditing ? (
          <button onClick={handleUpdate} className="text-green-500 hover:text-green-700 font-bold">Kaydet</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="text-yellow-500 hover:text-yellow-700 font-bold">Düzenle</button>
        )}
        <button onClick={() => onDelete(todo.id)} className="text-red-500 hover:text-red-700 font-bold">Sil</button>
      </div>
    </li>
  );
};

export default TodoItem;
