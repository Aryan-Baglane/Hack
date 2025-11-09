const SecondApp = () => {
  return (
    <iframe
      src="https://mlh-visualizer.onrender.com/"   // ✅ second app URL
      style={{
        width: "100%",
        height: "100vh",
        border: "none"
      }}
      title="Embedded Application"
    />
  );
};

export default SecondApp;
