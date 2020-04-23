import React from 'react';
import './App.css';
import GitHubRepos from './components/GitHubRepos'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Contact from './components/Contact'




function App() {
  return (
    <>
      <Header/>
      <About/>
      <Skills/>
      <GitHubRepos/>
      <Contact/>
      <Footer/>
    </>

  );
}


export default App;