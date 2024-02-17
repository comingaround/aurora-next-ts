import styles from '../Home/Header/Header.module.css';
import Image from 'next/image';

export default function AboutHeader() {
    return(
        <div className={styles.Header}>
            <Image 
                src='/about-header.png'
                layout="fill"
                objectFit="cover"
                alt="about-header"
            />
            <div className={styles.HeaderText}>
                <h1>Exceptional Furniture for Every Home</h1>
                <h3>Crafting unique environments with a blend of exceptional design and a nod to history, we create spaces that tell your story.</h3>
            </div>
        </div>
    );
}