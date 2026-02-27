'use client';
import { useEffect, useRef } from 'react';
import styles from './FeaturesGrid.module.css';

const features = [
    {
        id: 'hub',
        label: 'Centralized Health Hub',
        desc: 'One secure place for all your prescriptions, lab reports, and insurance documents. Accessible anytime, anywhere.',
        bg: 'linear-gradient(135deg, #e0faf3 0%, #b8f0e0 100%)',
        icon: '🗂️',
        size: 'large',
        imgSrc: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80', // Medical records/tablet
    },
    {
        id: 'vitals',
        label: 'Smart Vitals Monitoring',
        desc: 'Track blood pressure, blood sugar, weight & more with beautiful trend graphs.',
        bg: 'linear-gradient(135deg, #fef9c3 0%, #fde68a 100%)',
        icon: '❤️',
        size: 'small',
        imgSrc: null,
    },
    {
        id: 'family',
        label: 'Family Account Linking',
        desc: 'Invite and manage family members with granular privacy controls and independent profiles.',
        bg: 'linear-gradient(135deg, #fce8e8 0%, #fca5a5 100%)',
        icon: '👨‍👩‍👧‍👦',
        size: 'small',
        imgSrc: null,
    },
    {
        id: 'emergency',
        label: 'Emergency Access',
        desc: 'In critical moments, trusted contacts instantly access your complete health records.',
        bg: 'linear-gradient(135deg, #fde8d5 0%, #fed7aa 100%)',
        icon: '🆘',
        size: 'small',
        imgSrc: null,
    },
    {
        id: 'nearby',
        label: 'Find Nearby Facilities',
        desc: 'Locate hospitals, labs, and pharmacies near you. Get directions and contact info instantly.',
        bg: 'linear-gradient(135deg, #ede9fe 0%, #c4b5fd 100%)',
        icon: '📍',
        size: 'small',
        imgSrc: null,
    },
];

export default function FeaturesGrid() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const cards = sectionRef.current?.querySelectorAll('[data-reveal]');
        if (!cards) return;
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
        cards.forEach((c) => observer.observe(c));
        return () => observer.disconnect();
    }, []);

    const handleMouseMove = (e, card) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `perspective(800px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg) translateY(-8px)`;
    };
    const handleMouseLeave = (card) => {
        card.style.transform = '';
    };

    return (
        <section ref={sectionRef} className={styles.section} id="features">
            <div className={styles.container}>
                <div className={styles.header} data-reveal>
                    <div className={styles.headerLeft}>
                        <p className="section-label">( Core Features )</p>
                        <h2 className={styles.title}>
                            Find your <span className={styles.accent}>perfect</span> solution
                        </h2>
                        <p className={styles.sub}>Discover our most trusted health and wellness features</p>
                    </div>
                    <a href="#cta" className="btn-primary">Get Started</a>
                </div>

                <div className={styles.grid}>
                    {features.map((f, i) => (
                        <div
                            key={f.id}
                            data-reveal
                            className={`${styles.card} ${styles[f.size]}`}
                            style={{ background: f.bg, transitionDelay: `${i * 0.12}s` }}
                            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
                        >
                            <div className={styles.cardTop}>
                                <span className={styles.icon}>{f.icon}</span>
                            </div>

                            {f.id === 'hub' && f.imgSrc && (
                                <div className={styles.imgWrap}>
                                    <img src={f.imgSrc} alt={f.label} className={styles.cardImg} loading="lazy" />
                                </div>
                            )}

                            <div className={styles.cardBody}>
                                <h3 className={styles.cardTitle}>{f.label}</h3>
                                <p className={styles.cardDesc}>{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
