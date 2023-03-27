const TextButton = ({
  label,
  prependChild,
  appendChild,
  containerSTyle,
  labelStyle,
  onClick,
  buttonType,
}) => {
  return (
    <button
      className={`grid cursor-pointer place-content-center ${containerSTyle}`}
      onClick={onClick}
      type={buttonType}
    >
      <div className={`flex gap-3 ${labelStyle}`}>
        {prependChild}
        <span className={`text-base font-semibold leading-[22px]`}>
          {label}
        </span>
        {appendChild}
      </div>
    </button>
  );
};

export default TextButton;
