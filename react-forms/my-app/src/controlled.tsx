import { FormEvent, useState } from 'react';

export function RegistrationFormControlled() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({ username, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="myInput">Username</label>
      <input
        id="usernames"
        name="usernames"
        type="usernames"
        value={username}
        onChange={(e) => {
          const fullUsername = e.target.value;
          setUsername(fullUsername);
        }}
      />

      <label htmlFor="myInput">Password</label>
      <input
        id="passwords"
        name="passwords"
        type="password"
        value={password}
        onChange={(e) => {
          const fullPassword = e.target.value;
          setPassword(fullPassword);
        }}
      />

      <button>Sign Up</button>
    </form>
  );
}
