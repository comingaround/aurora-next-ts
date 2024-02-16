import styles from "./BestSellers.module.css"
import Image from "next/image";

export default function BestSellers() {
    return(
        <div className={styles.BestSellers}>
            <div className={styles.shouter}>
                <section>
                    <h1>Best Sellers</h1>
                    <a href="#">See Collection</a>
                </section>
                <p>Shop bestselling furniture and decor, handpicked by aurora interior designers.</p>
            </div>
            <div className={styles.BestSection}>
                <div className={styles.BestItem}>
                    <div className={styles.ImageCont}>
                        <Image 
                            src='/BestSellers/Kaefa.png'
                            layout="responsive"
                            width={366}
                            height={335}
                            alt="keafa"
                        />
                    </div>
                    <div>
                        <section>
                            <h3>Kaefa Lounge Chair</h3>
                            <h3>$910</h3>
                        </section>
                        <section>
                            <p>Mustard / Walnut</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="22" viewBox="0 0 37 22" fill="none">
                                <circle cx="26" cy="11" r="10" fill="#4D2F18" stroke="#EFEFEF" stroke-width="2"/>
                                <circle cx="11" cy="11" r="10" fill="#E8AC19" stroke="#EFEFEF" stroke-width="2"/>
                            </svg>
                        </section>
                    </div>
                </div>
                <div className={styles.BestItem}>
                    <div className={styles.ImageCont}>
                        <Image 
                            src='/BestSellers/Accent.png'
                            layout="responsive"
                            width={366}
                            height={335}
                            alt="keafa"
                        />
                    </div>
                    <div>
                        <section>
                            <h3>Accent Side Chair</h3>
                            <h3>$830</h3>
                        </section>
                        <section>
                            <p>Teal / Gold</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="22" viewBox="0 0 37 22" fill="none">
                                <circle cx="26" cy="11" r="10" fill="#CAAB6E" stroke="#EFEFEF" stroke-width="2"/>
                                <circle cx="11" cy="11" r="10" fill="#2E4B4E" stroke="#EFEFEF" stroke-width="2"/>
                            </svg>
                        </section>
                    </div>
                </div>
                <div className={styles.BestItem}>
                    <div className={styles.ImageCont} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Image 
                            src='/BestSellers/Oahe.png'
                            layout="responsive"
                            width={366}
                            height={335}
                            alt="keafa"
                        />
                    </div>
                    <div>
                        <section>
                            <h3>Oahe Coffee Table</h3>
                            <h3>$500</h3>
                        </section>
                        <section>
                            <p>Light Wood</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="22" viewBox="0 0 37 22" fill="none">
                                <circle cx="26" cy="11" r="10" fill="#3A1B02" stroke="#EFEFEF" stroke-width="2"/>
                                <circle cx="11" cy="11" r="10" fill="#CD9854" stroke="#EFEFEF" stroke-width="2"/>
                            </svg>
                        </section>
                    </div>
                </div>
                <div className={styles.BestItem}>
                    <div className={styles.ImageCont}>
                        <Image 
                            src='/BestSellers/accent-table.png'
                            layout="responsive"
                            width={366}
                            height={335}
                            alt="keafa"
                        />
                    </div>
                    <div>
                        <section>
                            <h3>Accent End Table</h3>
                            <h3>$190</h3>
                        </section>
                        <section>
                            <p>Espresso Wood Finish</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                <circle cx="11" cy="11" r="10" fill="#4D2F18" stroke="#EFEFEF" stroke-width="2"/>
                            </svg>
                        </section>
                    </div>
                </div>
                <div className={styles.BestItem}>
                    <div className={styles.ImageCont}>
                        <Image 
                            src='/BestSellers/Josef.png'
                            layout="responsive"
                            width={366}
                            height={335}
                            alt="keafa"
                        />
                    </div>
                    <div>
                        <section>
                            <h3>Josef Retro Armchair</h3>
                            <h3>$1220</h3>
                        </section>
                        <section>
                            <p>Scarlet / Walnut</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="22" viewBox="0 0 37 22" fill="none">
                                <circle cx="26" cy="11" r="10" fill="#4D2F18" stroke="#EFEFEF" stroke-width="2"/>
                                <circle cx="11" cy="11" r="10" fill="#CF521A" stroke="#EFEFEF" stroke-width="2"/>
                            </svg>
                        </section>
                    </div>
                </div>
                <div className={styles.BestItem}>
                    <div className={styles.ImageCont}>
                        <Image 
                            src='/BestSellers/Modern.png'
                            layout="responsive"
                            width={366}
                            height={335}
                            alt="keafa"
                        />
                    </div>
                    <div>
                        <section>
                            <h3>Modern Mid-Century</h3>
                            <h3>$830</h3>
                        </section>
                        <section>
                            <p>Light Gray</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="37" height="22" viewBox="0 0 37 22" fill="none">
                                <circle cx="26" cy="11" r="10" fill="#CD9854" stroke="#EFEFEF" stroke-width="2"/>
                                <circle cx="11" cy="11" r="10" fill="#CBC3B8" stroke="#EFEFEF" stroke-width="2"/>
                            </svg>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}