import { useEffect, useState } from "react";
import Slider from "./slider";

const SliderWithInputs = ({ sliderValue, setSliderValue }) => {
  const [minValue, setMinValue] = useState(sliderValue[0]);
  const [maxValue, setMaxValue] = useState(sliderValue[1]);

  useEffect(() => {
    setSliderValue([minValue, maxValue]);
  }, [minValue, maxValue, setSliderValue]);

  const handleMinInputChange = (event) => {
    const newMinValue = parseInt(event.target.value, 10);
    if (newMinValue >= 0 && newMinValue <= maxValue) {
      setMinValue(newMinValue);
    }
  };

  const handleMaxInputChange = (event) => {
    const newMaxValue = parseInt(event.target.value, 10);
    if (newMaxValue >= minValue && newMaxValue <= 300000) {
      setMaxValue(newMaxValue);
    }
  };

  const handleSliderChange = (values) => {
    const [newMinValue, newMaxValue] = values;
    setMinValue(newMinValue);
    setMaxValue(newMaxValue);
  };

  return (
    <div className="flex  flex-wrap  lg:gap-2 items-center justify-center">
      <div>
        <input
          className="rounded-full border text-sm font-normal border-gray-400 w-20 pl-5 h-9"
          type="number"
          value={minValue}
          min={0}
          step={500}
          aria-owns=""
          max={maxValue}
          onChange={handleMinInputChange}
        />
      </div>
      <div>
        <Slider
          min={0}
          max={300000}
          step={500}
          value={[minValue, maxValue]}
          onValueChange={handleSliderChange}
          className="w-32 lg:w-48 h-1 rounded-full bg-black mx-4 cursor-grab"
        />
      </div>

      <div>
        <input
          className="rounded-full border text-sm font-normal border-gray-400 w-20 pl-5 h-9"
          type="number"
          value={maxValue}
          step={500}
          min={minValue}
          max={300000}
          onChange={handleMaxInputChange}
        />
      </div>
    </div>
  );
};

export default SliderWithInputs;
