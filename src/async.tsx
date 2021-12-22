import { FC, useEffect, useState } from "react";

// Przepisz na async/await
function returnResponse() {
  const api = "https://jsonplaceholder.typicode.com/todos/1";
  return fetch(api).then((response) => response.json());
}

const Async: FC = () => {
  const [todo, setTodo] = useState();

  useEffect(() => {
    (async () => {
      const todo = await returnResponse();

      setTodo(todo);
    })();
  }, []);

  return <div>{JSON.stringify(todo)}</div>;
};

export default Async;
