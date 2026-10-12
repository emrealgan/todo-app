import { useState } from 'react';

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const trimmedText = text.trim();
    if (!trimmedText) return;

    onAdd(trimmedText);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Yeni görev ekle"
        aria-label="Yeni görev"
        className="flex-1 rounded border p-2"
      />
      <button type="submit" className="rounded bg-blue-600 px-4 py-2 text-white">
        Ekle
      </button>
    </form>
  );
};

export default TodoForm;
