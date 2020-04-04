import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

export function Login() {
  const history = useHistory();

  function handleSubmit() {
    history.push('/perfil');
  }

  return (
    <>
      <h1>Login</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}>Avançar</Button>
    </>
  );
}
