function Button({ label }) {
  return (
    <button
      className="shadow-util px-6 py-2.5 rounded-full
                font-medium transition-colors
                 hover:bg-neutral-100 focus:bg-neutral-100"
    >
      {label}
    </button>
  );
}

export default Button;
