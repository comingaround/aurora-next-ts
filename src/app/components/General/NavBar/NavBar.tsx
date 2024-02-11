"use client";
import { useState, useEffect } from 'react';
import styles from "./NavBar.module.css";
import Link from 'next/link'

export default function NavBar() {
    const [NavVisible, setNavVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => setNavVisible(window.innerWidth > 768);

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return(
        <div className={styles.NavBar}>
            <div></div>
            <ul className={styles.NavList} style={{ opacity: NavVisible ? '1' : '0', visibility: NavVisible ? 'visible' : 'hidden', transition: 'opacity 0.1s linear, visibility 0.1s linear 0.2s' }}>
                <div className={styles.Logo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="97" height="22" viewBox="0 0 97 22" fill="none">
                        <path d="M52.9025 9.37527C53.1772 7.64259 54.6352 5.71973 57.4878 5.71973C61.1011 5.71973 62.0942 7.89615 62.0942 10.2416V14.4465C62.0942 15.2706 62.1365 16.3271 62.2633 16.9611H59.7699C59.7276 16.5385 59.7065 16.1158 59.7065 15.6721V15.165H59.6854C59.3261 16.0525 58.3964 17.2358 56.22 17.2358C53.7477 17.2358 52.3743 15.7144 52.3743 13.9817C52.3743 10.96 56.0721 10.7065 57.6568 10.4529C59.0514 10.2416 59.6854 9.96692 59.6854 9.03719C59.6854 8.17084 58.8613 7.62146 57.5301 7.62146C56.3468 7.62146 55.4804 8.29763 55.2269 9.37527H52.9025ZM54.8043 13.8972C54.8043 14.7635 55.5438 15.3974 56.8328 15.3974C58.2908 15.3974 59.7276 14.4888 59.7276 11.8898V10.7487C59.4952 11.3615 58.9247 11.8898 57.0652 12.249C55.5649 12.5237 54.8043 12.9886 54.8043 13.8972Z" fill="#0E0E0E"/>
                        <path d="M48.8434 6.0368V8.06531C49.4139 6.54393 50.555 5.95228 52.1186 5.93115V8.25549C51.9918 8.25549 51.3579 8.25549 51.0198 8.36114C49.9422 8.57244 48.8857 9.14296 48.8857 11.9744V16.9612H46.4346V6.0368H48.8434Z" fill="#0E0E0E"/>
                        <path d="M39.2973 17.257C36.0644 17.257 33.6555 14.9327 33.6555 11.5095C33.6555 8.08643 36.0644 5.74097 39.2973 5.74097C42.5091 5.74097 44.918 8.08643 44.918 11.5095C44.918 14.9327 42.5091 17.257 39.2973 17.257ZM36.0432 11.5095C36.0432 13.5803 37.3322 15.2707 39.2973 15.2707C41.2413 15.2707 42.5303 13.5803 42.5303 11.5095C42.5303 9.41764 41.2413 7.72722 39.2973 7.72722C37.3322 7.72722 36.0432 9.41764 36.0432 11.5095Z" fill="#0E0E0E"/>
                        <path d="M29.8586 6.0368V8.06531C30.4291 6.54393 31.5701 5.95228 33.1338 5.93115V8.25549C33.007 8.25549 32.3731 8.25549 32.035 8.36114C30.9573 8.57244 29.9008 9.14296 29.9008 11.9744V16.9612H27.4497V6.0368H29.8586Z" fill="#0E0E0E"/>
                        <path d="M15.6541 12.8617V6.03662H18.084V12.3546C18.084 14.045 18.6334 15.1438 20.1759 15.1438C21.6762 15.1438 22.8172 13.8337 22.8172 11.1079V6.03662H25.2683V16.961H22.8595V15.0381C22.2678 16.2848 21.2747 17.2568 19.5843 17.2568C16.7317 17.2568 15.6541 15.3762 15.6541 12.8617Z" fill="#0E0E0E"/>
                        <path d="M4.4599 9.37527C4.73459 7.64259 6.19258 5.71973 9.04518 5.71973C12.6585 5.71973 13.6516 7.89615 13.6516 10.2416V14.4465C13.6516 15.2706 13.6938 16.3271 13.8206 16.9611H11.3273C11.285 16.5385 11.2639 16.1158 11.2639 15.6721V15.165H11.2427C10.8835 16.0525 9.95378 17.2358 7.77736 17.2358C5.30511 17.2358 3.93164 15.7144 3.93164 13.9817C3.93164 10.96 7.62945 10.7065 9.21422 10.4529C10.6088 10.2416 11.2427 9.96692 11.2427 9.03719C11.2427 8.17084 10.4186 7.62146 9.08744 7.62146C7.90414 7.62146 7.0378 8.29763 6.78423 9.37527H4.4599ZM6.36163 13.8972C6.36163 14.7635 7.10119 15.3974 8.39014 15.3974C9.84813 15.3974 11.285 14.4888 11.285 11.8898V10.7487C11.0526 11.3615 10.482 11.8898 8.62257 12.249C7.12232 12.5237 6.36163 12.9886 6.36163 13.8972Z" fill="#0E0E0E"/>
                        <path d="M72.8308 8.86881C73.959 7.67444 75.2984 6.72694 76.7725 6.08048C78.2465 5.43402 79.8264 5.10132 81.4219 5.10132C83.0174 5.10132 84.5973 5.43402 86.0713 6.08048C87.5453 6.72695 88.8848 7.67443 90.013 8.86881C91.1411 10.0633 92.036 11.4813 92.6466 13.0419C93.1672 14.3727 93.4724 15.7848 93.551 17.2192H89.7969C89.6462 12.215 85.8801 8.20872 81.2562 8.20872C76.6324 8.20872 72.8663 12.215 72.7156 17.2192H69.2927C69.3713 15.7848 69.6765 14.3727 70.1972 13.042C70.8078 11.4813 71.7027 10.0633 72.8308 8.86881Z" fill="#0E0E0E"/>
                    </svg>
                    <div className={styles.BurgerOff} onClick={() => setNavVisible(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 6L18 18" stroke="#0E0E0E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </div>
                </div>
                <Link href="/">
                    <li>Collections</li>
                    <p>-&gt;</p>
                </Link>
                <Link href="/about">
                    <li>Wedding Registry</li>
                    <p>-&gt;</p>
                </Link>
                <a href="">
                    <li>Free Design Service</li>
                    <p>-&gt;</p>
                </a>
                <a href="">
                    <li>Trade Program</li>
                    <p>-&gt;</p>
                </a>
                <div className={styles.LoginButton}>
                    <a href="#">Login</a>
                </div>
            </ul>
            <ul className={styles.NavIcons}>
                <a href="">
                <li>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.97 19.19C6.43 19.19 2.75 15.51 2.75 10.97C2.75 6.43 6.43 2.75 10.97 2.75C15.51 2.75 19.19 6.43 19.19 10.97C19.19 15.51 15.51 19.19 10.97 19.19Z" stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M21.2496 21.2499L17.1396 17.1399" stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </li>
                </a>
                <a href="">
                <li>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.1111 3C19.6333 3 22 6.3525 22 9.48C22 15.8138 12.1778 21 12 21C11.8222 21 2 15.8138 2 9.48C2 6.3525 4.36667 3 7.88889 3C9.91111 3 11.2333 4.02375 12 4.92375C12.7667 4.02375 14.0889 3 16.1111 3Z" stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </li>
                </a>
                <a href="">
                <li>
                    <svg width="22" height="24" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.1596 5.88989H3.8296C2.7596 5.88989 1.87961 6.69989 1.77961 7.76989L0.969614 17.0199C0.859614 18.2199 1.8096 19.2599 3.0196 19.2599H14.9796C16.1896 19.2599 17.1296 18.2299 17.0296 17.0199L16.2196 7.76989C16.1196 6.69989 15.2296 5.88989 14.1596 5.88989Z" stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M13.1096 8.97V4.86C13.1096 2.59 11.2696 0.75 8.99963 0.75C6.72963 0.75 4.88965 2.59 4.88965 4.86V8.97" stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.42969 13.0801L8.13971 14.8001L11.5697 11.3701" stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </li>
                </a>
                <a href="" className={styles.LoginIcon}>
                <li>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="#0E0E0E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </li>
                </a>
                <div className={styles.BurgerOn} onClick={() => setNavVisible(true)}>
                    <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 5.83325H17.5" stroke="#0E0E0E" strokeWidth="1.25" stroke-linecap="round"/>
                        <path d="M2.5 10H17.5" stroke="#0E0E0E" strokeWidth="1.25" stroke-linecap="round"/>
                        <path d="M2.5 14.1667H17.5" stroke="#0E0E0E" strokeWidth="1.25" stroke-linecap="round"/>
                    </svg>
                </div>
            </ul>
        </div>
    );
}
