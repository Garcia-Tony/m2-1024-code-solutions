import { FormEvent } from 'react';

export function RegistrationFormUncontrolled() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget as HTMLFormElement;

    const formData = new FormData(form);

    const formValues = Object.fromEntries(formData);

    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="myInput">Username</label>
      <input id="username" name="username" type="username" />

      <label htmlFor="myInput">Password</label>
      <input id="password" name="password" type="password" />

      <button>Sign Up</button>
    </form>
  );
}
