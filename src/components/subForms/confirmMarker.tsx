import { ICONS } from "../../data/config";

type Props = {
  data: any;
  createMarker: () => void;
  resetForm: () => void;
};

const verifyMarker = ({ data, createMarker, resetForm }: Props) => {
  let currentIcon = data.icon;
  let DisplayIcon = ICONS[data.icon].component;
  return (
    <div className="form__subform">
      <div className="form__subform__verify">
        <DisplayIcon
          className="form__subform__verify--icon"
          fill={data.color}
        />
        <h1 className="form__subform__verify--mood">{data.mood}</h1>
        <button
          className="form__subform__verify--button"
          onClick={createMarker}
        >
          Create Marker!
        </button>
        <button className="form__subform__verify--button" onClick={resetForm}>
          Restart
        </button>
      </div>
    </div>
  );
};

export default verifyMarker;
