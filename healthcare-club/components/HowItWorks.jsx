'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './HowItWorks.module.css';

const STEP_DURATION = 3500; // ms per step

const steps = [
    {
        num: '01',
        title: 'Sign Up Securely',
        desc: 'Register with your mobile number and OTP. End-to-end encrypted from the very first interaction.',
        icon: '🔐',
        color: '#0abf8c',
        screenContent: 'signup',
    },
    {
        num: '02',
        title: 'Add Family Members',
        desc: 'Invite family with granular permission controls. Every member gets their own independent health profile.',
        icon: '👨‍👩‍👧‍👦',
        color: '#06d6a0',
        screenContent: 'family',
    },
    {
        num: '03',
        title: 'Upload Records',
        desc: 'Add prescriptions, lab reports, and documents. Searchable, organized, and always accessible.',
        icon: '📋',
        color: '#00b4d8',
        screenContent: 'records',
    },
    {
        num: '04',
        title: 'Track & Monitor',
        desc: 'Log vitals with smart reminders. Visualize trends over time and make informed health decisions.',
        icon: '📈',
        color: '#7b2ff7',
        screenContent: 'vitals',
    },
];

/* ─── individual animated screens ─── */
function SignupScreen() {
    return (
        <div className={styles.screen}>
            <div className={styles.screenHeader}>
                <div className={styles.appLogo}>
                    <span>❤️</span>
                    <span className={styles.logoText}>HealthClub</span>
                </div>
            </div>
            <div className={styles.formCard}>
                <p className={styles.formTitle}>Welcome Back</p>
                <p className={styles.formSub}>Sign in securely with OTP</p>
                <div className={styles.inputRow} style={{ animationDelay: '0.15s' }}>
                    <span>📱</span>
                    <span className={styles.inputText}>+91 98XX XXXX XX</span>
                </div>
                <div className={styles.otpRow}>
                    {[3, 7, 2, 9].map((d, i) => (
                        <div key={i} className={styles.otpBox} style={{ animationDelay: `${0.4 + i * 0.12}s` }}>
                            {d}
                        </div>
                    ))}
                </div>
                <div className={styles.lockBadge} style={{ animationDelay: '1s' }}>
                    🔒 End-to-end encrypted
                </div>
                <div className={styles.ctaBtn} style={{ animationDelay: '1.2s' }}>
                    Get Started →
                </div>
            </div>
        </div>
    );
}

function FamilyScreen() {
    const members = [
        { name: 'Rahul (You)', role: 'Admin', avatar: '👨', color: '#0abf8c' },
        { name: 'Priya', role: 'Spouse', avatar: '👩', color: '#06d6a0' },
        { name: 'Arya', role: 'Daughter', avatar: '👧', color: '#00b4d8' },
    ];
    return (
        <div className={styles.screen}>
            <div className={styles.screenHeader}>
                <div className={styles.appLogo}>
                    <span>❤️</span>
                    <span className={styles.logoText}>HealthClub</span>
                </div>
            </div>
            <p className={styles.sectionLabel}>Family Members</p>
            <div className={styles.familyList}>
                {members.map((m, i) => (
                    <div
                        key={m.name}
                        className={styles.memberCard}
                        style={{ animationDelay: `${0.15 + i * 0.2}s`, borderLeft: `3px solid ${m.color}` }}
                    >
                        <div className={styles.memberAvatar} style={{ background: m.color + '22' }}>{m.avatar}</div>
                        <div className={styles.memberInfo}>
                            <span className={styles.memberName}>{m.name}</span>
                            <span className={styles.memberRole}>{m.role}</span>
                        </div>
                        <div className={styles.memberBadge} style={{ background: m.color + '22', color: m.color }}>✓</div>
                    </div>
                ))}
            </div>
            <div className={styles.addBtn} style={{ animationDelay: '0.8s' }}>
                + Add Member
            </div>
        </div>
    );
}

function RecordsScreen() {
    const records = [
        { type: 'Prescription', date: 'Feb 24', icon: '💊', color: '#0abf8c' },
        { type: 'Lab Report', date: 'Feb 20', icon: '🧪', color: '#00b4d8' },
        { type: 'X-Ray Scan', date: 'Jan 15', icon: '🩻', color: '#7b2ff7' },
    ];
    return (
        <div className={styles.screen}>
            <div className={styles.screenHeader}>
                <div className={styles.appLogo}>
                    <span>❤️</span>
                    <span className={styles.logoText}>HealthClub</span>
                </div>
            </div>
            <div className={styles.searchBar} style={{ animationDelay: '0.1s' }}>
                <span>🔍</span> <span className={styles.searchText}>Search records…</span>
            </div>
            <p className={styles.sectionLabel}>Recent Documents</p>
            <div className={styles.recordsList}>
                {records.map((r, i) => (
                    <div
                        key={r.type}
                        className={styles.recordCard}
                        style={{ animationDelay: `${0.25 + i * 0.18}s` }}
                    >
                        <div className={styles.recordIcon} style={{ background: r.color + '22' }}>{r.icon}</div>
                        <div className={styles.recordInfo}>
                            <span className={styles.recordType}>{r.type}</span>
                            <span className={styles.recordDate}>{r.date}</span>
                        </div>
                        <div className={styles.recordDot} style={{ background: r.color }} />
                    </div>
                ))}
            </div>
            <div className={styles.uploadFab} style={{ animationDelay: '0.9s' }}>
                ＋ Upload
            </div>
        </div>
    );
}

