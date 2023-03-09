import React from 'react'
import {Button} from 'react-bootstrap';

function Header() {
  return (
    <div className="">
        <h1>Todo App</h1>
        <div>Liste des Taches <Button variant="primary" type="submit">Ajouter</Button></div>
    </div>
  )
}

export default Header