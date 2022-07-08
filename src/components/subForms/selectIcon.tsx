import { useState, useEffect } from "react";
import { ICON_NAMES, ICONS } from "../../data/config";
// import { useSpring, animated } from "react-spring";

type Props = {
  handleChange: (event: any) => void;
  data: any;
};

// const formAnimationStyles = useSpring({
//   to: { opacity: 1 },
//   from: { opacity: 0 },
// });

const selectIcon = ({ handleChange, data }: Props) => {
  let iconButtons = Object.keys(ICONS)
    .filter((name) => name !== ICON_NAMES.DEFAULT)
    .map((name) => {
      let IconButton = ICONS[name].component;
      return (
        <div key={name} className="form__subform__icon-wrapper__container">
          <input
            type="radio"
            name="icon"
            value={name}
            id={name}
            checked={data.icon === name}
            onChange={handleChange}
          />
          <label htmlFor={name} key={name + "label"}>
            <IconButton className="form__subform__icon-wrapper--icon" />
          </label>
        </div>
      );
    });

  return (
    <form className="form__subform form__subform--icons">
      <fieldset className="form__subform__icon-wrapper">{iconButtons}</fieldset>
    </form>
  );
};

export default selectIcon;
