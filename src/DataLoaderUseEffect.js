import React, {useState, useEffect} from "react";

export default function DataLoaderUseEffect() {
const [users, setUsers] = useState([]);

useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(data => setUsers(data));

}, []);

  return (
    <ul>
        {users.map(el => (
          <li>{el.name}</li>
        ))}
      </ul>
  );

}
