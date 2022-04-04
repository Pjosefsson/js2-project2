import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { initializeMusicList } from './actions/musicActions';

//fetcha här http://localhost:5004/data.json
//sen när datan kommit in -> skicka till redux store

function App() {
  const dispatch = useDispatch();
  const url = "http://localhost:5004/data.json";
  const [music, setMusic] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setMusic(data))
  }, [])

  useEffect(() => {
    dispatch(initializeMusicList(music))
  }, [music])


  return (
    <main>
      <p>Hohoh</p>

      {music.map((music) => (
        <p>{music.title}</p>
      ))
      }
    </main>
  );
}

export default App;
