import { useEffect, useState } from "react";
import { MOODS } from "../../data/config";
// import { useSpring, animated } from "react-spring";

type Props = {
  handleChange: (event: any) => void;
  data: any;
};

// const springStyle = useSpring({
//   to: { opacity: 1 },
//   from: { opacity: 0 },
// });

const options = MOODS.map((mood) => {
  return (
    <option value={mood} key={mood}>
      {mood}
    </option>
  );
});

const selectMood = ({ handleChange, data }: Props) => {
  return (
    <form className="form__subform form__subform--mood">
      <select
        className="form__subform__select-box"
        name="mood"
        value={data.mood}
        onChange={handleChange}
      >
        {options}
      </select>
    </form>
  );
};

export default selectMood;
