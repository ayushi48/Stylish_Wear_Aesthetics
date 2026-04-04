function UnauthPage() {
  const styles = {
    page: {
      minHeight: "100vh",
      background: "#050810",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Georgia', serif",
      overflow: "hidden",
      position: "relative",
    },
    bgGrid: {
      position: "fixed",
      inset: 0,
      backgroundImage:
        "linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)",
      backgroundSize: "50px 50px",
    },
    glow1: {
      position: "fixed",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
      top: "40%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      pointerEvents: "none",
    },
    glow2: {
      position: "fixed",
      width: "300px",
      height: "300px",
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)",
      top: "60%",
      left: "55%",
      transform: "translate(-50%,-50%)",
      pointerEvents: "none",
    },
    scanline: {
      position: "fixed",
      inset: 0,
      pointerEvents: "none",
      background:
        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
      zIndex: 50,
    },
    card: {
      position: "relative",
      zIndex: 10,
      textAlign: "center",
      padding: "4rem 3.5rem",
      maxWidth: "540px",
    },
    shieldWrap: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "2.5rem",
      animation: "fadeUp 0.5s ease 0.1s both",
    },
    shield: {
      position: "relative",
      width: "72px",
      height: "80px",
    },
    shieldLock: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -44%)",
      fontSize: "1.5rem",
    },
    errorTag: {
      fontFamily: "'Courier New', monospace",
      fontSize: "0.65rem",
      letterSpacing: "0.4em",
      textTransform: "uppercase",
      color: "#4b5563",
      marginBottom: "1.2rem",
      animation: "fadeUp 0.5s ease 0.2s both",
    },
    code: {
      fontSize: "clamp(5.5rem, 15vw, 9rem)",
      fontWeight: 900,
      letterSpacing: "-0.05em",
      lineHeight: 1,
      background: "linear-gradient(135deg, #818cf8 0%, #6366f1 40%, #4338ca 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      filter: "drop-shadow(0 0 30px rgba(99,102,241,0.3))",
      animation: "fadeUp 0.5s ease 0.25s both, numPulse 4s ease-in-out 0.75s infinite",
    },
    divider: {
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      margin: "1.5rem 0",
      animation: "fadeUp 0.5s ease 0.35s both",
    },
    dividerLine: {
      flex: 1,
      height: "1px",
      background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)",
    },
    dividerDot: {
      width: "4px",
      height: "4px",
      borderRadius: "50%",
      background: "#6366f1",
      boxShadow: "0 0 8px rgba(99,102,241,0.8)",
    },
    heading: {
      fontFamily: "'Courier New', monospace",
      fontSize: "0.8rem",
      fontWeight: 400,
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      color: "#a5b4fc",
      marginBottom: "1rem",
      animation: "fadeUp 0.5s ease 0.4s both",
    },
    body: {
      fontSize: "1rem",
      color: "#6b7280",
      lineHeight: 1.8,
      fontStyle: "italic",
      marginBottom: "2.5rem",
      animation: "fadeUp 0.5s ease 0.48s both",
    },
    actions: {
      display: "flex",
      gap: "1rem",
      justifyContent: "center",
      flexWrap: "wrap",
      animation: "fadeUp 0.5s ease 0.56s both",
    },
    btnBase: {
      padding: "0.8rem 2rem",
      fontSize: "0.72rem",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      fontFamily: "'Courier New', monospace",
      cursor: "pointer",
      transition: "all 0.3s ease",
      border: "none",
      outline: "none",
    },
    btnPrimary: {
      background: "linear-gradient(135deg, #6366f1, #4338ca)",
      color: "#fff",
      boxShadow: "0 0 20px rgba(99,102,241,0.25)",
    },
    btnGhost: {
      background: "transparent",
      border: "1px solid rgba(99,102,241,0.3)",
      color: "#818cf8",
      backdropFilter: "blur(10px)",
    },
  };

  return (
    <>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shieldPulse {
          0%, 100% { filter: drop-shadow(0 0 16px rgba(99,102,241,0.5)); }
          50%       { filter: drop-shadow(0 0 28px rgba(99,102,241,0.85)); }
        }
        @keyframes numPulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.88; }
        }
        .shield-svg {
          width: 100%; height: 100%;
          filter: drop-shadow(0 0 16px rgba(99,102,241,0.5));
          animation: shieldPulse 3s ease-in-out infinite;
        }
        .btn-primary:hover {
          box-shadow: 0 0 35px rgba(99,102,241,0.5) !important;
          transform: translateY(-1px);
        }
        .btn-ghost:hover {
          background: rgba(99,102,241,0.08) !important;
          border-color: rgba(99,102,241,0.7) !important;
          color: #c7d2fe !important;
        }
      `}</style>

      <div style={styles.page}>
        <div style={styles.bgGrid} />
        <div style={styles.glow1} />
        <div style={styles.glow2} />
        <div style={styles.scanline} />

        <div style={styles.card}>
          {/* Shield Icon */}
          <div style={styles.shieldWrap}>
            <div style={styles.shield}>
              <svg className="shield-svg" viewBox="0 0 72 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36 4L8 16V38C8 55 20 69 36 76C52 69 64 55 64 38V16L36 4Z"
                  fill="url(#sg)"
                  stroke="rgba(99,102,241,0.6)"
                  strokeWidth="1.5"
                />
                <defs>
                  <linearGradient id="sg" x1="8" y1="4" x2="64" y2="76" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="rgba(99,102,241,0.25)" />
                    <stop offset="100%" stopColor="rgba(67,56,202,0.1)" />
                  </linearGradient>
                </defs>
              </svg>
              <div style={styles.shieldLock}>🔒</div>
            </div>
          </div>

          <p style={styles.errorTag}>error / access denied</p>
          <div style={styles.code}>401</div>

          <div style={styles.divider}>
            <div style={styles.dividerLine} />
            <div style={styles.dividerDot} />
            <div style={styles.dividerLine} />
          </div>

          <h2 style={styles.heading}>Unauthorized</h2>
          <p style={styles.body}>
            You don't have permission to view this page.<br />
            Please sign in or contact your administrator.
          </p>

          <div style={styles.actions}>
            <button
              className="btn-primary"
              style={{ ...styles.btnBase, ...styles.btnPrimary }}
              onClick={() => {window.location.href = "/auth/login"}}
            >
              Sign In
            </button>
            <button
              className="btn-ghost"
              style={{ ...styles.btnBase, ...styles.btnGhost }}
              onClick={() => window.history.back()}
            >
              ← Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UnauthPage;