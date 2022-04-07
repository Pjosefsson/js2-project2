import { useEffect, useState } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { initializeMusicList } from './actions/musicActions';
import MusicPage from './Component/MusicPage';
// import Link from 'react-dom';

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

  // function handleClick() {

  //   console.log("du kommer åt knappen");
  // }
  // const [state, setState] = useState("start")
  // const AddMusicButton = (props) => {
  //   return <button onClick={props.addMusic}>Starta mina låtförslag</button>
  // }

  return (
    <main>
      <h1>Hitta musiken</h1>

      {/* <Link to="/MusicPage">
        <button>Starta mina förslag</button>
      </Link> */}
      {<button onClick={() => dispatch(initializeMusicList(music))}>Starta mina låtförslag</button>}

      {/* {state === "start" && (<AddMusicButton addMusic={() => setState("add-music")} />)}
      {state === "add-music" && <MusicPage />}
      { {<AddMusicButton addMusic={triggerAddMusicState} />} } */}

      <MusicPage />

    </main>
  );
}

export default App;
