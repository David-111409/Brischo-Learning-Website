function Button({ label, primary, classes }) {
  return (
    <button
      className={`shadow-util px-6 py-2.5 rounded-full
                font-medium transition-colors
                  focus:bg-neutral-100
                 ${classes}
                  ${
                    primary
                      ? "bg-lime-200 hover:bg-lime-400 focus:bg-lime-400"
                      : "hover:bg-neutral-100 focus:bg-neutral-100"
                  }`}
    >
      {label}
    </button>
  );
}

export default Button;
