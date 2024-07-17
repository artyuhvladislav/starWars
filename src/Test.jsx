import { useRef, useState, useEffect } from 'react';

export function Test() {
  const [id, setId] = useState(null);
  const ref = useRef(null);
  const [toDo, setToDo] = useState(null);

  const controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    if (id) {
      const url = "https://jsonplaceholder.typicode.com/todos/" + id;
      setTimeout(() => {
        fetch(url, { signal }).then(json => json.json()).then(res => setToDo(res)).catch((err) => console.error(err));
      }, 3000);

    }

    return () => {
      controller.abort();
    };
  }, [id]);


  function handleClick() {
    const id = ref.current.value;
    setId(id);
  }

  return (
    <>
      <input type="text" ref={ref} />
      <button onClick={handleClick}>send</button>
      <h1>{toDo && toDo.title}</h1>
    </>
  );
}