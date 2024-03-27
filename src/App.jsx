/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import {
  addValues,
  countAction,
  multiplyValues,
  resetValues,
  setMessage,
} from "./state/calcul.slice";

function App() {
  const result = useSelector((state) => state.calcul.result);
  const message = useSelector((state) => state.calcul.message);
  const counter = useSelector((state) => state.calcul.counter);
  const dispatch = useDispatch();
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [disableReset, setDisableReset] = useState(true);

  const handleAddition = () => {
    if (value1 && value2) {
      dispatch(addValues({ value1, value2 }));
      dispatch(countAction());
      setDisableReset(false);
      dispatch(setMessage(""));
    } else {
      dispatch(
        setMessage("Veuillez remplir les deux champs avant d'additionner")
      );
    }
  };

  const handleMultiply = () => {
    if (value1 && value2) {
      dispatch(multiplyValues({ value1, value2 }));
      dispatch(countAction());
      setDisableReset(false);
      dispatch(setMessage(""));
    } else {
      dispatch(
        setMessage("Veuillez remplir les deux champs avant de multiplier")
      );
    }
  };

  const handleReset = () => {
    dispatch(resetValues());
    dispatch(countAction());
    setDisableReset(true);
    dispatch(setMessage(""));
  };

  useEffect(() => {
    if (counter >= 10) {
      dispatch(setMessage("Bravo Champion !"));
    }
  }, [counter]);

  return (
    <>
      <div className="input-container">
        <input
          type="number"
          name={"value1"}
          onChange={(e) => setValue1(e.target.value)}
        />
        <input
          type="number"
          name={"value2"}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
      <div className="btn-container">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleMultiply}>*</button>
        <button onClick={handleReset} disabled={disableReset}>
          Reset
        </button>
        <div>Nombre d'action : {counter}</div>
      </div>
      <div className="result"> Résultat : {result}</div>
      <div className="message">Message : {message}</div>
    </>
  );
}

export default App;
