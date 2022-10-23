
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import FilmDetails from './components/pages/FilmDetails';
import { useState } from 'react';

function App() {

  const [films, setFilms] = useState(
  
      [
    {id : 1, title : "Bleach", image : "images/Bleach.jpg", description : "Un adolescent japonais qui a le pouvoir de vois des fantômes doit lutter contre les mauvais esprits et aider les âmes perdues à trouver leur chemin vers une autre vie.",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/FmJRFxwV2I4" },
    {id : 2, title : "La casa de papel", image : "images/la-casa-de-papel.jpg", description : "Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/FmJRFxwV2I4" }, 
    {id : 3, title : "Squid_game", image : "images/Squid_game.jpg", description : " African Dance group in south Africa",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/NN5kLqu1xWI" },
    {id : 4, title : "Entergalactic", image : "images/intergalactic-.jpg", description : "Après une rencontre fortuite avec Meadow, sa nouvelle voisine photographe, Jabari doit se demander s'il peut laisser l'amour envahir sa vie.",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/L51xHrDszdk" },
    {id : 5, title : "Scream", image : "images/scream.jpg", description : " African Dance group in south Africa",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/FmJRFxwV2I4" },
    {id : 6, title : "You're Next", image : "images/youre-next.jpg", description : " African Dance group in south Africa",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/FmJRFxwV2I4" },
    {id : 7, title : "Le Crocodile Du Botswanga", image : "images/Le_crocodile.jpg", description : " African Dance group in south Africa",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/FmJRFxwV2I4" },
    {id : 8, title : "Superfly", image : "images/Superfly.jpg", description : " African Dance group in south Africa",  duration :  "2:45min" , videoLink : "https://www.youtube.com/embed/FmJRFxwV2I4" },
    
  ])
  return (
      <Routes>
        <Route path='/' element ={<Home films = {films}/>} />
        <Route path='detail/:id' element ={<FilmDetails films = {films}/>} />
      </Routes>
  );
}

export default App;
