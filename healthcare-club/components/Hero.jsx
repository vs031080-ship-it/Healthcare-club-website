'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const chips = [
    { label: '🗂️ Secure Records', color: '#c8f7e8', rotate: '-8deg', top: '28%', left: '5%' },
    { label: '👨‍👩‍👧 Family Linked', color: '#fdd5d5', rotate: '6deg', top: '42%', left: '3%' },
    { label: '📊 Track Vitals', color: '#d4f0ff', rotate: '-5deg', top: '28%', right: '5%' },
    { label: '🆘 Emergency ✓', color: '#d8f5d0', rotate: '7deg', top: '42%', right: '3%' },
];

export default function Hero() {
    const photoRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            if (!heroRef.current || !photoRef.current) return;
            const isMobile = window.innerWidth <= 480;
            const heroTop = heroRef.current.offsetTop;
            const heroHeight = heroRef.current.offsetHeight;
            const vp = window.innerHeight;
            const scrolled = window.scrollY - heroTop;
            const maxScroll = heroHeight - vp;
            const progress = Math.max(0, Math.min(1, scrolled / maxScroll));

            // On mobile: gentler movement (–80px vs –160px) so it feels right on small screens
            const yMove = progress * (isMobile ? -80 : -160);
            const scale = 1 + progress * (isMobile ? 0.03 : 0.06);
            // translateX(-50%) keeps it centred horizontally on all screen sizes
            photoRef.current.style.transform = `translateX(-50%) translateY(${yMove}px) scale(${scale})`;
            photoRef.current.style.opacity = String(1 - progress * 0.4);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section ref={heroRef} className={styles.hero} id="hero">
            <div className={styles.sticky}>
                {/* Yellow gradient background circle */}
                <div className={styles.bgCircle} />

                {/* Floating feature chips */}
                {chips.map((chip, i) => (
                    <div
                        key={i}
                        className={styles.chip}
                        style={{
                            background: chip.color,
                            top: chip.top,
                            left: chip.left ?? 'auto',
                            right: chip.right ?? 'auto',
                            '--rot': chip.rotate,
                            animationDelay: `${i * 0.6}s`,
                        }}
                    >
                        {chip.label}
                    </div>
                ))}

                {/* Hero headline — z-index 2, behind photo */}
                <div className={styles.textBlock}>
                    <h1 className={styles.headline}>
                        <span className={styles.plain}>Confident</span>{' '}
                        <em className={styles.italicWord}>Health.</em>
                        <span className={styles.secondLine}>
                            <span className={styles.teal}>Smarter</span>{' '}
                            <span className={styles.plain}>Care.</span>
                        </span>
                    </h1>
                </div>

                {/* Central family photo — JS animates via inline style */}
                <div ref={photoRef} className={styles.photoWrap}>
                    <Image
                        src="/family2.png"
                        alt="A happy Indian multi-generational family — Healthcare Club"
                        width={920}
                        height={690}
                        priority
                        className={styles.photo}
                    />
                </div>

                {/* CTA pill */}
                <div className={styles.ctaRow}>
                    <a href="#cta" className={styles.ctaBtn}>
                        Download Free App
                        <span className={styles.ctaArrow}>→</span>
                    </a>
                </div>

                {/* Scroll hint */}
                <div className={styles.scrollHint} aria-hidden="true">
                    <span>scroll</span>
                    <div className={styles.scrollLine} />
                </div>
            </div>
        </section>
    );
}
