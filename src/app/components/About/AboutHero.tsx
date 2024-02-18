import styles from '../Home/Hero/Hero.module.css';
import Image from 'next/image';

export default function AboutHero() {
    return(
        <div className={styles.Hero}>
            <Image 
                src='/about-header.png'
                layout="fill"
                objectFit="cover"
                alt="about-header"
            />
            <div className={styles.HeroText}>
                <h1>Exceptional Furniture for Every Home</h1>
                <h3>Crafting unique environments with a blend of exceptional design and a nod to history, we create spaces that tell your story.</h3>
            </div>
        </div>
    );
}