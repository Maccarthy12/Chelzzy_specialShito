'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Flame,
  Sparkles,
  Check,
  Zap,
  Activity,
  Calendar,
  Layers,
  Shield,
  Clock,
  Award,
  Compass
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// -------------------------------------------------------------
// Magnetic Button Component (Preset B Midnight Luxe)
// -------------------------------------------------------------
function MagneticButton({
  children,
  className = '',
  accent = false,
  href,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
  href?: string;
  onClick?: () => void;
}) {
  const btnRef = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  const baseStyle = accent
    ? 'bg-[#C9A84C] text-[#0D0D12] font-semibold hover:shadow-[0_0_30px_rgba(201,168,76,0.45)]'
    : 'bg-[#181822] text-[#FAF8F5] border border-white/10 hover:border-[#C9A84C]/50';

  const innerContent = (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
      <span
        aria-hidden="true"
        className={`absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
          accent ? 'bg-[#DFC06C]' : 'bg-[#FAF8F5]/15'
        }`}
      />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        ref={btnRef as any}
        className={`group magnetic-btn overflow-hidden rounded-full px-7 py-3 text-sm tracking-wide ${baseStyle} ${className}`}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      ref={btnRef as any}
      onClick={onClick}
      className={`group magnetic-btn overflow-hidden rounded-full px-7 py-3 text-sm tracking-wide ${baseStyle} ${className}`}
    >
      {innerContent}
    </button>
  );
}

