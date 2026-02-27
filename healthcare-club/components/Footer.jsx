import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <span className={styles.logoIcon}>❤️</span>
                            <span>Healthcare <strong>Club</strong></span>
                        </div>
                        <p className={styles.tagline}>
                            The revolutionary app designed to be your personal family health and wellness hub. Secure, simple, and trusted.
                        </p>
                    </div>

                    <div className={styles.col}>
                        <h4>Product</h4>
                        <ul>
                            <li><a href="#features">Features</a></li>
                            <li><a href="#how-it-works">How It Works</a></li>
                            <li><a href="#vitals">Vitals Tracking</a></li>
                            <li><a href="#cta">Download</a></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Newsroom</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4>Legal</h4>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookie Policy</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© 2026 Healthcare Club. Made with ♥ for Indian Families</p>
                    <div className={styles.social}>
                        {/* Social placeholder icons */}
                        <span className={styles.socialIcon}>𝕏</span>
                        <span className={styles.socialIcon}>📸</span>
                        <span className={styles.socialIcon}>📘</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
