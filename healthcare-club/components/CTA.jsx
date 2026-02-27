'use client';
import { useEffect, useRef } from 'react';
import styles from './CTA.module.css';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.healthcareclub&pcampaignid=web_share';
const APP_STORE_URL = 'https://apps.apple.com/in/app/healthcare-club/id6523422689';

const stats = [
    { value: '4.8★', label: 'Rating' },
    { value: '100%', label: 'Secure' },
];

export default function CTA() {
    const cardRef = useRef(null);

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
            { threshold: 0.1 }
        );
        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.section} id="cta">
            {/* Decorative blobs */}
            <div className={styles.blob1} />
            <div className={styles.blob2} />

            <div className={styles.container}>
                <div ref={cardRef} className={styles.card}>
                    {/* Badge */}
                    <div className={styles.badge}>
                        <span className={styles.badgeDot} />
                        Now Available on Google Play
                    </div>

                    <h2 className={styles.title}>
                        Your Family&apos;s Health,<br />
                        <span className={styles.accent}>Always in Your Pocket.</span>
                    </h2>

                    <p className={styles.desc}>
                        Trust Healthcare Club for your medical records,
                        vitals tracking, and emergency care — all in one secure app.
                    </p>

                    {/* CTA Buttons */}
                    <div className={styles.btnRow}>
                        {/* Google Play — real link */}
                        <a
                            href={PLAY_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.playBtn}
                        >
                            <svg className={styles.playIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M3.18 23.76c.42.24.9.24 1.32 0L16.38 12 4.5.24C4.08 0 3.6 0 3.18.24 2.34.72 2.34 1.62 2.34 2.52v19.2c0 .9.84 1.8 .84 2.04z" fill="#fff" />
                                <path d="M20.52 10.2l-3.12-1.8L13.98 12l3.42 3.6 3.12-1.8a2.04 2.04 0 000-3.6z" fill="#fff" opacity=".9" />
                                <path d="M4.5.24l12.9 7.56-3.42 3.6L4.5.24z" fill="#fff" opacity=".7" />
                                <path d="M4.5 23.76l9.48-11.16-3.42-3.6L4.5 23.76z" fill="#fff" opacity=".7" />
                            </svg>
                            <div className={styles.playText}>
                                <span className={styles.playLabel}>GET IT ON</span>
                                <span className={styles.playStore}>Google Play</span>
                            </div>
                        </a>

                        {/* Apple App Store — real link */}
                        <a
                            href={APP_STORE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.appleBtn}
                        >
                            <svg className={styles.playIcon} viewBox="0 0 24 24" fill="none">
                                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.78 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" fill="white" />
                            </svg>
                            <div className={styles.playText}>
                                <span className={styles.playLabel}>DOWNLOAD ON THE</span>
                                <span className={styles.playStore}>App Store</span>
                            </div>
                        </a>
                    </div>

                    {/* Stats row */}
                    <div className={styles.statsRow}>
                        {stats.map((s, i) => (
                            <div key={i} className={styles.statItem}>
                                <span className={styles.statValue}>{s.value}</span>
                                <span className={styles.statLabel}>{s.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Trust note */}
                    <p className={styles.trustNote}>
                        🔒 End-to-end encrypted &nbsp;·&nbsp; ✅ No credit card required &nbsp;·&nbsp; 🏥 Trusted by doctors
                    </p>
                </div>
            </div>
        </section>
    );
}
