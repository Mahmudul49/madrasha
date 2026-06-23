
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion

const HeroBanner = ({ name }) => {
  const router = useRouter();
  const [currentSlides, setCurrentSlides] = useState([]);

  const slidesData = {
    "/": [
      {
        image: "/slider/slider-1.jpg",
        title: "আদর্শ চরিত্র গঠনে শিক্ষা"
      },
      {
        image: "/slider/slider-2.jpg",
        title: "তাকওয়া-নূরানী ও হাফেজিয়া মাদ্রাসা"
      },
      {
        image: "/slider/slider-3.jpg",
        title: "শিক্ষার্থীদের হিফজ প্রতিযোগিতা"
      },
      {
        image: "/slider/slider-4.jpg",
        title: "ইসলামিক শিক্ষার আলো ছড়াই"
      },
           
    ],
    "/about": [
      {
        image: "/slider/slider-2.jpg",
        title: "আদর্শ চরিত্র গঠনে শিক্ষা"
      },
      {
        image: "/slider/slider-3.jpg",
        title: "দীর্ঘ ইতিহাস ও গৌরব"
      },
      {
        image: "/slider/slider-6.jpg",
        title: "শিক্ষক ও ছাত্রদের একতা"
      }
    ],
    "/madrasaIntro": [
      {
        image: "/slider/slider-4.jpg",
        title: "আদর্শ চরিত্র গঠনে শিক্ষা"
      },
      {
        image: "/slider/slider-3.jpg",
        title: "দীর্ঘ ইতিহাস ও গৌরব"
      },
      {
        image: "/slider/slider-6.jpg",
        title: "শিক্ষক ও ছাত্রদের একতা"
      }
    ],
    "/contact": [
      {
        image: "/slider/slider-2.jpg",
        title: "শিক্ষক ও ছাত্রদের একতা"
      },
      {
        image: "/slider/slider-3.jpg",
        title: "আমাদের শিক্ষার্থী"
      },
      {
        image: "/slider/slider-4.jpg",
        title: "দীর্ঘ ইতিহাস ও গৌরব"
      }
    ],
    "/picture": [
      {
        image: "/slider/slider-4.jpg",
        title: "আদর্শ চরিত্র গঠনে শিক্ষা"
      },
      {
        image: "/slider/slider-5.jpg",
        title: "দীর্ঘ ইতিহাস ও গৌরব"
      },
      {
        image: "/slider/slider-6.jpg",
        title: "শিক্ষক ও ছাত্রদের একতা"
      }
    ],
    "/teachers": [
      {
        image: "/slider/slider-3.jpg",
        title: "আদর্শ চরিত্র গঠনে শিক্ষা"
      },
      {
        image: "/slider/slider-3.jpg",
        title: "দীর্ঘ ইতিহাস ও গৌরব"
      },
      {
        image: "/slider/slider-2.jpg",
        title: "শিক্ষক ও ছাত্রদের একতা"
      }
    ]
  };

  useEffect(() => {
    const routeSlides = slidesData[router.pathname] || slidesData["/"];
    setCurrentSlides(routeSlides);
  }, [router.pathname]);

  return (
    <div
      id="heroCarousel"
      className="carousel slide hero-carousel"
      data-bs-ride="carousel"
    >
      {currentSlides.length > 1 && (
        <div className="carousel-indicators hero-indicators">
          {currentSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={`Slide ${i + 1}`}
            ></button>
          ))}
        </div>
      )}
      <div className="carousel-inner">
        {currentSlides.map((slide, index) => (
          <motion.div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div
              className="position-relative hero-slide"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "77vh", // Increased height for better impact
              }}
            >
              <motion.div
                className="position-absolute w-100 h-100 top-0 start-0 hero-scrim"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Custom Carousel Buttons */}
      <motion.button
        className="carousel-control-prev custom-carousel-btn"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="custom-carousel-icon bg-light text-dark">
          <i className="bi bi-chevron-left fs-3"></i>
        </span>
        <span className="visually-hidden">Previous</span>
      </motion.button>
      <motion.button
        className="carousel-control-next custom-carousel-btn"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="custom-carousel-icon bg-light text-dark">
          <i className="bi bi-chevron-right fs-3"></i>
        </span>
        <span className="visually-hidden">Next</span>
      </motion.button>

      <style jsx>{`
        .hero-scrim {
          background: linear-gradient(
              to bottom,
              rgba(13, 58, 32, 0.35) 0%,
              rgba(13, 58, 32, 0.05) 28%,
              rgba(13, 58, 32, 0.12) 62%,
              rgba(13, 58, 32, 0.62) 100%
            ),
            radial-gradient(
              130% 90% at 50% 35%,
              transparent 55%,
              rgba(13, 58, 32, 0.4) 100%
            );
        }

        /* navigation dots */
        .hero-indicators {
          margin-bottom: 1.5rem;
          gap: 10px;
          align-items: center;
        }
        .hero-indicators button {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1.5px solid rgba(255, 255, 255, 0.85);
          background: transparent;
          opacity: 1;
          transition: width 0.25s ease, background-color 0.25s ease;
        }
        .hero-indicators button.active {
          width: 26px;
          border-radius: 999px;
          background: #c79a3a;
          border-color: #c79a3a;
        }

        .custom-carousel-btn {
          width: auto;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 1rem;
        }

        .custom-carousel-icon {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.92) !important;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .custom-carousel-icon:hover {
          background-color: #c79a3a !important;
          color: #fff !important;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .hero-slide {
            height: 56vh !important;
          }

          .carousel-item h2 {
            font-size: 1.2rem;
          }
        }
      `}</style>

      {/* Bootstrap Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />
    </div>
  );
};

export default HeroBanner;



