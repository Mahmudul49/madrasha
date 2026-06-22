const primary = {
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
  color: "#fff",
};
function IconWithBackground({ type, children }) {
  return <div style={type === "primary" ? primary : secondary}>{children}</div>;
}

export default IconWithBackground;
