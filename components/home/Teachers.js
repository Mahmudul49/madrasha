import SectionTitle from "@/components/common/SectionTitle";
import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

import { teachers } from "@/data/teachers";

function Teachers() {
  return (
    <section className="section section--surface teachers-section">
      <div className="container-1200">
        <div className="text-center">
          <span className="section-ornament" aria-hidden="true"></span>
          <SectionTitle title="আমাদের শিক্ষকরা" />
        </div>

        <Row className="g-4 justify-content-center">
          {teachers.map((teacher) => (
            <Col xs={12} sm={6} lg={4} key={teacher._id}>
              <div className="ui-card teacher-card h-100">
                <div className="teacher-photo">
                  <Image
                    src={teacher.image}
                    alt="Office"
                    fill
                    sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                    style={{ objectFit: "cover", objectPosition: "top center" }}
                  />
                </div>
                <div className="teacher-card-body">
                  <p className="teacher-name">{teacher.name}</p>

                  <div className="teacher-meta teacher-desg">
                    <FaMapMarkerAlt className="teacher-ic" />
                    <span>{teacher.designation}</span>
                  </div>
                  <div className="teacher-meta">
                    <FaPhoneAlt className="teacher-ic" />
                    <span>{teacher.phone}</span>
                  </div>
                  <div className="teacher-meta">
                    <FaEnvelope className="teacher-ic" />
                    <span>{teacher.email}</span>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}

export default Teachers;
