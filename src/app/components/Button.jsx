import React from "react";
import Link from "next/link";

const Button = ({
  href,
  backgroundColor,
  buttonText = "click",
  onClick,
  style,
  glow,
  shadow,
  icon,
  iconSize,
}) => {
  return (
    <Link
      href={href}
      className={`flex gap-2 justify-center items-center text-2xl font-bold px-4 py-2 rounded-2xl w-fit transition-all duration-300 ease-in-out ${
        backgroundColor ? backgroundColor : "bg-violet-500"
      } ${glow} ${shadow} hover:brightness-125`}
      onClick={onClick}
      style={{ backgroundColor: style }}
    >
      {buttonText}
      {<span style={{ fontSize: `${iconSize}px` }}>{icon}</span>}
    </Link>
  );
};

export default Button;