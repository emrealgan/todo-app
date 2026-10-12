import { useState, useEffect } from 'react';
import TodoForm from '../Components/TodoForm';
import TodoList from '../Components/TodoList';

const Home = () => {
  // LocalStorage'dan verileri çekerek başlatma
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  // Todos state'i her değiştiğinde LocalStorage'a kaydetme
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Ekleme İşlemi (Create)
  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  // Güncelleme İşlemi (Update) - Metin değiştirme
  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  // Tamamlandı durumunu değiştirme
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  // Silme İşlemi (Delete)
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Görev Yöneticisi</h1>
        <TodoForm onAdd={addTodo} />
        {/* Listeleme İşlemi (Read) */}
        <TodoList 
          todos={todos} 
          onUpdate={updateTodo} 
          onDelete={deleteTodo} 
          onToggle={toggleComplete} 
        />
      </div>
    </div>
  );
};

export default Home;
