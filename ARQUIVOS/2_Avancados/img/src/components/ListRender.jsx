import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias"]);

  const [urses, setUsers] = useState([
    { id: 1, name: "joao", age: 31, },
    { id: 2, name: "zé", age: 44 },
    { id: 3, name: "nathan", age: 35 },
  ]);

  const deleteRandom = () => {

    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => {
        console.log(prevUsers)
        return prevUsers.filter((user) => randomNumber !== user.id)
    })
  };

  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
          {urses.map((user) => (
          <li key={user.id}>{user.name} - {user.age} </li>
        ))}
      </ul>
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender;
