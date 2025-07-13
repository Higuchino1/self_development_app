import React, { useState, useEffect } from 'react';

const TodoListPage = () => {
  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 20 }}>
      <h1>Todo List</h1>
      <App />
    </div>
  );
};

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, text: 'Todo List 1', completed: false },
    // { id: 2, text: 'Todo List 2', completed: true },
  ]);

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  // 완료 상태 토글
  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // 새 할 일 추가
  const handleAdd = (text) => {
    if (!text.trim()) return;
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  // 텍스트 편집
  const handleEdit = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  // 삭제
  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div>
      <ProgressBar completed={completedCount} total={totalCount} />
      <TodoList
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <TodoInput onAdd={handleAdd} />
    </div>
  );
}

function ProgressBar({ completed, total }) {
  const percentage = total === 0 ? 0 : (completed / total) * 100;
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: 10,
      overflow: 'hidden',
      height: 20,
      marginBottom: 20,
      backgroundColor: '#eee',
    }}>
      <div style={{
        width: `${percentage}%`,
        height: '100%',
        backgroundColor: '#4caf50',
        transition: 'width 0.3s ease',
      }} />
    </div>
  );
}

function TodoList({ todos, onToggleComplete, onEdit, onDelete }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map(todo => (
        <li key={todo.id} style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: 10,
          gap: 10,
        }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
          />
          <EditableText
            text={todo.text}
            onChange={newText => onEdit(todo.id, newText)}
          />
          <button onClick={() => onDelete(todo.id)}>削除</button>
        </li>
      ))}
    </ul>
  );
}

function EditableText({ text, onChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text);

  useEffect(() => {
    setValue(text);
  }, [text]);

  const handleBlur = () => {
    setIsEditing(false);
    if (value.trim()) {
      onChange(value);
    } else {
      setValue(text);
    }
  };

  return isEditing ? (
    <input
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
      onBlur={handleBlur}
      autoFocus
      style={{ flexGrow: 1 }}
    />
  ) : (
    <span
      onClick={() => setIsEditing(true)}
      style={{ flexGrow: 1, cursor: 'pointer', userSelect: 'none' }}
    >
      {text}
    </span>
  );
}

function TodoInput({ onAdd }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 20, display: 'flex', gap: 10 }}>
      <input
        type="text"
        placeholder="List 追加"
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ flexGrow: 1, padding: 6 }}
      />
      <button type="submit">追加</button>
    </form>
  );
}

export default TodoListPage;
