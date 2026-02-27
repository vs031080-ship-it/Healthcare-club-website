'use client';
import { useEffect, useRef } from 'react';
import styles from './MissionStatement.module.css';

export default function MissionStatement() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right')
                            .forEach(el => el.classList.add('visible'));
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.mission} id="mission">
            <div className={styles.container}>
                {/* Left staggered image */}
                <div className={`${styles.imgLeft} reveal-left`}>
                    <img
                        src="https://images.unsplash.com/photo-1543269664-7eef42226a21?w=600&q=80"
                        alt="Family outdoors laughing"
                        loading="lazy"
                    />
                </div>

                {/* Center text */}
                <div className={`${styles.center} reveal`}>
                    <p className="section-label">( About Healthcare Club )</p>
                    <h2 className={styles.headline}>
                        Health — <em>first.</em>
                        <br />
                        Family — <em>always.</em>
                    </h2>
                    <p className={styles.body}>
                        We believe that managing your family's health should be simple, secure, and stress-free.
                        Healthcare Club is built around your life — not the other way around. Every feature is designed
                        with care, built on trust, and powered by technology.
                    </p>
                </div>

                {/* Right staggered images */}
                <div className={`${styles.imgRight} reveal-right`}>
                    <img
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80"
                        alt="Medical tracking dashboard"
                        loading="lazy"
                    />
                    <img
                        src="https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?w=600&q=80"
                        alt="Cooking healthy food together"
                        className={styles.imgOffset}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