// -------------------------------------------------------------
// Interactive Feature 1: Diagnostic Shuffler (Value Prop 1: Real Smoked Fish & Shrimps)
// -------------------------------------------------------------
function DiagnosticShuffler() {
  const initialCards = [
    {
      id: 1,
      badge: 'Real Smoked Fish',
      title: 'Smoked Volta Crayfish & Prawns',
      metric: '100% Natural Seafood',
      desc: 'Sundried river prawns and fish ground fresh for rich crunch and sweet seafood flavor.',
    },
    {
      id: 2,
      badge: 'Balanced Heat',
      title: 'Fresh Scotch Bonnet Peppers',
      metric: 'Mild & Sweet Heat',
      desc: 'Cooked gently over low fire so the pepper tastes sweet and spicy, never burnt.',
    },
    {
      id: 3,
      badge: 'Local Aromatics',
      title: 'Fresh Ginger, Garlic & Onions',
      metric: 'Zero Chemicals',
      desc: 'Natural Ghanaian seasonings blended together to give that mouthwatering aroma.',
    },
  ];

  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    const timer = setInterval(() => {
      setCards((prev) => {
        const next = [...prev];
        const last = next.pop();
        if (last) next.unshift(last);
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-64 w-full flex items-center justify-center overflow-hidden py-4">
      {cards.map((card, index) => {
        const isTop = index === 0;
        return (
          <div
            key={card.id}
            className="absolute w-full max-w-[340px] rounded-[2rem] p-5 border backdrop-blur-md transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] shadow-2xl"
            style={{
              transform: `translateY(${index * 22}px) scale(${1 - index * 0.08})`,
              zIndex: 3 - index,
              opacity: index > 2 ? 0 : 1 - index * 0.25,
              backgroundColor: isTop ? '#1A1A24' : '#12121A',
              borderColor: isTop ? 'rgba(201,168,76,0.5)' : 'rgba(250,248,245,0.08)',
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] data-mono tracking-widest text-[#C9A84C] uppercase bg-[#C9A84C]/15 px-2.5 py-0.5 rounded-full border border-[#C9A84C]/30">
                {card.badge}
              </span>
              <span className="text-xs data-mono text-[#FAF8F5]/70">{card.metric}</span>
            </div>
            <h4 className="text-base font-semibold text-[#FAF8F5] tracking-tight">{card.title}</h4>
            <p className="text-xs text-[#FAF8F5]/60 mt-1 leading-relaxed">{card.desc}</p>
          </div>
        );
      })}
    </div>
  );
}

// -------------------------------------------------------------
// Interactive Feature 2: Telemetry Typewriter (Value Prop 2: Slow Traditional Cooking)
// -------------------------------------------------------------
function TelemetryTypewriter() {
  const messages = [
    '> FRESH BATCH: Cooked fresh right here in Accra.',
    '> SLOW FRYING: Fried gently over low fire to reach rich black color.',
    '> REAL SEAFOOD: Loaded with smoked Volta prawns and sweet crayfish.',
    '> 100% HEALTHY: Pure vegetable oil, zero artificial colors or preservatives.',
    '> DELICIOUS TASTE: Perfect with waakye, fried rice, kenkey, and yam.',
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let charIndex = 0;
    const targetMessage = messages[currentIdx];
    setDisplayText('');

    const typeInterval = setInterval(() => {
      if (charIndex <= targetMessage.length) {
        setDisplayText(targetMessage.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIdx((prev) => (prev + 1) % messages.length);
        }, 2200);
      }
    }, 38);

    return () => clearInterval(typeInterval);
  }, [currentIdx]);

  return (
    <div className="w-full rounded-[2rem] bg-[#12121A] border border-[#2A2A35] p-5 data-mono flex flex-col justify-between h-64">
      <div className="flex items-center justify-between border-b border-white/5 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
          <span className="text-xs uppercase tracking-wider text-[#FAF8F5]/90">Kitchen Live Updates</span>
        </div>
        <span className="text-[11px] text-[#C9A84C]">CHELZZY.v26</span>
      </div>

      <div className="my-auto py-2">
        <p className="text-sm text-[#FAF8F5]/90 min-h-[3rem] leading-relaxed">
          {displayText}
          <span className="inline-block w-2 h-4 ml-1 bg-[#C9A84C] animate-pulse align-middle" />
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5 text-[10px] text-[#FAF8F5]/50">
        <div>
          <span className="block text-[#FAF8F5]/70">SMOKED FISH</span>
          <span className="text-[#FAF8F5] font-semibold">100% VOLTA</span>
        </div>
        <div>
          <span className="block text-[#FAF8F5]/70">COOKING</span>
          <span className="text-[#FAF8F5] font-semibold">SLOW-FRIED</span>
        </div>
        <div>
          <span className="block text-[#FAF8F5]/70">CHEMICALS</span>
          <span className="text-[#FAF8F5] font-semibold">0% ZERO</span>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Interactive Feature 3: Cursor Protocol Scheduler (Value Prop 3: Fast Nationwide Delivery)
// -------------------------------------------------------------
function CursorProtocolScheduler() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [activeDay, setActiveDay] = useState(3);
  const [isPressing, setIsPressing] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      setIsPressing(true);
      setTimeout(() => {
        setIsPressing(false);
        setActiveDay((prev) => (prev + 1) % 7);
        setSavedSuccess(true);
        setTimeout(() => setSavedSuccess(false), 1200);
      }, 500);
    }, 3600);

    return () => clearInterval(cycle);
  }, []);

  return (
    <div className="relative w-full rounded-[2rem] bg-[#12121A] border border-[#2A2A35] p-5 flex flex-col justify-between h-64 overflow-hidden">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-wider text-[#FAF8F5]/70 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#C9A84C]" /> Weekly Delivery Schedule
          </span>
          <span className="text-[11px] data-mono text-[#FAF8F5]/50">ACCRA & BEYOND</span>
        </div>
        <p className="text-xs text-[#FAF8F5]/60 leading-snug">
          Pick your preferred day to receive fresh, safely packed shito jars right at your doorstep.
        </p>
      </div>

      {/* Week Grid */}
      <div className="grid grid-cols-7 gap-1.5 my-auto">
        {days.map((day, idx) => {
          const isActive = idx === activeDay;
          return (
            <div
              key={idx}
              className={`h-12 rounded-xl flex flex-col items-center justify-center transition-all duration-300 border ${
                isActive
                  ? 'bg-[#C9A84C] text-[#0D0D12] font-bold border-[#C9A84C] shadow-[0_0_15px_rgba(201,168,76,0.45)] scale-105'
                  : 'bg-[#1D1D28] text-[#FAF8F5]/50 border-white/5'
              }`}
            >
              <span className="text-[10px] opacity-75">{day}</span>
              <span className="text-xs data-mono">{20 + idx}</span>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
        <span className="text-[#FAF8F5]/50 text-[11px] data-mono">
          {savedSuccess ? 'DISPATCH: RESERVED & SEALED' : 'DISPATCH: SELECTING NEXT BATCH'}
        </span>
        <button
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
            savedSuccess
              ? 'bg-[#C9A84C] text-[#0D0D12]'
              : 'bg-white/10 text-zinc-300'
          }`}
        >
          {savedSuccess ? 'Locked' : 'Auto-Reserve'}
        </button>
      </div>

      {/* Animated SVG Cursor */}
      <div
        className="absolute pointer-events-none transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
        style={{
          left: `${18 + activeDay * 11.5}%`,
          top: '52%',
          transform: `translate(-50%, -50%) ${isPressing ? 'scale(0.85)' : 'scale(1)'}`,
        }}
      >
        <svg
          className="w-5 h-5 text-[#C9A84C] drop-shadow-[0_2px_8px_rgba(201,168,76,0.6)]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M3 3l7 18 3-7 7-3L3 3z" />
        </svg>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Protocol Sticky Stacking Archive Cards (3 Canvas/SVG Animations)
// -------------------------------------------------------------
function ProtocolSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.protocol-card');

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            endTrigger: cards[i + 1],
            end: 'top top',
            pin: true,
            pinSpacing: false,
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              gsap.to(card, {
                scale: 1 - progress * 0.1,
                filter: `blur(${progress * 20}px)`,
                opacity: 1 - progress * 0.5,
                duration: 0.1,
                overwrite: 'auto',
              });
            },
          });
        } else {
          ScrollTrigger.create({
            trigger: card,
            start: 'top top',
            end: '+=100%',
            pin: true,
            pinSpacing: true,
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} id="protocol" className="relative w-full">
      {/* Protocol Card 1 */}
      <div className="protocol-card min-h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-[#0D0D12] border-t border-white/5">
        <div className="max-w-5xl w-full rounded-[3rem] bg-[#161622] border border-[#C9A84C]/30 p-8 sm:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-lg">
            <span className="data-mono text-xs text-[#C9A84C] tracking-widest uppercase bg-[#C9A84C]/15 border border-[#C9A84C]/30 px-3 py-1 rounded-full">
              STEP 01 // FRESH INGREDIENTS
            </span>
            <h3 className="text-3xl sm:text-4xl font-semibold text-[#FAF8F5] tracking-tight">
              Real Smoked Fish & Hot Peppers
            </h3>
            <p className="text-[#FAF8F5]/70 text-sm sm:text-base leading-relaxed">
              We carefully select clean, high quality Volta river prawns, smoked fish, and fresh Ghanaian peppers from the local market, ensuring every ingredient is 100% fresh and clean.
            </p>
          </div>

          {/* Canvas/SVG 1: Slowly rotating geometric concentric rings / atelier compass motif */}
          <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden bg-[#101018]">
            <div className="absolute inset-4 rounded-full border border-dashed border-[#C9A84C]/40 animate-[spin_25s_linear_infinite]" />
            <div className="absolute inset-10 rounded-full border border-[#2A2A35] animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-16 rounded-full border border-white/20 animate-[spin_35s_linear_infinite]" />
            <div className="w-16 h-16 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C] flex items-center justify-center">
              <Compass className="w-8 h-8 text-[#C9A84C]" />
            </div>
          </div>
        </div>
      </div>

      {/* Protocol Card 2 */}
      <div className="protocol-card min-h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-[#0D0D12] border-t border-white/5">
        <div className="max-w-5xl w-full rounded-[3rem] bg-[#161622] border border-[#C9A84C]/30 p-8 sm:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-lg">
            <span className="data-mono text-xs text-[#C9A84C] tracking-widest uppercase bg-[#C9A84C]/15 border border-[#C9A84C]/30 px-3 py-1 rounded-full">
              STEP 02 // SLOW FRYING
            </span>
            <h3 className="text-3xl sm:text-4xl font-semibold text-[#FAF8F5] tracking-tight">
              Slow Cooking Until Jet Black
            </h3>
            <p className="text-[#FAF8F5]/70 text-sm sm:text-base leading-relaxed">
              Cooked gently over low heat, the chopped onions, garlic, and fresh ginger fry until golden brown, blending with our ground seafood until the shito turns rich, shiny black naturally.
            </p>
          </div>

          {/* Canvas/SVG 2: Scanning horizontal laser-line moving across dot/sensor grid */}
          <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl border border-white/10 relative overflow-hidden bg-[#101018] p-4 flex flex-col justify-between">
            <div className="grid grid-cols-6 gap-2 w-full h-full opacity-40">
              {Array.from({ length: 36 }).map((_, idx) => (
                <div key={idx} className="rounded bg-[#C9A84C]/40" />
              ))}
            </div>
            {/* Laser Scanning Line */}
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent shadow-[0_0_15px_#C9A84C] animate-[bounce_4s_infinite]" />
          </div>
        </div>
      </div>

      {/* Protocol Card 3 */}
      <div className="protocol-card min-h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-[#0D0D12] border-t border-white/5">
        <div className="max-w-5xl w-full rounded-[3rem] bg-[#161622] border border-[#C9A84C]/30 p-8 sm:p-14 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-lg">
            <span className="data-mono text-xs text-[#C9A84C] tracking-widest uppercase bg-[#C9A84C]/15 border border-[#C9A84C]/30 px-3 py-1 rounded-full">
              STEP 03 // CLEAN SEALING
            </span>
            <h3 className="text-3xl sm:text-4xl font-semibold text-[#FAF8F5] tracking-tight">
              Tightly Sealed In Clean Glass Jars
            </h3>
            <p className="text-[#FAF8F5]/70 text-sm sm:text-base leading-relaxed">
              Every jar is filled hot and airtight in clean glass containers. Zero artificial coloring, zero preservatives — pure, delicious Ghanaian shito that stays fresh for months.
            </p>
          </div>

          {/* Canvas/SVG 3: Pulsing Waveform (EKG Path Animation) */}
          <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl border border-white/10 relative flex items-center justify-center bg-[#101018] p-4">
            <svg className="w-full h-32" viewBox="0 0 300 100" fill="none">
              <path
                d="M 10 50 L 70 50 L 90 20 L 110 80 L 130 35 L 145 65 L 160 50 L 290 50"
                stroke="#C9A84C"
                strokeWidth="3"
                strokeLinecap="round"
                className="[stroke-dasharray:400] [stroke-dashoffset:400] animate-[dash_3s_ease-in-out_infinite]"
              />
            </svg>
            <style jsx>{`
              @keyframes dash {
                0% {
                  stroke-dashoffset: 400;
                }
                50% {
                  stroke-dashoffset: 0;
                }
                100% {
                  stroke-dashoffset: -400;
                }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// MAIN CHELZZY'S SHITO LANDING PAGE (Preset B: Midnight Luxe)
// -------------------------------------------------------------
export default function ChelzzyShitoLandingPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // GSAP Animation Lifecycle
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Floating Island Navbar Morphing
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'bottom top+=100',
        onEnter: () => {
          gsap.to(navRef.current, {
            backgroundColor: 'rgba(13, 13, 18, 0.88)',
            borderColor: 'rgba(201, 168, 76, 0.4)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            duration: 0.4,
            ease: 'power2.inOut',
          });
        },
        onLeaveBack: () => {
          gsap.to(navRef.current, {
            backgroundColor: 'rgba(250, 248, 245, 0.08)',
            borderColor: 'rgba(250, 248, 245, 0.15)',
            boxShadow: 'none',
            duration: 0.4,
            ease: 'power2.inOut',
          });
        },
      });

      // 2. Hero Section Entrance Animation (Fade-up Stagger)
      gsap.from('.hero-anim-item', {
        y: 40,
        opacity: 0,
        duration: 1.1,
        stagger: 0.08,
        ease: 'power3.out',
      });

      // 3. Manifesto Reveal Animation
      gsap.from('.manifesto-reveal', {
        scrollTrigger: {
          trigger: '#manifesto',
          start: 'top 75%',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="relative w-full bg-[#0D0D12] text-[#FAF8F5] overflow-hidden">
      {/* --------------------------------------------------------- */}
      {/* A. NAVBAR — "The Floating Island" */}
      {/* --------------------------------------------------------- */}
      <nav
        ref={navRef}
        aria-label="Primary Navigation"
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl rounded-full px-5 py-3 border border-[#FAF8F5]/15 bg-[#FAF8F5]/10 backdrop-blur-xl transition-all duration-300 flex items-center justify-between"
      >
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#C9A84C] shadow-[0_0_15px_rgba(201,168,76,0.35)] group-hover:scale-105 transition-transform duration-300 bg-[#0D0D12] flex-shrink-0">
            <img
              src="/images/chelzzy_logo.png"
              alt="Chelzzy's Shito Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-semibold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
            CHELZZY&apos;S <span className="text-[10px] text-[#C9A84C] data-mono tracking-widest font-bold">SHITO</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-xs font-medium text-[#FAF8F5]/80">
          <Link href="#artifacts" className="interactive-lift hover:text-[#C9A84C]">
            Why Chelzzy&apos;s
          </Link>
          <Link href="#manifesto" className="interactive-lift hover:text-[#C9A84C]">
            Our Story
          </Link>
          <Link href="#protocol" className="interactive-lift hover:text-[#C9A84C]">
            How We Cook
          </Link>
          <Link href="#reserves" className="interactive-lift hover:text-[#C9A84C]">
            Prices & Packages
          </Link>
        </div>

        <MagneticButton accent href="#reserves" className="!px-5 !py-2 !text-xs">
          Order Now
        </MagneticButton>
      </nav>

      {/* --------------------------------------------------------- */}
      {/* B. HERO SECTION — "The Opening Shot" */}
      {/* --------------------------------------------------------- */}
      <section
        ref={heroRef}
        className="relative h-[100dvh] w-full flex flex-col justify-end pb-16 sm:pb-24 px-6 sm:px-16 overflow-hidden"
      >
        {/* Full-bleed Authentic Shito Spices Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/shito_spices_hero.jpg')`,
          }}
        />

        {/* Cinematic Obsidian-to-Dark Gradient Overlay ensuring clear text contrast while showcasing the rich spices */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D12] via-[#0D0D12]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D12]/90 via-[#0D0D12]/35 to-transparent" />

        {/* Content pushed to Bottom-Left Third */}
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="hero-anim-item inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-xs text-[#C9A84C] data-mono uppercase tracking-widest backdrop-blur-md">
            <img
              src="/images/chelzzy_logo.png"
              alt="Chelzzy's Shito Official Seal"
              className="w-5 h-5 rounded-full object-cover border border-[#C9A84C]/60"
            />
            <span>Finest Ghanaian Taste // Special Black Pepper Shito</span>
          </div>

          <div className="hero-anim-item space-y-1">
            {/* Preset B Hero Line Pattern: [Aspirational noun] meets / [Precision word]. */}
            <p className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F5]">
              Real Ghanaian Shito meets
            </p>
            <h1 className="drama-text text-6xl sm:text-8xl md:text-9xl text-[#C9A84C] font-normal leading-[0.9] tracking-tight">
              Rich Flavor.
            </h1>
          </div>

          <p className="hero-anim-item text-[#FAF8F5]/80 text-sm sm:text-lg max-w-xl leading-relaxed font-light">
            Chelzzy&apos;s special black pepper shito brings you the true authentic Ghanaian taste you love.
            Slow-cooked with tasty smoked fish, dried river prawns, fresh onions, ginger, and hot peppers for rich, unforgettable flavor.
          </p>

          <div className="hero-anim-item pt-2 flex flex-wrap items-center gap-4">
            <MagneticButton accent href="#reserves" className="!px-8 !py-3.5 !text-sm">
              Order Yours Now
              <ArrowRight className="w-4 h-4 ml-1" />
            </MagneticButton>

            <MagneticButton href="#manifesto" className="!px-7 !py-3.5 !text-sm">
              Read Our Story
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* C. FEATURES — "Interactive Functional Artifacts" */}
      {/* --------------------------------------------------------- */}
      <section id="artifacts" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto w-full space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#C9A84C] data-mono font-medium">
            Made With Love In Ghana
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#FAF8F5]">
            What Makes Chelzzy&apos;s Special
          </h2>
          <p className="text-[#FAF8F5]/70 text-sm sm:text-base">
            Three simple reasons why every spoon of our shito tastes just like authentic home cooking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Diagnostic Shuffler */}
          <div className="rounded-[2.5rem] bg-[#161622] border border-[#2A2A35] p-6 flex flex-col justify-between shadow-2xl hover:border-[#C9A84C]/40 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#C9A84C]">
                <Activity className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Quality 01</span>
              </div>
              <h3 className="text-xl font-bold text-[#FAF8F5] tracking-tight">
                Real Smoked Fish & Shrimps
              </h3>
              <p className="text-xs text-[#FAF8F5]/60 mt-1 mb-4">
                Generous amounts of Volta river prawns and dried smoked fish for deep crunch and rich seafood aroma.
              </p>
            </div>
            <DiagnosticShuffler />
          </div>

          {/* Card 2: Telemetry Typewriter */}
          <div className="rounded-[2.5rem] bg-[#161622] border border-[#2A2A35] p-6 flex flex-col justify-between shadow-2xl hover:border-[#C9A84C]/40 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#C9A84C]">
                <Zap className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Quality 02</span>
              </div>
              <h3 className="text-xl font-bold text-[#FAF8F5] tracking-tight">
                Slow Traditional Cooking
              </h3>
              <p className="text-xs text-[#FAF8F5]/60 mt-1 mb-4">
                Cooked slowly over gentle heat with pure vegetable oil until it turns naturally shiny black.
              </p>
            </div>
            <TelemetryTypewriter />
          </div>

          {/* Card 3: Cursor Protocol Scheduler */}
          <div className="rounded-[2.5rem] bg-[#161622] border border-[#2A2A35] p-6 flex flex-col justify-between shadow-2xl hover:border-[#C9A84C]/40 transition-colors">
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#C9A84C]">
                <Calendar className="w-4 h-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">Quality 03</span>
              </div>
              <h3 className="text-xl font-bold text-[#FAF8F5] tracking-tight">
                Fast Doorstep Delivery
              </h3>
              <p className="text-xs text-[#FAF8F5]/60 mt-1 mb-4">
                Freshly packed in clean glass jars and delivered straight to your door in Accra and nationwide.
              </p>
            </div>
            <CursorProtocolScheduler />
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* D. PHILOSOPHY — "The Manifesto" */}
      {/* --------------------------------------------------------- */}
      <section
        id="manifesto"
        className="relative py-36 px-6 sm:px-16 bg-[#08080C] overflow-hidden border-y border-white/5"
      >
        {/* Parallaxing Organic Texture (Low Opacity) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
          style={{
            backgroundImage: `url('/images/shito_spices_hero.jpg')`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto space-y-12">
          <div className="manifesto-reveal space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#C9A84C] data-mono font-medium">
              Our Promise To You
            </span>
            <p className="text-base sm:text-xl text-[#FAF8F5]/70 tracking-wide font-light">
              Most store-bought shito you buy outside has:
            </p>
            <p className="text-lg sm:text-2xl text-[#FAF8F5] font-medium tracking-tight">
              Too much oil, too many pepper seeds, and very little fish or shrimps.
            </p>
          </div>

          <div className="manifesto-reveal pt-6 border-t border-white/10 space-y-4">
            <p className="text-base sm:text-xl text-[#FAF8F5]/70 tracking-wide font-light">
              Chelzzy&apos;s Shito gives you:
            </p>
            <h2 className="drama-text text-4xl sm:text-6xl md:text-7xl text-[#FAF8F5] font-normal leading-tight">
              Generous smoked fish, tasty river shrimps, and sweet caramelized onions cooked to{' '}
              <span className="text-[#C9A84C]">pure delicious perfection.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#FAF8F5]/70 max-w-2xl leading-relaxed pt-2">
              Every single jar of Chelzzy&apos;s is prepared with patience and clean kitchen hygiene — giving you that delicious homemade taste that makes waakye, fried rice, plain rice, and kenkey taste so good.
            </p>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* E. PROTOCOL — "Sticky Stacking Archive" */}
      {/* --------------------------------------------------------- */}
      <ProtocolSection />

      {/* --------------------------------------------------------- */}
      {/* F. MEMBERSHIP / PRICING (The Tasting Reserves) */}
      {/* --------------------------------------------------------- */}
      <section id="reserves" className="py-28 px-6 sm:px-12 max-w-7xl mx-auto w-full space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#C9A84C] data-mono font-medium">
            Fresh Jar Sizes & Prices
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#FAF8F5]">
            Choose Your Favorite Shito Jar
          </h2>
          <p className="text-[#FAF8F5]/70 text-sm sm:text-base">
            Freshly prepared homemade Ghanaian black pepper shito made with real smoked fish and shrimps. Safe glass jars, zero artificial colors, and fast delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: Essential */}
          <div className="rounded-[2.5rem] bg-[#161622] border border-white/10 p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <span className="text-xs data-mono text-[#FAF8F5]/60 uppercase tracking-widest">
                Option 01 // Single Jar
              </span>
              <h3 className="text-2xl font-bold text-[#FAF8F5]">Standard Jar (250g)</h3>
              <div className="flex items-baseline gap-1 text-3xl font-extrabold text-[#FAF8F5]">
                GH₵ 28 <span className="text-xs font-normal text-[#FAF8F5]/60">/ 250g jar</span>
              </div>
              <p className="text-xs text-[#FAF8F5]/70 leading-relaxed">
                One 250g glass jar of thick black shito. Made with real smoked river shrimps, fresh onions, ginger, and hot peppers with mild, sweet heat.
              </p>

              <ul className="space-y-2.5 pt-4 text-xs text-[#FAF8F5]/80">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A84C]" /> Packed with real smoked fish & shrimps
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A84C]" /> Tightly sealed glass jar (keeps fresh for months)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A84C]" /> Fast delivery anywhere in Ghana
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <MagneticButton href="#reserves" className="w-full">
                Order Single Jar (GH₵ 28)
              </MagneticButton>
            </div>
          </div>

          {/* Card 2: Performance (Middle Card Pops) */}
          <div className="rounded-[2.5rem] bg-[#1A1A26] border-2 border-[#C9A84C] p-8 flex flex-col justify-between shadow-[0_0_50px_rgba(201,168,76,0.22)] relative scale-105 z-10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C9A84C] text-[#0D0D12] text-[11px] font-bold uppercase tracking-widest shadow-md">
              Most Popular Choice
            </div>

            <div className="space-y-4">
              <span className="text-xs data-mono text-[#C9A84C] uppercase tracking-widest">
                Option 02 // Double Pack
              </span>
              <h3 className="text-2xl font-bold text-[#FAF8F5]">Family Pack (2 Big Jars)</h3>
              <div className="flex items-baseline gap-1 text-4xl font-extrabold text-[#C9A84C]">
                GH₵ 54 <span className="text-xs font-normal text-[#FAF8F5]/70">/ 2x 350g jars</span>
              </div>
              <p className="text-xs text-[#FAF8F5]/90 leading-relaxed">
                Two big 350g jars of thick black shito. Loaded with extra smoked prawns and seasoned slow to perfection. Great value for the home and family.
              </p>

              <ul className="space-y-2.5 pt-4 text-xs text-[#FAF8F5]">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A84C]" /> Slow-cooked for rich, deep black flavor
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A84C]" /> Extra smoked fish and crispy shrimp bits
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A84C]" /> Comes in a neat packaging box
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A84C]" /> Express delivery to your doorstep
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <MagneticButton accent href="#reserves" className="w-full">
                Order Family Pack (GH₵ 54)
              </MagneticButton>
            </div>
          </div>

          {/* Card 3: Enterprise */}
          <div className="rounded-[2.5rem] bg-[#161622] border border-white/10 p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <span className="text-xs data-mono text-[#FAF8F5]/60 uppercase tracking-widest">
                Option 03 // Jumbo Pack
              </span>
              <h3 className="text-2xl font-bold text-[#FAF8F5]">Party & Travel Crate (6 Jars)</h3>
              <div className="flex items-baseline gap-1 text-3xl font-extrabold text-[#FAF8F5]">
                GH₵ 135 <span className="text-xs font-normal text-[#FAF8F5]/60">/ 6-jar pack</span>
              </div>
              <p className="text-xs text-[#FAF8F5]/70 leading-relaxed">
                Six big 350g jars packed in a sturdy box. The best choice for boarding school, students traveling abroad (&quot;abroad package&quot;), events, or stocking up your pantry.
              </p>

              <ul className="space-y-2.5 pt-4 text-xs text-[#FAF8F5]/80">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A84C]" /> 6 full 350g jars of delicious shito
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A84C]" /> Free quality serving spoons included
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A84C]" /> Custom heat levels available (Mild, Medium, or Hot)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#C9A84C]" /> Long-lasting seal suitable for international travel
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <MagneticButton href="#reserves" className="w-full">
                Order Jumbo Pack (GH₵ 135)
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- */}
      {/* G. FOOTER */}
      {/* --------------------------------------------------------- */}
      <footer className="bg-[#08080D] rounded-t-[4rem] border-t border-white/5 pt-16 pb-12 px-6 sm:px-16 mt-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="space-y-2 max-w-sm">
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#C9A84C] shadow-[0_0_20px_rgba(201,168,76,0.35)] bg-[#0D0D12] flex-shrink-0">
                  <img
                    src="/images/chelzzy_logo.png"
                    alt="Chelzzy's Shito Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xl font-bold tracking-tight text-[#FAF8F5] block">Chelzzy&apos;s Shito</span>
                  <span className="text-[11px] text-[#C9A84C] data-mono tracking-wider uppercase font-semibold">Delicious &amp; Healthy!!</span>
                </div>
              </div>
              <p className="text-xs text-[#FAF8F5]/60 leading-relaxed">
                Chelzzy&apos;s special black pepper shito made with the authentic Ghanaian taste you love. Prepared fresh with real smoked river fish, prawns, and natural local spices.
              </p>
            </div>

            {/* System Operational Indicator */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 data-mono text-xs text-[#FAF8F5]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C9A84C] animate-ping" />
              <span>KITCHEN ACTIVE</span>
              <span className="text-[#C9A84C]">• FRESH JARS DELIVERING DAILY</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-8 border-t border-white/5 text-xs">
            <div className="space-y-3">
              <span className="font-semibold text-[#FAF8F5] uppercase tracking-wider">Quick Links</span>
              <ul className="space-y-2 text-[#FAF8F5]/60">
                <li><Link href="#artifacts" className="hover:text-[#C9A84C]">Why Choose Us</Link></li>
                <li><Link href="#protocol" className="hover:text-[#C9A84C]">How We Cook</Link></li>
                <li><Link href="#reserves" className="hover:text-[#C9A84C]">Jar Sizes & Prices</Link></li>
                <li><Link href="#manifesto" className="hover:text-[#C9A84C]">Our Story</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <span className="font-semibold text-[#FAF8F5] uppercase tracking-wider">Perfect With</span>
              <ul className="space-y-2 text-[#FAF8F5]/60">
                <li className="text-[#FAF8F5]/60">Waakye & Spaghetti</li>
                <li className="text-[#FAF8F5]/60">Fried Rice & Jollof</li>
                <li className="text-[#FAF8F5]/60">Plain Rice & Beans</li>
                <li className="text-[#FAF8F5]/60">Ga Kenkey & Fish</li>
              </ul>
            </div>
            <div className="space-y-3">
              <span className="font-semibold text-[#FAF8F5] uppercase tracking-wider">Special Orders</span>
              <ul className="space-y-2 text-[#FAF8F5]/60">
                <li className="text-[#FAF8F5]/60">Boarding School Packs</li>
                <li className="text-[#FAF8F5]/60">Travel Abroad Packages</li>
                <li className="text-[#FAF8F5]/60">Event & Party Orders</li>
                <li className="text-[#FAF8F5]/60">Wholesale Supplies</li>
              </ul>
            </div>
            <div className="space-y-3">
              <span className="font-semibold text-[#FAF8F5] uppercase tracking-wider">Our Standards</span>
              <ul className="space-y-2 text-[#FAF8F5]/60">
                <li className="text-[#FAF8F5]/60">100% Real Smoked Seafood</li>
                <li className="text-[#FAF8F5]/60">Zero Artificial Food Colors</li>
                <li className="text-[#FAF8F5]/60">Clean Hygienic Glass Jars</li>
                <li className="text-[#FAF8F5]/60">Made Fresh in Accra, Ghana</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-[#FAF8F5]/40">
            <p>&copy; {new Date().getFullYear()} Chelzzy&apos;s Shito. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-[#FAF8F5]">Quality Guarantee</Link>
              <Link href="#" className="hover:text-[#FAF8F5]">Fast Delivery Policy</Link>
              <Link href="#" className="hover:text-[#FAF8F5]">Customer Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
