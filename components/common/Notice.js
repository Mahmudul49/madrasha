<<<<<<< HEAD
import React from "react";
import { notices } from "@/data/notices";
import Link from "next/link";
import Image from "next/image";
import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";

function Notice() {
  return (
    <section className="section section--white notice-board">{/* Notice */}
      <div className="container-1200">
        <div className="text-center">
          <span className="section-ornament" aria-hidden="true"></span>
          <h2 className="section-title">নোটিশ বোর্ড</h2>
        </div>

        <div className="notice-grid">
          {notices.map((notice) => (
            <Link key={notice.id} href={`/notices/${notice.id}`} legacyBehavior>
              <a className={`notice-card${notice.important ? " is-important" : ""}`}>
                {notice.image && (
                  <div className="notice-poster">
                    <Image
                      src={notice.image}
                      alt={notice.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 300px"
                      style={{ objectFit: "cover", objectPosition: "top center" }}
                    />
                  </div>
                )}
                <div className="notice-info">
                  <span className="notice-date">
                    <FaRegCalendarAlt aria-hidden="true" />
                    <span>{notice.date}</span>
                  </span>
                  <h5>{notice.title}</h5>
                  <span className="notice-readmore" aria-hidden="true">
                    <FaArrowRight />
                  </span>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Notice;
=======
import React from 'react'
import { notices  } from '@/data/notices';
import Link from 'next/link';
function Notice() {
    return (
        <>{/* Notice */}
            <div className="container py-5">
                <h2 className="section-title">নোটিশ বোর্ড</h2>
                {/* Notice list with sliding animation */}
                <div className="notice-container">
                    {notices.map((notice) => (
                        <div key={notice.id} className="notice-card">

                            <Link href={`/notices/${notice.id}`} legacyBehavior>
                                <a>
                                    <div className="d-flex justify-content-center mb-3">
                                        {notice.image && (
                                            <img
                                                src={notice.image}
                                                alt={notice.title}
                                                width={280}
                                                height={360}
                                                className="img-fluid rounded"
                                            />
                                        )}
                                    </div>
                                    <div className="notice-info">
                                        <h5>{notice.title}</h5>
                                        <p className="text-muted">{notice.date}</p>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    ))}
                </div>

                <style jsx>{`
        .notice-container {
          display: flex;
          overflow-x: scroll;
          gap: 15px;
          padding: 20px;
        }

        .notice-card {
          flex: 0 0 auto;
          width: 370px;
          height: 400px;
          padding: 10px
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .notice-card:hover {
          transform: scale(1.05);
        }

        .notice-info {
          padding: 10px;
        }

        .notice-info h5 {
          font-size: 18px;
          font-weight: bold;
        }

        .notice-info p {
          font-size: 14px;
          color: #666;
        }

        .notice-card a {
          text-decoration: none;
          color: inherit;
        }
      `}</style>
            </div></>
    )
}

export default Notice
>>>>>>> c3a496bab4a5ab421806baf221c6f2318361716b
