import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="menu">
      <div className="container">
        <div className="row w-100" id="row">
          <div className="col-12 col-md-6 col-lg-3" id="col">
            <Link to="/login" className="nav-link">Login</Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3" id="col">
            <Link to="/" className="nav-link">Home(index)</Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3" id="col">
            <Link to="/atividade-3" className="nav-link">Atividade-3</Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3" id="col">
            <Link to="/atividade-5" className="nav-link">Atividade-5</Link>
          </div>
          <div className="col-12 col-md-6 col-lg-3" id="col">
            <Link to="/lista-usuarios" className="nav-link">Lista de Usuários</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}