import React from "react";
import { motion } from "framer-motion";

const DepartmentsInfo = () => {
  const departments = [
    {
      title: "নূরানী বিভাগ",
      desc: "শিশু শ্রেণী হইতে তৃতীয় শ্রেণি।",
    },
    {
      title: "হিফজুল কুরআন",
      desc: "শিশুদের জন্য মৌলিক ইসলামী শিক্ষা।",
    },
    {
      title: "কিতাব বিভাগ",
      desc: "",
    },
    {
      title: "সাধারণ শিক্ষা",
      desc: "শিশু শ্রেণী হইতে তৃতীয় শ্রেণি।",
    }
  ];

  return (
    <section className="section section--surface text-dark">
      <div className="container-1200">
        <div className="text-center">
          <span className="section-ornament" aria-hidden="true"></span>
          <h2 className="section-title">কোর্স সমূহ</h2>
        </div>
        <div className="row text-center g-4">
          {departments.map((dept, index) => (
            <div className="col-6 col-md-3" key={index}>
              <motion.div
                whileHover={{ y: -4 }}
                className="ui-card p-4 d-flex flex-column justify-content-center align-items-center"
                style={{ minHeight: "180px" }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "999px",
                    background: "rgba(20, 83, 45, 0.08)",
                    color: "var(--primary-color)",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                  }}
                >
                  {index + 1}
                </span>
                <h5 className="fw-bold" style={{ color: "var(--secondary-color)" }}>{dept.title}</h5>
                <p className="mt-1 mb-0">{dept.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsInfo;
