'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    const heroRef = useRef(null);
    const imgRef = useRef(null);

    // Subtle parallax on the photo only
    useEffect(() => {
        const onScroll = () => {
            if (!imgRef.current) return;
            const y = window.scrollY * 0.12;
            imgRef.current.style.transform = `translateY(${y}px)`;
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section ref={heroRef} className={styles.hero} id="hero">
            {/* Background gradient blob */}
            <div className={styles.bgBlob} />
            <div className={styles.bgBlobRight} />

            <div className={styles.container}>
                {/* ── LEFT: Text ── */}
                <div className={styles.left}>
                    <p className={styles.badge}>
                        <span className={styles.badgeDot} />
                        Trusted by 10 Lakh+ Indian Families
                    </p>

                    <h1 className={styles.headline}>
                        <span className={styles.plain}>Confident</span>{' '}
                        <em className={styles.italic}>Health.</em>
                        <br />
                        <span className={styles.teal}>Smarter</span>{' '}
                        <span className={styles.plain}>Care.</span>
                    </h1>

                    <p className={styles.subtext}>
                        One secure app for your entire family&apos;s medical records,
                        vitals, prescriptions, and emergency care — always accessible,
                        always protected.
                    </p>

                    <div className={styles.chipRow}>
                        {['🗂️ Secure Records', '👨‍👩‍👧 Family Linked', '📊 Track Vitals', '🆘 Emergency ✓'].map((c) => (
                            <span key={c} className={styles.chip}>{c}</span>
                        ))}
                    </div>

                    <div className={styles.ctaRow}>
                        <a href="#cta" className={styles.ctaBtn}>
                            Download Free App
                            <span className={styles.ctaArrow}>→</span>
                        </a>
                        <a href="#how-it-works" className={styles.ctaSecondary}>
                            See how it works
                        </a>
                    </div>

                    <p className={styles.trustNote}>
                        Available on iOS & Android · No credit card required
                    </p>
                </div>

                {/* ── RIGHT: Photo ── */}
                <div className={styles.right}>
                    <div className={styles.photoGlow} />
                    <div ref={imgRef} className={styles.photoWrap}>
                        <Image
                            src="/family2.png"
                            alt="A happy Indian multi-generational family — Healthcare Club"
                            width={680}
                            height={600}
                            priority
                            className={styles.photo}
                        />
                    </div>
                </div>
            </div>

            {/* Scroll hint */}
            <div className={styles.scrollHint} aria-hidden="true">
                <span>scroll</span>
                <div className={styles.scrollLine} />
            </div>
        </section>
    );
}
