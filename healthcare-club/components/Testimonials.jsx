'use client';
import { useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';

const reviews = [
    {
        id: 1,
        text: "Having all my kids' vaccination records and my parents' health trends in one app is a game changer. The interface is beautiful and intuitive.",
        author: "Priya S.",
        role: "Mother of two",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80"
    },
    {
        id: 2,
        text: "The vitals tracker helped me identify a blood pressure spike early. Being able to instantly share the graph with my doctor was incredible.",
        author: "Rahul M.",
        role: "Tech Professional",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80"
    },
    {
        id: 3,
        text: "I linked my elderly mother's account to mine. Now I get updates when she logs her sugar levels. We feel so much more connected and secure.",
        author: "Anjali K.",
        role: "Teacher",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80"
    }
];

export default function Testimonials() {
    const ref = useRef(null);

    useEffect(() => {
        const cards = ref.current?.querySelectorAll('[data-reveal]');
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
            { threshold: 0.1 }
        );
        cards.forEach((c) => observer.observe(c));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={ref} className={styles.section} id="reviews">
            <div className={styles.container}>
                <div data-reveal className={styles.header}>
                    <p className="section-label" style={{ color: 'var(--teal-light)' }}>( Member Stories )</p>
                    <h2 className={styles.title}>
                        Trusted by families across India
                    </h2>
                </div>

                <div className={styles.grid}>
                    {reviews.map((r, i) => (
                        <div
                            key={r.id}
                            data-reveal
                            className={styles.card}
                            style={{ transitionDelay: `${i * 0.15}s` }}
                        >
                            <div className={styles.stars}>★★★★★</div>
                            <p className={styles.text}>"{r.text}"</p>
                            <div className={styles.authorRow}>
                                <img src={r.avatar} alt={r.author} className={styles.avatar} loading="lazy" />
                                <div>
                                    <h4 className={styles.authorName}>{r.author}</h4>
                                    <p className={styles.authorRole}>{r.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
