import TodoItem from './TodoItem';

const TodoList = ({ todos, onUpdate, onDelete, onToggle }) => {
  if (todos.length === 0) {
    return <p className="text-center text-gray-500 mt-4">Henüz bir görev eklenmedi.</p>;
  }

  return (
    <ul className="space-y-3">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onUpdate={onUpdate} 
          onDelete={onDelete} 
          onToggle={onToggle} 
        />
      ))}
    </ul>
  );
};

export default TodoList;
