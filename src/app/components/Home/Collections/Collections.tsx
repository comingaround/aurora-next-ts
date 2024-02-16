import styles from './Collections.module.css'
import Image from 'next/image';

export default function Collections() {
    return(
        <div className={styles.Collections}>
            <div className={styles.CollSection}>
                <div className={styles.CollItem}>
                    <Image 
                        src='/Collections/vertical.png'
                        layout='fill'
                        objectFit='cover'
                        alt='vertical'
                    />
                    <div>
                        <h2>Bedroom Collection</h2>
                    </div>
                </div>
                <div className={styles.CollItem}>
                    <Image 
                        src='/Collections/small-one.png'
                        layout='fill'
                        objectFit='cover'
                        alt='small-one'
                    />
                    <div>
                        <h2 style={{paddingBottom: '26px'}}>Shop Artwork</h2>
                        <a href="#">See Collection</a>
                        <p style={{height: '26px'}}></p>
                    </div>
                </div>
                <div className={styles.CollItem}>
                    <Image 
                        src='/Collections/small-two.png'
                        layout='fill'
                        objectFit='cover'
                        alt='small-two'
                    />
                    <div>
                        <h2>Dining Collection</h2>
                    </div>
                </div>
            </div>
            <div className={styles.CollHorz}>
                <Image 
                    src='/Collections/horizontal.png'
                    layout='fill'
                    objectFit='cover'
                    alt='horizontal'
                />
                <div>
                    <h2>Artisanal Nomad Home Collection</h2>
                    <p>Curated by the renowned Estelle Verve, an imaginative compilation of pieces where each item tells a story of craft and wanderlust.</p>
                    <a href="#">See Collection</a>
                </div>
            </div>
        </div>
    );
}