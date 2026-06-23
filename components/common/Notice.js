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
