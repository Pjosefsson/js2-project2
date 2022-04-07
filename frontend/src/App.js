import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { initializeMusicList } from './actions/musicActions';
import MusicPage from './Component/MusicPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
  const dispatch = useDispatch();
  const url = "http://localhost:5004/data.json";

  const fetchMusicList = async () => {
    const res = await fetch(url)
    const data = await res.json()
    return data
  }
  useEffect(() => {
    const getMusicList = async () => {
      let musicList = await fetchMusicList()
      dispatch(initializeMusicList(musicList))
    }
    getMusicList()
  }, [])

  return (
    <Router>
      <main>
        <Routes>
          <Route path="/" exact element={
            <>
              <h1>Hitta musiken</h1>

              <Link to="/musicPage">
                <p>Starta mina förslag</p>
              </Link>

            </>
          } />

          <Route path='/musicPage' element={<MusicPage />} />
        </Routes>
      </main>
    </Router>

  );
}

export default App;
