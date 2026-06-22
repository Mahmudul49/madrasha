
"use client";

import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaFileAlt,
  FaUsers,
  FaCrown,
  FaSearch,
  FaMoneyBill,
  FaIdCard,
  FaKey,
  FaTable,
  FaFingerprint,
  FaGraduationCap,
} from "react-icons/fa";

const items = [
  { label: "অনলাইনে ভর্তি", icon: <FaUserPlus size={28} />, color: "bg-success" },
  { label: "ভর্তি আবেদন ফরম", icon: <FaFileAlt size={28} />, color: "bg-warning" },
  { label: "শিক্ষার্থীসদস্য", icon: <FaUsers size={28} />, color: "bg-primary" },
  { label: "কৃতি শিক্ষার্থী", icon: <FaCrown size={28} />, color: "bg-info" },
  { label: "শিক্ষার্থী অনুসন্ধান", icon: <FaSearch size={28} />, color: "bg-danger" },
  { label: "ফি প্রদান", icon: <FaMoneyBill size={28} />, color: "bg-success" },
  { label: "আইডি কার্ড", icon: <FaIdCard size={28} />, color: "bg-warning" },
  { label: "প্রবেশপত্র", icon: <FaKey size={28} />, color: "bg-secondary" },
  { label: "শিক্ষার্থী রিপোর্ট", icon: <FaTable size={28} />, color: "bg-dark" },
  { label: "শিক্ষার্থী হাজিরা", icon: <FaFingerprint size={28} />, color: "bg-secondary" },
  { label: "পরীক্ষার ফলাফল", icon: <FaGraduationCap size={28} />, color: "bg-primary" },
];

export default function StudentCorner() {
  return (
<<<<<<< HEAD
    <div className="section section--white">
      <div className="container-1200">
        <div className="text-center">
          <span className="section-ornament" aria-hidden="true"></span>
          <h2 className="section-title">🎓 শিক্ষার্থীর কর্ণার</h2>
        </div>
        <div className="row g-4 justify-content-center">
          {items.map((item, idx) => (
            <div key={idx} className="col-6 col-md-4 col-lg-3">
              <motion.div
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="ui-card text-center p-4 h-100 d-flex flex-column align-items-center justify-content-start"
              >
                {/* Icon */}
                <div
                  className="d-flex justify-content-center align-items-center mx-auto rounded-circle mb-3"
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "rgba(20, 83, 45, 0.08)",
                    color: "var(--primary-color)",
                  }}
                >
                  {item.icon}
                </div>

                {/* Label */}
                <h6 className="fw-semibold text-dark mt-1 mb-0">
                  {item.label}
                </h6>
              </motion.div>
            </div>
          ))}
        </div>
=======
    <div
      className="bg-light container-fluid min-vh-100 py-5"
    //   style={{
    //     background: "linear-gradient(135deg, #e3f2fd, #bbdefb, #90caf9)",
    //   }}
    >
       
      <h2 className="section-title">🎓 শিক্ষার্থীর কর্ণার</h2>
      <div className="row g-4 justify-content-center">
        {items.map((item, idx) => (
          <div key={idx} className="col-6 col-md-4 col-lg-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="card shadow-lg border-0 rounded-4 text-center p-4 h-100 position-relative overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #ffffff, #f1f5f9)",
              }}
            >
              {/* Floating Glow Effect */}
              <div
                className="position-absolute top-0 start-50 translate-middle-x rounded-circle"
                style={{
                  width: "120px",
                  height: "120px",
                  background: "radial-gradient(circle, rgba(0,123,255,0.2), transparent)",
                  zIndex: 0,
                }}
              ></div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 15 }}
                className={`d-flex justify-content-center align-items-center mx-auto rounded-circle text-white mb-3 shadow ${item.color}`}
                style={{ width: "75px", height: "75px", zIndex: 1 }}
              >
                {item.icon}
              </motion.div>

              {/* Label */}
              <h6 className="fw-semibold text-dark mt-2" style={{ zIndex: 1 }}>
                {item.label}
              </h6>
            </motion.div>
          </div>
        ))}
>>>>>>> c3a496bab4a5ab421806baf221c6f2318361716b
      </div>
    </div>
  );
}




