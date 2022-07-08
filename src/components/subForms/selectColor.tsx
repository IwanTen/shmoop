// import { useSpring, animated } from "react-spring";
import { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
/// <reference types="vite-plugin-svgr/client" />

type formProps = { handleChange: (data: any) => void };

export default function colorForm({ handleChange }: formProps) {
  const [color, setColor] = useState("");

  // const formAnimationStyles = useSpring({
  //   to: { opacity: 1 },
  //   from: { opacity: 0 },
  // });

  useEffect(() => {
    handleChange(color);
  }, [color]);

  // const handleSubmit = (e: any) => {
  //   e.preventDefault();
  //   console.log("return color to form");
  //   handleChange(color);
  // };

  return (
    <form
      className="form__subform form__subform--color"
      // style={formAnimationStyles}
    >
      <HexColorPicker color={color} onChange={setColor} />
    </form>
  );
}
