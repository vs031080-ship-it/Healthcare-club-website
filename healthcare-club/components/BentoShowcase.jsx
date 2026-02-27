'use client';
import { useEffect, useRef } from 'react';
import styles from './BentoShowcase.module.css';

export default function BentoShowcase() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.08 }
        );
        const elements = sectionRef.current?.querySelectorAll('[data-reveal]');
        elements?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.section} id="showcase">
            <div className={styles.container}>
                <div data-reveal className={styles.header}>
                    <h2 className={styles.title}>
                        A centralized approach to personalized health,{' '}
                        <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=160&q=80" className="inline-avatar" alt="App" loading="lazy" />{' '}
                        putting your family&apos;s records secure under{' '}
                        <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=160&q=80" className="inline-avatar" alt="Security" loading="lazy" />{' '}
                        one roof.
                    </h2>
                </div>

                <div className={styles.grid}>
                    {/* Main Large Green Card */}
                    <div data-reveal className={`${styles.card} ${styles.greenCard}`}>
                        <div className={styles.iconCircle}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <h3>Complete Data Control</h3>
                        <p>A secure and centralized repository for all your medical records, instantly accessible anytime you need them.</p>
                        <div className={styles.cardImgWrap}>
                            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Data Security" loading="lazy" />
                        </div>
                    </div>

                    {/* Tall Photo Card */}
                    <div data-reveal className={`${styles.card} ${styles.photoCard}`}>
                        <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&q=80" alt="Family Health" loading="lazy" />
                        <div className={styles.photoOverlay}>
                            <p>Independent accounts with grouped access make family healthcare coordination effortless.</p>
                        </div>
                    </div>

                    {/* Feature List Card */}
                    <div data-reveal className={`${styles.card} ${styles.whiteCard}`}>
                        <div className={styles.iconCircle} style={{ background: 'var(--teal-light)', color: 'var(--teal)' }}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14l-7 7-7-7" /><path d="M12 21V3" /></svg>
                        </div>
                        <h3>Your Health Hub</h3>
                        <div className={styles.itemList}>
                            {['Vitals Tracking', 'Secure Records', 'Emergency Ready'].map((item) => (
                                <div key={item} className={styles.item}>
                                    <span>{item}</span>
                                    <span className={styles.itemArrow}>↗</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
