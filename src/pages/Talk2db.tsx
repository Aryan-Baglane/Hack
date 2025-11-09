const ThirdApp = () => {
  return (
    <iframe
      src="https://talk2db-latest.onrender.com/"   // ✅ second app URL
      style={{
        width: "100%",
        height: "100vh",
        border: "none"
      }}
      title="Embedded Application"
    />
  );
};

export default ThirdApp;
