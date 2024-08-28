import { FormEvent, useState } from "react";

interface Person {
  name: string;
  age: number;
}

const App = () => {
  const [user, setUser] = useState<Person>();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(user);
    if (user) {
      setUser({ ...user, name: "", age: 0 });
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={user?.name || ""}
          onChange={(e) =>
            setUser((prev) => ({ ...prev!, name: e.target.value }))
          }
          autoComplete="off"
        />

        <label htmlFor="age">Age</label>
        <input
          type="number"
          placeholder="Enter Your Age"
          name="age"
          value={user?.age || ""}
          onChange={(e) =>
            setUser((prev) => ({ ...prev!, age: Number(e.target.value) }))
          }
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default App;
