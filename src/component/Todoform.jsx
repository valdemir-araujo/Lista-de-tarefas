import { useState } from "react";

const Todoform = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      if (!value || !category) {
          alert('preencha o titulo e selecione a categoria!')
      }else
      
      addTodo(value, category)
      setValue('')
      setCategory('')
  };

  return (
    <div className="todo-form">
      <h2>Criar tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o titulo"
          value={value}
          className="imp"
          onChange={(e) => setValue(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="imp">
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit" className="criar-tarefa">
          Criar tarefa
        </button>
      </form>
    </div>
  );
};

export default Todoform;
