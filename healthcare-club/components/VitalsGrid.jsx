'use client';
import { useEffect, useRef } from 'react';
import styles from './VitalsGrid.module.css';

const vitals = [
    { id: 1, label: 'Blood Pressure', value: '120/80', unit: 'mmHg', icon: '❤️', color: '#ff6b6b' },
    { id: 2, label: 'Blood Sugar', value: '95', unit: 'mg/dL', icon: '🩸', color: '#0abf8c' },
    { id: 3, label: 'Temperature', value: '98.6', unit: '°F', icon: '🌡️', color: '#ffcc33' },
    { id: 4, label: 'Body Weight', value: '72', unit: 'kg', icon: '⚖️', color: '#4facfe' },
];

export default function VitalsGrid() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                    }
                });
            },
            { threshold: 0.1 }
        );
        const elements = sectionRef.current?.querySelectorAll('[data-reveal]');
        elements?.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className={styles.section} id="vitals">
            <div className={styles.container}>
                <div data-reveal className={styles.header}>
                    <p className="section-label">( Vitals Tracking )</p>
                    <h2 className={styles.title}>Simple vitals tracking for the whole family</h2>
                </div>

                <div className={styles.grid}>
                    {vitals.map((v, i) => (
                        <div
                            key={v.id}
                            data-reveal
                            className={styles.card}
                            style={{ transitionDelay: `${i * 0.1}s` }}
                        >
                            <div className={styles.iconBox} style={{ backgroundColor: v.color + '15', color: v.color }}>
                                {v.icon}
                            </div>
                            <div className={styles.content}>
                                <span className={styles.vLabel}>{v.label}</span>
                                <div className={styles.valueRow}>
                                    <span className={styles.vValue}>{v.value}</span>
                                    <span className={styles.vUnit}>{v.unit}</span>
                                </div>
                            </div>
                            <div className={styles.chartPad}>
                                {/* Simplified bar chart representation */}
                                <div className={styles.bars}>
                                    {[40, 60, 45, 70, 55, 80].map((h, j) => (
                                        <div
                                            key={j}
                                            className={styles.bar}
                                            style={{
                                                '--h': `${h}%`,
                                                backgroundColor: v.color,
                                                animationDelay: `${i * 0.1 + j * 0.05}s`
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
