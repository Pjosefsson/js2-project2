import { useSelector } from "react-redux";
import { SongCard } from './SongCard'
import { PlaylistSongCard } from './PlaylistSongCard'
import styles from '../Component/MusicPage.module.css'

function MusicPage() {
    const songs = useSelector(state => state.music)
    const playlist = useSelector(state => state.playlist) //ger uppdateringar

    return (
        <main>
            <p className={styles.header}>Music page</p>
            <p className={styles.info}>Ta bort eller lägg till dina favoriter på spellistan.</p>

            <h1>Spellista</h1>
            {
                playlist.map(song => <PlaylistSongCard key={song.id} {...song} />)
            }
            <h1>Tillgängliga låtar</h1>
            {
                songs.map(song => <SongCard key={song.title} {...song} />)
            }

        </main>);


}


export default MusicPage;

