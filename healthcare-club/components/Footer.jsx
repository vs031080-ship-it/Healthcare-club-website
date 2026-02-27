import Image from 'next/image';
import styles from './Footer.module.css';

const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Vitals', href: '#vitals' },
    { label: 'Download', href: '#cta' },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                {/* Logo */}
                <div className={styles.logo}>
                    <Image src="/logo-icon.png" alt="Healthcare Club Icon" width={24} height={24} />
                    <span>Healthcare <strong>Club</strong></span>
                </div>

                {/* Nav links — same as navbar */}
                <nav className={styles.links}>
                    {navLinks.map((link) => (
                        <a key={link.label} href={link.href} className={styles.link}>
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Copyright */}
                <p className={styles.copy}>© 2026 Healthcare Club</p>
            </div>
        </footer>
    );
}
