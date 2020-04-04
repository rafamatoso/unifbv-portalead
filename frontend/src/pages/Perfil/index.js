import React from 'react';
import { Button } from '@material-ui/core';

export function Perfil({ history }) {

  function handleSubmit() {
    history.goBack();
  }

  return (
    <>
      <h1>Perfil</h1>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSubmit}>Voltar</Button>
    </>
  );
}
