import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { store } from "..";
import { useDispatch } from 'react-redux';
import { initializeMusicList } from '../actions/musicActions';

function MusicPage() {
    const musicStore = store.getState().music;
    const dispatch = useDispatch();
    const url = "http://localhost:5004/data.json";

    const fetchMusicList = async () => {
        const res = await fetch(url)
        const data = await res.json()
        return data
    }
    useEffect(() => {
        const getMusicList = async () => {
            console.log('1')
            let musicList = await fetchMusicList()
            musicList.push(musicList)
            console.log('Music LIST', musicList)
            initializeMusicList(musicList)
        }
        getMusicList()
    }, [])

    // function randomMusic({ selectedMusic }) {
    //     let musicSong = useSelector((state) => state.musicStore.music);
    //     const [random, setRandom] = useState([]);
    //     const [view, setView] = useState(false);

    //     store.subscribe(() => (setRandom(store.getState().musicStore.music)));
    //     useEffect(() => (setRandom(randomMusic)), []);

    //     const randomMusicSong = () => {
    //         let randomMs = Math.floor(Math.random() * musicStore.length)
    //         setRandom(musicStore[randomMs])
    //         setView(true)
    //     }
    //     console.log(random);
    // }

    return (<main>
        <h1>Music page</h1>

        {/* {musicStore[Math.floor(Math.random() * musicStore.length)]} */}
        <section>
            <p>Lägg till låt på "Ny låt" och ta bort låt på "Delete".</p>

            <button>Ny låt</button>
            <button>Delete</button>



        </section>
    </main>);


}


export default MusicPage;

