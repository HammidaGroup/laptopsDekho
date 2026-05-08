import { useEffect } from "react";

const OpenInChrome = () => {

  const websiteUrl = "https://laptopsDekho.xyz";

  useEffect(() => {
    // Auto redirect after 1 second
    const timer = setTimeout(() => {
      window.location.href = 
        `intent://${websiteUrl.replace("https://", "")}#Intent;scheme=https;package=com.android.chrome;end;`;
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleOpenChrome = () => {
    window.location.href =
      `intent://${websiteUrl.replace("https://", "")}#Intent;scheme=https;package=com.android.chrome;end;`;
  };

  return (
    <div style={styles.container}>
      <h2>Open in Chrome</h2>
      <p>
        For better login experience, please open this page in Chrome browser.
      </p>

      <button onClick={handleOpenChrome} >
        Open in Chrome
      </button>

      <p style={{ marginTop: "20px", fontSize: "14px" }}>
        If nothing happens, tap ⋮ and choose "Open in Browser".
      </p>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
     color: "black",
    backgroundColor: "#f5f5f5",
  },
  button: {
    padding: "12px 20px",
    fontSize: "16px",
    // backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "15px",
  },
};

export default OpenInChrome;
