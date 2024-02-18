import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero(){

    return(
        <div className={styles.Hero}>
            <Image 
                src='/header-dimmed.png'
                layout="fill"
                objectFit="cover"
                alt="header-hero"
            />
            <div className={styles.HeroText}>
                <h1>Exceptional Furniture for Every Home</h1>
                <h3>Crafting unique environments with a blend of exceptional design and a nod to history, we create spaces that tell your story.</h3>
            </div>
        </ div>
    );
}