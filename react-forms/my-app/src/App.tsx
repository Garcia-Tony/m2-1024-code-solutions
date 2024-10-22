import { RegistrationFormUncontrolled } from './uncontrolled';
import { RegistrationFormControlled } from './controlled';

function App() {
  return (
    <div className="App">
      <h1>Uncontrolled</h1>
      <RegistrationFormUncontrolled />

      <h1>Controlled</h1>
      <RegistrationFormControlled />
    </div>
  );
}

export default App;
