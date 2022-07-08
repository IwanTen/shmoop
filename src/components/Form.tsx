import { useState, useEffect, MouseEventHandler } from "react";
import {
  ICON_NAMES,
  ICONS,
  MOODS,
  MARKER_DATA,
  FORM_STATES,
} from "../data/config";
import { ReactComponent as CloseButton } from "../data/icons/closeButton.svg";
import ColorForm from "./subForms/selectColor";
import IconForm from "./subForms/selectIcon";
import MoodForm from "./subForms/selectMood";
import ConFirmMarker from "./subForms/confirmMarker";

type Props = {
  closeForm: () => void;
};

const Form = ({ closeForm }: Props) => {
  //Stores which form is currently displayed
  let [formState, setFormState] = useState<FORM_STATES>(
    FORM_STATES.CHOOSE_COLOR
  );
  //Stores the "Marker data" we will return to the server
  let [data, setData] = useState<MARKER_DATA>({
    color: "",
    icon: ICON_NAMES.DEFAULT,
    mood: "",
  });
  const createMarker = () => {
    console.log("marker created");
  };

  const resetForm = () => {
    setFormState(FORM_STATES.CHOOSE_COLOR);
  };
  //Handle Changes from subforms to the Forms Data
  const handleChange = (e: any) => {
    let { value, name } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  //Specifically to easily interface with react-colorful component TODO: (could be cleaner)
  const handleColorChange = (color: string) => {
    setData((prev) => {
      return {
        ...prev,
        color: color,
      };
    });
  };
  //Used to check if data is valid before move to next page
  const verifyData = (state: FORM_STATES) => {
    switch (state) {
      case FORM_STATES.CHOOSE_COLOR:
        return data.color.length > 1 ? true : false;
      case FORM_STATES.CHOOSE_ICON:
        return data.icon != ICON_NAMES.DEFAULT ? true : false;
      case FORM_STATES.CHOOSE_MOOD:
        return data.mood.length > 0 && data.mood != MOODS[0] ? true : false;
    }
  };

  //displays next page when the "continue button is shown"
  const handleSubmit: MouseEventHandler = () => {
    if (verifyData(formState)) {
      setFormState((state) => state + 1);
    } else {
      alert("You must select an option to continue");
    }
  };

  // useEffect(() => {
  //   console.log(data);
  //   console.log(formState);
  // }, [data, formState]);

  const diplayData: any = {
    [FORM_STATES.CHOOSE_COLOR]: {
      subform: <ColorForm handleChange={handleColorChange} />,
      title: (
        <>
          Select a <span className="form__header__title--highlight">color</span>
        </>
      ),
      prompt: " What color best describes how you feel at the moment?",
    },
    [FORM_STATES.CHOOSE_ICON]: {
      subform: <IconForm handleChange={handleChange} data={data} />,
      title: (
        <>
          Select an <span className="form__header__title--highlight">icon</span>
        </>
      ),
      prompt: " Which icon best matches how you currently feel?",
    },
    [FORM_STATES.CHOOSE_MOOD]: {
      subform: <MoodForm handleChange={handleChange} data={data} />,
      title: (
        <>
          Select a <span className="form__header__title--highlight">mood</span>
        </>
      ),
      prompt: "Which of these words best describes how you currently feel?",
    },
    [FORM_STATES.VERIFY]: {
      subform: (
        <ConFirmMarker
          data={data}
          createMarker={createMarker}
          resetForm={resetForm}
        />
      ),
      title: (
        <>
          verify your
          <span className="form__header__title--highlight"> marker</span>
        </>
      ),
      prompt:
        "Your almost done! You can create this marker or choose to restart.",
    },
  };

  const DisplayIcon = ICONS[data.icon].component;

  return (
    <div className="form leaflet-control">
      <div className="form__header">
        <h1 className="form__header__title">{diplayData[formState].title}</h1>
        <button className="form__header__button" onClick={closeForm}>
          <CloseButton style={{ height: "100%" }} />
        </button>
      </div>
      <h2 className="form__prompt">{diplayData[formState].prompt}</h2>
      {diplayData[formState].subform}

      <div className="form__footer">
        {formState !== FORM_STATES.VERIFY && (
          <>
            <DisplayIcon fill={data.color} width="30px" />
            <button className="form__footer__button" onClick={handleSubmit}>
              Continue
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Form;

// const CurrentSubform = (state: formStates) => {
//   switch (state) {
//     case formStates.CHOOSE_COLOR:
//       return <ColorForm handleChange={handleColorChange} />;
//     case formStates.CHOOSE_ICON:
//       return <IconForm handleChange={handleChange} data={data} />;
//     case formStates.CHOOSE_MOOD:
//       return <MoodForm handleChange={handleChange} data={data} />;
//     case formStates.VERIFY:
//       return (
//         <ConFirmMarker
//           data={data}
//           createMarker={createMarker}
//           resetForm={resetForm}
//         />
//       );
//   }
// };
