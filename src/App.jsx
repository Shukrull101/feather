import React from 'react';
import Header from './widgets/header/Header.jsx';
import Footer from './widgets/footer/Footer.jsx';
import Homepage from './pages/homepage/homepage.jsx';
import './App.css';


export default function App() {
  return (
    <>
      <Header />
      <main>
        <Homepage />
      </main>
      <Footer />
    </>
  );
}