function VitalsScreen() {
    return (
        <div className={styles.screen}>
            <div className={styles.screenHeader}>
                <div className={styles.appLogo}>
                    <span>❤️</span>
                    <span className={styles.logoText}>HealthClub</span>
                </div>
            </div>
            <p className={styles.sectionLabel}>Today's Vitals</p>
            <div className={styles.chartArea}>
                <svg viewBox="0 0 200 60" className={styles.heartLine}>
                    <polyline
                        points="0,40 20,40 30,10 40,50 50,40 70,40 80,15 90,45 100,40 120,40 130,12 140,48 150,40 200,40"
                        fill="none" stroke="#ef4444" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round"
                    />
                </svg>
            </div>
            {[
                { label: 'Heart Rate', value: '72 bpm', icon: '❤️', trend: '+2%', color: '#ef4444' },
                { label: 'Blood Pressure', value: '118/76', icon: '💉', trend: 'Normal', color: '#0abf8c' },
                { label: 'SpO₂', value: '98%', icon: '🫁', trend: 'Optimal', color: '#00b4d8' },
            ].map((v, i) => (
                <div key={v.label} className={styles.vitalCard} style={{ animationDelay: `${0.35 + i * 0.18}s` }}>
                    <span className={styles.vitalIcon}>{v.icon}</span>
                    <div className={styles.vitalInfo}>
                        <span className={styles.vitalLabel}>{v.label}</span>
                        <span className={styles.vitalValue}>{v.value}</span>
                    </div>
                    <span className={styles.vitalTrend} style={{ color: v.color }}>{v.trend}</span>
                </div>
            ))}
        </div>
    );
}

const ScreenComponents = [SignupScreen, FamilyScreen, RecordsScreen, VitalsScreen];

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState(0);
    // A unique key that increments every time the phone screen changes, to force re-mount of animations
    const [screenKey, setScreenKey] = useState(0);
    const timerRef = useRef(null);

    const goToStep = useCallback((idx) => {
        setActiveStep(idx);
        setScreenKey((k) => k + 1);
    }, []);

    // Auto-advance in an infinite loop
    useEffect(() => {
        timerRef.current = setInterval(() => {
            setActiveStep((prev) => {
                const next = (prev + 1) % steps.length;
                setScreenKey((k) => k + 1);
                return next;
            });
        }, STEP_DURATION);
        return () => clearInterval(timerRef.current);
    }, []);

    // When user clicks a step, reset the timer so it doesn't jump immediately after click
    const handleStepClick = (idx) => {
        clearInterval(timerRef.current);
        goToStep(idx);
        timerRef.current = setInterval(() => {
            setActiveStep((prev) => {
                const next = (prev + 1) % steps.length;
                setScreenKey((k) => k + 1);
                return next;
            });
        }, STEP_DURATION);
    };

    const ActiveScreen = ScreenComponents[activeStep];

    return (
        <section className={styles.section} id="how-it-works">
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <p className="section-label">( How It Works )</p>
                    <h2 className={styles.title}>
                        Simple Steps to <span className={styles.accent}>Better Health</span>
                    </h2>
                </div>

                {/* Body: Timeline + Phone */}
                <div className={styles.body}>
                    {/* ── Left: Vertical Timeline ── */}
                    <div className={styles.timeline}>
                        <div className={styles.timelineLine} />
                        {steps.map((s, i) => (
                            <div
                                key={s.num}
                                className={`${styles.timelineStep} ${activeStep === i ? styles.timelineStepActive : ''}`}
                                onClick={() => handleStepClick(i)}
                                style={{ animationDelay: `${i * 0.12}s` }}
                            >
                                {/* Node circle */}
                                <div className={styles.node}>
                                    <div
                                        className={styles.nodeDot}
                                        style={activeStep === i
                                            ? { background: s.color, boxShadow: `0 0 0 6px ${s.color}33`, border: `2px solid ${s.color}` }
                                            : {}}
                                    >
                                        <span>{s.icon}</span>
                                    </div>
                                </div>

                                {/* Text content */}
                                <div className={styles.stepContent}>
                                    <div className={styles.stepNum} style={activeStep === i ? { color: s.color } : {}}>
                                        {s.num}
                                    </div>
                                    <h3 className={styles.stepTitle}>{s.title}</h3>
                                    <p className={styles.stepDesc}>{s.desc}</p>

                                    {/* Progress bar — only on active step, key forces re-animation on each change */}
                                    {activeStep === i && (
                                        <div className={styles.progressBar}>
                                            <div
                                                key={screenKey}
                                                className={styles.progressFill}
                                                style={{ background: s.color }}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* ── Right: Phone Mockup ── */}
                    <div className={styles.phoneWrapper}>
                        {/* Ambient glow */}
                        <div className={styles.phoneGlow} style={{ background: steps[activeStep].color + '55' }} />

                        <div className={styles.phone}>
                            <div className={styles.phoneSpeaker} />
                            <div className={styles.phoneCam} />

                            {/* Status bar */}
                            <div className={styles.statusBar}>
                                <span className={styles.statusTime}>9:41</span>
                                <div className={styles.statusIcons}>
                                    <span style={{ letterSpacing: '1px', fontSize: '9px' }}>▐▐▐ WiFi 🔋</span>
                                </div>
                            </div>

                            {/* Screen — key forces full re-mount each step change */}
                            <div className={styles.phoneScreen}>
                                <ActiveScreen key={screenKey} />
                            </div>

                            <div className={styles.homeBar} />
                        </div>

                        {/* Step dots */}
                        <div className={styles.phoneDots}>
                            {steps.map((s, i) => (
                                <div
                                    key={i}
                                    className={`${styles.phoneDot} ${activeStep === i ? styles.phoneDotActive : ''}`}
                                    style={activeStep === i ? { background: s.color, transform: 'scale(1.4)' } : {}}
                                    onClick={() => handleStepClick(i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
