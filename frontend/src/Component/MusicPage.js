import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { store } from "..";

function MusicPage() {
    const musicStore = store.getState().music;

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

