import { useState } from "react";
import axios from "axios";

export default function ApiTester() {
  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    Email: "",
    Username: "",
    Password: "",
  });

  const API = "/api";

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = async () => {
    try {
      const result = await axios.post(
        `${API}/register`,
        form
      );

      alert(result.data.msg);
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.msg || "error");
    }
  };

  const getUsers = async () => {
    try {
      const result = await axios.get(
        `${API}/listalluer`
      );

      setUsers(result.data.msg);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>API TEST</h1>

      <hr />

      <h2>Register</h2>

      <input
        type="email"
        name="Email"
        placeholder="Email"
        value={form.Email}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="text"
        name="Username"
        placeholder="Username"
        value={form.Username}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        type="password"
        name="Password"
        placeholder="Password"
        value={form.Password}
        onChange={handleChange}
      />

      <br />
      <br />

      <button onClick={register}>
        Register
      </button>

      <hr />

      <h2>All Users</h2>

      <button onClick={getUsers}>
        Load Users
      </button>

      <ul>
        {users.map((item, index) => (
          <li key={index}>
            {item.username} - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}