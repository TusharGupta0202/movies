const Spinner = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="spinner"
    >
      <svg
        className="w-8 h-8 animate-spin"
        viewBox="0 0 100 101"
        fill="none"
      >
        {/* same paths */}
      </svg>

      <span className="sr-only">Loading movies...</span>
    </div>
  );
};

export default Spinner;
