const primary = {
<<<<<<< HEAD
  backgroundColor: "var(--accent-gold, #c79a3a)",
  borderRadius: "10px",
  padding: "12px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
};
const secondary = {
  backgroundColor: "var(--primary-color, #14532d)",
  borderRadius: "10px",
  padding: "12px",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
=======
  backgroundColor: "#e49e48",
  borderRadius: "5px",
  padding: "10px",
  color: "#fff",
};
const secondary = {
  backgroundColor: "#59330e",
  borderRadius: "5px",
  padding: "10px",
>>>>>>> c3a496bab4a5ab421806baf221c6f2318361716b
  color: "#fff",
};
function IconWithBackground({ type, children }) {
  return <div style={type === "primary" ? primary : secondary}>{children}</div>;
}

export default IconWithBackground;
