import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import leadershipImage from "@/assets/hero/leadership-workshop.webp";
import leadershipMobile from "@/assets/hero/leadership-workshop-mobile.webp";
import mentorshipImage from "@/assets/hero/mentorship-session.webp";
import mentorshipMobile from "@/assets/hero/mentorship-session-mobile.webp";
import strategyImage from "@/assets/hero/strategy-session.webp";
import strategyMobile from "@/assets/hero/strategy-session-mobile.webp";
import "./HeroSection.css";

const slides = [
  {
    image: leadershipImage,
    mobile: leadershipMobile,
    label: "Leadership development",
    alt: "AI-generated scene of a Kenyan facilitator leading a professional leadership workshop.",
  },
  {
    image: mentorshipImage,
    mobile: mentorshipMobile,
    label: "Mentorship & coaching",
    alt: "AI-generated scene of a Kenyan mentor in conversation with two emerging professionals.",
  },
  {
    image: strategyImage,
    mobile: strategyMobile,
    label: "Strategy & transformation",
    alt: "AI-generated scene of African professionals collaborating on organizational strategy.",
  },
];

const ROTATION_INTERVAL = 6500;

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const [loadedSlides, setLoadedSlides] = useState<number[]>([]);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    const updateVisibility = () => setPageVisible(!document.hidden);

    updatePreference();
    updateVisibility();
    preference.addEventListener("change", updatePreference);
    document.addEventListener("visibilitychange", updateVisibility);

    return () => {
      preference.removeEventListener("change", updatePreference);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  const canRotate = isPlaying && !reducedMotion && pageVisible;

  useEffect(() => {
    if (!canRotate) return;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => {
        const next = (current + 1) % slides.length;
        return loadedSlides.includes(next) ? next : current;
      });
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(timer);
  }, [activeSlide, canRotate, loadedSlides]);

  const showSlide = (index: number) => {
    setActiveSlide((index + slides.length) % slides.length);
  };

  return (
    <section
      id="home"
      className="hero-carousel"
      aria-label="Limitless leadership, mentorship and strategy"
      aria-roledescription="carousel"
      data-paused={!canRotate}
      onFocusCapture={(event) => {
        const target = event.target as HTMLElement;
        // Pause for keyboard navigation while allowing clicks and swipes to keep autoplay running.
        if (target.matches(":focus-visible") && !target.closest("[data-playback-control]")) {
          setIsPlaying(false);
        }
      }}
      onTouchStart={(event) => {
        const interactive = (event.target as HTMLElement).closest("a, button");
        if (event.touches.length !== 1 || interactive) {
          touchStart.current = null;
          return;
        }
        touchStart.current = {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY,
        };
      }}
      onTouchCancel={() => { touchStart.current = null; }}
      onTouchEnd={(event) => {
        const start = touchStart.current;
        touchStart.current = null;
        if (!start || !event.changedTouches[0]) return;
        const dx = event.changedTouches[0].clientX - start.x;
        const dy = event.changedTouches[0].clientY - start.y;
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
          showSlide(activeSlide + (dx < 0 ? 1 : -1));
        }
      }}
    >
      <div className="hero-carousel__slides">
        {slides.map((slide, index) => (
          <div
            key={slide.label}
            id={`hero-slide-${index}`}
            className={`hero-carousel__slide${index === activeSlide ? " is-active" : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${slide.label}`}
            aria-hidden={index !== activeSlide}
          >
            <picture>
              <source media="(max-width: 640px)" srcSet={slide.mobile} />
              <img
                src={slide.image}
                alt={slide.alt}
                className="hero-carousel__image"
                loading="eager"
                fetchPriority={index === 0 ? "high" : "low"}
                decoding="async"
                onLoad={() => setLoadedSlides((current) => (
                  current.includes(index) ? current : [...current, index]
                ))}
              />
            </picture>
          </div>
        ))}
      </div>

      <div className="hero-carousel__overlay" aria-hidden="true" />

      <div className="hero-carousel__content">
        <h1 className="hero-carousel__heading">
          Connect. Empower. Transform.
        </h1>
        <p className="hero-carousel__description">
          Unlocking purpose, igniting potential, and driving measurable impact
        </p>
        <div className="hero-carousel__links">
          <a href="#contact" className="hero-carousel__cta hero-carousel__cta--primary">
            Work With Us
          </a>
          <a href="#programmes" className="hero-carousel__cta hero-carousel__cta--secondary">
            Explore Programmes
          </a>
        </div>
      </div>

      <div className="hero-carousel__controls">
        <p className="hero-carousel__caption" aria-live={canRotate ? "off" : "polite"} aria-atomic="true">
          <span className="hero-carousel__count">
            {String(activeSlide + 1).padStart(2, "0")}
            <span className="hero-carousel__total"> / 03</span>
          </span>
          <span className="hero-carousel__caption-line" aria-hidden="true" />
          <span>{slides[activeSlide].label}</span>
        </p>

        <div className="hero-carousel__actions" role="group" aria-label="Slideshow controls">
          <button type="button" className="hero-carousel__control" aria-label="Previous image" onClick={() => showSlide(activeSlide - 1)}>
            <ChevronLeft size={20} aria-hidden="true" />
          </button>

          <div className="hero-carousel__dots" role="group" aria-label="Choose an image">
            {slides.map((slide, index) => (
              <button
                key={slide.label}
                type="button"
                className="hero-carousel__dot"
                aria-label={`Show image ${index + 1}: ${slide.label}`}
                aria-pressed={activeSlide === index}
                aria-controls={`hero-slide-${index}`}
                onClick={() => showSlide(index)}
              >
                <span aria-hidden="true" />
              </button>
            ))}
          </div>

          <button type="button" className="hero-carousel__control" aria-label="Next image" onClick={() => showSlide(activeSlide + 1)}>
            <ChevronRight size={20} aria-hidden="true" />
          </button>

          <button
            type="button"
            className="hero-carousel__control"
            data-playback-control
            disabled={reducedMotion}
            aria-label={reducedMotion ? "Automatic rotation disabled for reduced motion" : isPlaying ? "Pause image slideshow" : "Play image slideshow"}
            title={reducedMotion ? "Your reduced-motion preference disables autoplay" : isPlaying ? "Pause slideshow" : "Play slideshow"}
            onClick={() => setIsPlaying((current) => !current)}
          >
            {isPlaying && !reducedMotion ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
