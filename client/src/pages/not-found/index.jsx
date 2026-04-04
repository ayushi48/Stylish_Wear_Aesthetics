function NotFound() {
  const containerStyle = {
    minHeight: "100vh",
    background: "#0a0a0f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Georgia', serif",
    overflow: "hidden",
    position: "relative",
  };

  const bgGridStyle = {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  };

  const glowStyle = {
    position: "absolute",
    width: "600px",
    height: "600px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(220, 38, 38, 0.12) 0%, transparent 70%)",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
  };

  const cardStyle = {
    position: "relative",
    zIndex: 10,
    textAlign: "center",
    padding: "4rem 3rem",
    maxWidth: "560px",
  };

  const codeStyle = {
    fontSize: "clamp(7rem, 18vw, 11rem)",
    fontWeight: "900",
    letterSpacing: "-0.06em",
    lineHeight: 1,
    margin: 0,
    fontFamily: "'Georgia', serif",
    background: "linear-gradient(135deg, #ef4444 0%, #991b1b 50%, #450a0a 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    filter: "drop-shadow(0 0 40px rgba(239,68,68,0.3))",
    animation: "pulse 3s ease-in-out infinite",
  };

  const dividerStyle = {
    width: "60px",
    height: "2px",
    background: "linear-gradient(90deg, transparent, #ef4444, transparent)",
    margin: "1.5rem auto",
  };

  const headingStyle = {
    fontSize: "1.1rem",
    fontWeight: "400",
    letterSpacing: "0.35em",
    textTransform: "uppercase",
    color: "#f87171",
    margin: "0 0 1rem 0",
    fontFamily: "'Courier New', monospace",
  };

  const bodyStyle = {
    fontSize: "1.05rem",
    color: "#6b7280",
    lineHeight: 1.7,
    margin: "0 0 2.5rem 0",
    fontFamily: "'Georgia', serif",
    fontStyle: "italic",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "0.85rem 2.5rem",
    border: "1px solid rgba(239,68,68,0.4)",
    color: "#f87171",
    background: "rgba(239,68,68,0.05)",
    fontSize: "0.8rem",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    textDecoration: "none",
    cursor: "pointer",
    fontFamily: "'Courier New', monospace",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  };

  const handleMouseEnter = (e) => {
    e.target.style.background = "rgba(239,68,68,0.15)";
    e.target.style.borderColor = "rgba(239,68,68,0.8)";
    e.target.style.color = "#fff";
    e.target.style.boxShadow = "0 0 30px rgba(239,68,68,0.2)";
  };

  const handleMouseLeave = (e) => {
    e.target.style.background = "rgba(239,68,68,0.05)";
    e.target.style.borderColor = "rgba(239,68,68,0.4)";
    e.target.style.color = "#f87171";
    e.target.style.boxShadow = "none";
  };

  const cornerStyle = (top, right, bottom, left) => ({
    position: "absolute",
    width: "20px",
    height: "20px",
    borderColor: "rgba(239,68,68,0.3)",
    borderStyle: "solid",
    borderWidth: 0,
    ...(top !== undefined && { top: "1.5rem" }),
    ...(right !== undefined && { right: "1.5rem" }),
    ...(bottom !== undefined && { bottom: "1.5rem" }),
    ...(left !== undefined && { left: "1.5rem" }),
    ...(top !== undefined && right !== undefined && { borderTopWidth: "1px", borderRightWidth: "1px" }),
    ...(top !== undefined && left !== undefined && { borderTopWidth: "1px", borderLeftWidth: "1px" }),
    ...(bottom !== undefined && right !== undefined && { borderBottomWidth: "1px", borderRightWidth: "1px" }),
    ...(bottom !== undefined && left !== undefined && { borderBottomWidth: "1px", borderLeftWidth: "1px" }),
  });

  return (
    <>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .nf-card > * {
          animation: fadeUp 0.6s ease both;
        }
        .nf-card > *:nth-child(1) { animation-delay: 0.1s; }
        .nf-card > *:nth-child(2) { animation-delay: 0.2s; }
        .nf-card > *:nth-child(3) { animation-delay: 0.3s; }
        .nf-card > *:nth-child(4) { animation-delay: 0.4s; }
        .nf-card > *:nth-child(5) { animation-delay: 0.5s; }
        .nf-card > *:nth-child(6) { animation-delay: 0.6s; }
      `}</style>

      <div style={containerStyle}>
        <div style={bgGridStyle} />
        <div style={glowStyle} />

        <div style={{ position: "relative", zIndex: 10 }}>
          {/* Corner brackets */}
          <div style={{ position: "relative", padding: "2.5rem" }}>
            <div style={cornerStyle(true, undefined, undefined, true)} />
            <div style={cornerStyle(true, true, undefined, undefined)} />
            <div style={cornerStyle(undefined, undefined, true, true)} />
            <div style={cornerStyle(undefined, true, true, undefined)} />

            <div style={cardStyle} className="nf-card">
              <p style={{ ...headingStyle, fontSize: "0.7rem", marginBottom: "1.5rem", color: "#4b5563" }}>
                error
              </p>
              <h1 style={codeStyle}>404</h1>
              <div style={dividerStyle} />
              <h2 style={headingStyle}>Page Not Found</h2>
              <p style={bodyStyle}>
                The page you're looking for has wandered off into the void.<br />
                It doesn't exist — or perhaps it never did.
              </p>
              <button
                style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => window.history.back()}
              >
                ← Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;