import Head from 'next/head';
import { Suspense } from "react";
import HeroBanner from '@/components/common/Banner';
import AboutSection from '@/components/home/AboutSection';
import ContactForm from '@/components/common/ContactForm';
import IconWithBackground from "@/components/common/IconWithBackground";
import Reveal from "@/components/common/Reveal";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

// Dynamic imports with suspense
import dynamic from 'next/dynamic';

const DepartmentsInfo = dynamic(() => import('@/components/home/DepartmentsInfo'), { suspense: true });
const StudentCorner = dynamic(() => import('@/components/home/StudentCorner'), { suspense: true });
const Gallery = dynamic(() => import('@/components/common/Gallery'), { suspense: true });
const Notice = dynamic(() => import('@/components/common/Notice'), { suspense: true });
const AdmissionInfo = dynamic(() => import('@/components/home/AdmissionInfo'), { suspense: true });

export default function Home() {
  return (
    <>
      <Head>
        <title>তাকওয়া নূরানী ও হাফেজিয়া মাদ্রাসা</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="home">
        <HeroBanner name="" />

        <Reveal as="section">
          <AboutSection />
        </Reveal>

        {/* Suspense for dynamic components */}
        <Suspense fallback={<div className="text-center my-5">Loading Academics...</div>}>
          <Reveal as="section"><DepartmentsInfo /></Reveal>
          <Reveal as="section"><StudentCorner /></Reveal>
          <Reveal as="section"><Gallery /></Reveal>
          <Reveal as="section"><Notice /></Reveal>
          <Reveal as="section"><AdmissionInfo /></Reveal>
        </Suspense>

        {/* Contact Section */}
        <section className="section section--white">
          <div className="container-1200">
            <div className="text-center mb-5">
              <span className="section-ornament" aria-hidden="true"></span>
            </div>
            <div className="row g-4 justify-content-center align-items-start">
              <div className="col-lg-5">
                <div className="d-flex flex-column gap-3">
                  {[
                    { icon: <FaPhoneAlt size={20} />, title: "মোবাইল", desc: "মোবাইল: +৮৮০১৭০৮৫৮৮৫৯০" },
                    { icon: <FaEnvelope size={20} />, title: "ইমেইল", desc: "madashatakua@heritagebd.com\ninfo@heritagebd.com" },
                    { icon: <FaMapMarkerAlt size={20} />, title: "ঠিকানা", desc: "ছোট সিংগিয়া কলেজ রোড লাহিড়ী বালিয়াডাঙ্গী ঠাকুরগাঁও।" }
                  ].map((item, idx) => (
                    <div key={idx} className="ui-card contact-info-card p-4">
                      <div className="d-flex gap-3 align-items-start">
                        <IconWithBackground>{item.icon}</IconWithBackground>
                        <div>
                          <h5 className="mb-1">{item.title}</h5>
                          {item.desc.split("\n").map((line, i) => <p key={i} className="mb-0 text-break">{line}</p>)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-7">
                <div className="ui-card contact-form-card p-4 p-md-5">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
