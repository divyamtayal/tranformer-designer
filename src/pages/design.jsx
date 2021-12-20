import React, { useState } from "react";
import SmoothScroll from "smooth-scroll";
import "../App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Design = () => {
  const [parameters, setParameters] = useState({
    typeOfTf: "Distribution",
    tfRating: null,
    pVoltage: null,
    sVoltage: null,
    coreType: "Core Type",
    frequency: 50,
    fluxDensity: null,
    valueOfK: null,
    phases: 1,
    typeOfSteel: "CRGO",
    windowFactor: null,
    currentDensity: 2.3,
  });
  const [showCalculations, setShowCalculations] = useState(false);
  const [calculations, setCalculations] = useState({});
  const [showOverall, setShowOverall] = useState(false);
  const [error, setError] = useState(false);
  const onChange = (e) => {
    setParameters({ ...parameters, [e.target.name]: e.target.value });
  };

  const selectValues = (
    typeOfSteel,
    typeOfTf,
    phases,
    coreType,
    tfRating,
    pVoltage,
    sVoltage
  ) => {
    let k = null;
    console.log(phases);
    if (+phases === 1) coreType === "core" ? (k = 0.8) : (k = 1.1);
    else
      coreType === "shell"
        ? (k = 1.3)
        : typeOfTf === "distribution"
        ? (k = 0.45)
        : (k = 0.65);

    let fluxD = null;
    if (typeOfSteel === "HRSS")
      typeOfTf === "power" ? (fluxD = 1.3) : (fluxD = 1.2);
    else tfRating >= 400 ? (fluxD = 1.7) : (fluxD = 1.6);

    let windowFactor = null;
    const v = Math.max(+pVoltage, +sVoltage) / 1000;
    let f = null;
    if (v < 50) f = 8;
    else if (v > 50 && v < 200) f = 10;
    else f = 12;
    windowFactor = (f / (30 + v)).toFixed(3);
    setParameters({
      ...parameters,
      valueOfK: k,
      fluxDensity: fluxD,
      windowFactor: windowFactor,
    });
  };

  const calculate = (
    phases,
    valueOfK,
    tfRating,
    frequency,
    fluxDensity,
    windowFactor,
    currentDensity,
    coreType
  ) => {
    // Core Design
    const voltagePerTurn = valueOfK * Math.sqrt(tfRating);
    const flux = voltagePerTurn / (4.44 * frequency);
    const netIronArea = flux / fluxDensity;

    // Using 2-stepped Cruciform
    const d = Math.sqrt(netIronArea / 0.56);
    const a = 0.85 * d;
    const b = 0.53 * d;

    // Window Dimensions
    let outputFactor = 2.22;
    if (phases === 3) outputFactor = 3.33;
    const windowArea =
      tfRating /
      (outputFactor *
        frequency *
        fluxDensity *
        windowFactor *
        currentDensity *
        netIronArea *
        Math.pow(10, 3));
    const hWRatio = 2.5;
    const windowWidth = Math.sqrt(windowArea / hWRatio);
    const windowHeight = windowWidth * hWRatio;

    // Distance between Adjacent limbs
    const D = d + windowWidth;

    // Yoke Design
    const areaYokeLimbRatio = 1.2;
    const yokeFluxDensity = fluxDensity / areaYokeLimbRatio;
    const netAreaOfYoke = areaYokeLimbRatio * netIronArea;
    const grossAreaOfYoke = netAreaOfYoke / 0.9;

    let yokeDepth = a;
    if (+phases === 1 && coreType === "shell") yokeDepth = b;
    const yokeHeight = grossAreaOfYoke / yokeDepth;

    // Overall Dimensions
    let frameHeight = null;
    if (+phases === 1) {
      if (coreType === "core") frameHeight = windowHeight + 2 * yokeHeight;
      else frameHeight = windowHeight + 2 * a;
    } else {
      frameHeight = windowHeight + 2 * yokeHeight;
    }
    let frameWidth = null;
    if (+phases === 1) {
      if (coreType === "core") frameWidth = D + a;
      else frameWidth = 2 * windowWidth + 4 * a;
    } else {
      frameWidth = 2 * D + a;
    }
    const frameDepth = a;
    console.log({ D, a, b, frameWidth });

    const calculations = {
      windowArea,
      windowHeight,
      windowWidth,
      netAreaOfYoke,
      grossAreaOfYoke,
      yokeHeight,
      yokeDepth,
      frameHeight,
      frameWidth,
      frameDepth,
    };
    setCalculations(calculations);
  };

  const onChangeShowOverall = () => {
    const {
      typeOfTf,
      tfRating,
      pVoltage,
      sVoltage,
      coreType,
      phases,
      typeOfSteel,
    } = parameters;
    if (
      !typeOfTf ||
      !tfRating ||
      !pVoltage ||
      !sVoltage ||
      !coreType ||
      !typeOfSteel
    ) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    selectValues(
      typeOfSteel,
      typeOfTf,
      phases,
      coreType,
      tfRating,
      pVoltage,
      sVoltage
    );
    setShowCalculations(false);
    setCalculations({});
    setShowOverall(true);
  };

  const onCalculations = () => {
    const {
      tfRating,
      frequency,
      valueOfK,
      fluxDensity,
      windowFactor,
      currentDensity,
      phases,
      coreType,
    } = parameters;
    calculate(
      phases,
      valueOfK,
      tfRating,
      frequency,
      fluxDensity,
      windowFactor,
      currentDensity,
      coreType
    );
    setShowCalculations(true);
  };
  return (
    <div id="design" className="container">
      <h1> Design Your Own Transformer</h1>
      <h3>
        Please provide the details of Transformer in order to get best results.
      </h3>
      <div className="container">
        <form>
          <div className="col-3 col-sm-6">
            <label for="exampleInputEmail1" className="form-label">
              Type of Transformer
            </label>
            <input
              type="text"
              className="form-control"
              onChange={onChange}
              name="typeOfTf"
              required
            />
          </div>
          <div className="col-3 col-sm-6">
            <label for="exampleInputEmail1" className="form-label">
              No of Phases
            </label>
            <input
              type="number"
              max={3}
              min={1}
              className="form-control"
              onChange={onChange}
              name="phases"
              required
            />
          </div>
          <div className="col-3 col-sm-6">
            <label for="exampleInputEmail1" className="form-label">
              Tranformer Rating (KV)
            </label>
            <input
              onChange={onChange}
              name="tfRating"
              type="number"
              className="form-control"
              required
            />
          </div>
          <div className="col-3 col-sm-6">
            <label for="exampleInputEmail1" className="form-label">
              Primary Voltage (V)
            </label>
            <input
              onChange={onChange}
              name="pVoltage"
              type="number"
              className="form-control"
              required
            />
          </div>
          <div className="col-3 col-sm-6">
            <label for="exampleInputEmail1" className="form-label">
              Secondary Voltage (V)
            </label>
            <input
              onChange={onChange}
              name="sVoltage"
              type="number"
              className="form-control"
              required
            />
          </div>
          <div className="col-3 col-sm-6">
            <label for="exampleInputEmail1" className="form-label">
              Type of Core
            </label>
            <input
              onChange={onChange}
              name="coreType"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="col-3 col-sm-6">
            <label for="exampleInputEmail1" className="form-label">
              Type of Steel
            </label>
            <input
              onChange={onChange}
              name="typeOfSteel"
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="col-sm-12">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => onChangeShowOverall()}
            >
              Submit
            </button>
            {error ? (
              <div style={{ color: "red" }}>
                Please Fill all the parameters.
              </div>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
      {showOverall ? (
        <div className="text-center design-parameter">
          <h3>Overall Parameters of Tranformer</h3>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">
              Type Of Transformer - {parameters.typeOfTf}
            </li>
            <li class="list-group-item">No of Phases - {parameters.phases}</li>
            <li class="list-group-item">
              Transformer Ratings (KV) - {parameters.tfRating}
            </li>
            <li class="list-group-item">
              Primary Voltage (V) - {parameters.pVoltage}
            </li>
            <li class="list-group-item">
              Secondary Voltage (V) - {parameters.sVoltage}
            </li>
            <li class="list-group-item">
              Type of Core - {parameters.coreType}
            </li>
            <li class="list-group-item">Value of K - {parameters.valueOfK}</li>
            <li class="list-group-item">
              Frequency (Hz) - {parameters.frequency}
            </li>
            <li class="list-group-item">
              Flux Density Bm (wb/m^2) - {parameters.fluxDensity}
            </li>
            <li class="list-group-item">
              Type Of Steel Used - {parameters.typeOfSteel}
            </li>
            <li class="list-group-item">
              Window Factor (Kw) - {parameters.windowFactor}
            </li>
            <li class="list-group-item">
              Current Density (A/mm^2) - {parameters.currentDensity}
            </li>
          </ul>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => onCalculations()}
          >
            Calculate
          </button>
        </div>
      ) : (
        ""
      )}
      {showCalculations ? (
        <React.Fragment>
          <div className="text-center design-parameter">
            <h3>Window Dimentions</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Net Area of Window (mm^2) -{" "}
                {(calculations.windowArea * Math.pow(10, 6)).toExponential(2)}
              </li>
              <li class="list-group-item">
                Height of Window (mm) -{" "}
                {(calculations.windowHeight * Math.pow(10, 3)).toFixed(2)}
              </li>
              <li class="list-group-item">
                Width of Window (mm) -{" "}
                {(calculations.windowWidth * Math.pow(10, 3)).toFixed(2)}
              </li>
            </ul>
          </div>
          <div className="text-center design-parameter">
            <h3>Yoke Dimentions</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Net Area of Yoke (mm^2) -{" "}
                {(calculations.netAreaOfYoke * Math.pow(10, 3)).toExponential(
                  2
                )}
              </li>
              <li class="list-group-item">
                Gross Area of Yoke (mm^2) -{" "}
                {(calculations.grossAreaOfYoke * Math.pow(10, 3)).toExponential(
                  2
                )}
              </li>
              <li class="list-group-item">
                Height of Yoke (mm) -{" "}
                {(calculations.yokeHeight * Math.pow(10, 3)).toFixed(2)}
              </li>
              <li class="list-group-item">
                Depth of Yoke (mm) -{" "}
                {(calculations.yokeDepth * Math.pow(10, 3)).toFixed(2)}
              </li>
            </ul>
          </div>
          <div className="text-center design-parameter">
            <h3>Overall Frame Dimentions</h3>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                Height of Frame (mm) -{" "}
                {(calculations.frameHeight * Math.pow(10, 3)).toFixed(2)}
              </li>
              <li class="list-group-item">
                Width of Frame (mm) -{" "}
                {(calculations.frameWidth * Math.pow(10, 3)).toFixed(2)}
              </li>
              <li class="list-group-item">
                Depth of Frame (mm) -{" "}
                {(calculations.frameDepth * Math.pow(10, 3)).toFixed(2)}
              </li>
            </ul>
          </div>
        </React.Fragment>
      ) : (
        ""
      )}
    </div>
  );
};

export default Design;
