import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

// Componentes temporários (placeholders) para as outras páginas solicitadas no seu menu
const Login = () => <div className="container p-4"><h2>[Placeholder] Componente LoginForm</h2></div>;
const Atividade3 = () => <div className="container p-4"><h2>[Placeholder] Atividade 3</h2></div>;
const Atividade5 = () => <div className="container p-4"><h2>[Placeholder] Atividade 5</h2></div>;
const ListaUsuarios = () => <div className="container p-4"><h2>[Placeholder] Componente UserTable</h2></div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <hr />
      
      {/* O React Router decide qual componente exibir aqui dentro */}
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/atividade-3" element={<Atividade3 />} />
        <Route path="/atividade-5" element={<Atividade5 />} />
        <Route path="/lista-usuarios" element={<ListaUsuarios />} />
      </Routes>
      
      <hr />
      <Footer />
    </Router>
  );
}

export default App;