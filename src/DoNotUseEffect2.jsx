import { useEffect, useState, useMemo } from "react";



// You can cache (or “memoize”)
//  an expensive calculation by wrapping it in a useMemo Hook:

function getFilteredTodos(todos, filter) {
  return todos.filter(filter);
}

function ToDoList({ todos, filter }) {

  // const [newTodo, setNewTodo] = useState('');

  // // 🔴 Avoid: redundant state and unnecessary Effect
  // const [visibleTodos, setVisibleTodos] = useState([]);

  // useEffect(() => {
  //   setVisibleTodos(getFilteredTodos(todos, filter));
  // }, [todos, filter]);
  // console.log('rerender');
  // return (
  //   <ul>
  //     {visibleTodos.map((n, idx) => <li key={idx}>{n}</li>)}
  //   </ul>
  // );


  //=================
  // you can calc data on existant props or state
  // also put useMemo for cache todos 

  // console.time('filter array');
  // const visibleTodos = getFilteredTodos(todos, filter);
  // console.timeEnd('filter array');
  //  >>> 1ms or more USE USEMEMO !!!!!!!!!!!

  const [newTodo, setNewTodo] = useState('');

  const visibleTodos = useMemo(() => getFilteredTodos(todos, filter), [todos, filter]);

  return (
    <ul>
      {visibleTodos.map((n, idx) => <li key={idx}>{n}</li>)}
    </ul>
  );
}

const todos = [1, 2, 3, 4, 99, 5];

export function Effect2() {

  function filter(n) {
    return n > 3;
  }

  return (
    <div>
      <ToDoList todos={todos} filter={filter} />
    </div>
  );
}