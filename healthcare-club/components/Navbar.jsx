'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
    const navRef = useRef(null);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const onScroll = () => {
            if (!navRef.current) return;
            if (window.scrollY > 50) {
                navRef.current.classList.add(styles.scrolled);
            } else {
                navRef.current.classList.remove(styles.scrolled);
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (id) => {
        if (pathname !== '/') {
            router.push('/#' + id);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav ref={navRef} className={styles.nav}>
            <div className={styles.inner}>
                <a className={styles.logo} href="/">
                    <Image src="/logo-icon.png" alt="Healthcare Club Icon" className={styles.logoIconImage} width={28} height={28} />
                    <span>Healthcare <strong>Club</strong></span>
                </a>

                <ul className={styles.links}>
                    <li><button onClick={() => scrollTo('features')}>Features</button></li>
                    <li><button onClick={() => scrollTo('how-it-works')}>How It Works</button></li>
                    <li><button onClick={() => scrollTo('vitals')}>Vitals</button></li>
                    <li><button onClick={() => scrollTo('reviews')}>Reviews</button></li>
                </ul>

                <button className={styles.cta} onClick={() => scrollTo('cta')}>
                    Download App
                </button>
            </div>
        </nav>
    );
}
