import { useSelector } from "react-redux";
import { SongCard } from './SongCard'
import { PlaylistSongCard } from './PlaylistSongCard'

function MusicPage() {
    const songs = useSelector(state => state.music)
    const playlist = useSelector(state => state.playlist) //ger uppdateringar

    return (<main>
        <p>Music page</p>
        <h1>Spellista</h1>
        {
            playlist.map(song => <PlaylistSongCard key={song.id} {...song} />)
        }
        <h1>Tillgängliga låtar</h1>
        {
            songs.map(song => <SongCard key={song.title} {...song} />)
        }
        <section>
            <p>Lägg till låt på "Ny låt" och ta bort låt på "Delete".</p>

            <button>Ny låt</button>



        </section>
    </main>);


}


export default MusicPage;

