import Retable from "./Retable";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((res) => {
        setUsers(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const kelja = users.map((user) => (
    <tr>
      <td>{user.name.first}</td> 
    </tr>
  ));

  return <Retable data={kelja} />;
}