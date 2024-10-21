import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

export function ValidatedInput() {
  const [password, setPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState(
    'A password is required.'
  );

  return (
    <div>
      <label htmlFor="myInput">Password</label>
      <div className="input-wrapper">
        <input
          id="myInput"
          name="myInput"
          type="password"
          value={password}
          onChange={(e) => {
            const fullPassword = e.target.value;
            setPassword(fullPassword);

            if (fullPassword.length < 1) {
              setValidationMessage('A password is required.');
            } else if (fullPassword.length < 8) {
              setValidationMessage('Your password is too short.');
            } else {
              setValidationMessage('');
              <FaCheck />;
            }
          }}
        />
        <div className="validation">
          {password.length >= 8 ? (
            <FaCheck className="fa-check" />
          ) : (
            <FaTimes className="fa-times" />
          )}
        </div>
      </div>
      <div className="validation-message">{validationMessage}</div>
    </div>
  );
}
