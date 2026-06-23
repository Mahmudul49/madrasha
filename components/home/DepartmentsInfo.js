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
                whileHover={{ y: -5 }}
                className="ui-card course-card d-flex flex-column align-items-center"
              >
                <span className="course-number" aria-hidden="true">
                  {index + 1}
                </span>
                <h5 className="course-title">{dept.title}</h5>
                <p className="course-desc">{dept.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsInfo;
