import { useState } from "react";

// Hook dynamic list
export const useDynamicList = (initial = ['']) => {
  const [list, setList] = useState(
    initial.map(v => ({ id: Date.now().toString() + Math.random().toString(36).slice(2), value: v }))
  );

  const handleChange = (text, id) => {
    setList(prev => prev.map(p => (p.id === id ? { ...p, value: text } : p)));
  };

  const addItem = () => {
    setList(prev => [...prev, { id: Date.now().toString() + Math.random().toString(36).slice(2), value: '' }]);
  };

  const removeItem = (id) => {
    setList(prev => prev.filter(p => p.id !== id));
  };

  return { list, handleChange, addItem, removeItem };
};