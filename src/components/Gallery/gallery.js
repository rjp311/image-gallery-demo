import styles from './gallery.module.scss'
import { Board } from '../Board/board';

export const Gallery = async () => {

    // Try to fetch image data
    let cats
    let dogs
    try {
        const resCats = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
        const resDogs = await fetch('https://api.thedogapi.com/v1/images/search?limit=10');
        cats = await resCats.json()
        dogs = await resDogs.json()
    } catch (e) {
        console.log(e);
    }
    
    // Pass response body to board rendering component
    return (
        <section className={styles.section}>
            <h2>Cats</h2>
            <Board data={cats}></Board>
            <h2>Dogs</h2>
            <Board data={dogs}></Board>
        </section>
    )
}