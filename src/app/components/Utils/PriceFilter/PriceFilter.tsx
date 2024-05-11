import { useState } from "react";
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react";
import { MdOutlineCurrencyRupee } from "react-icons/md";

export default function App() {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);
    const [minValue2, setMinValue2] = useState(0);
    const [maxValue2, setMaxValue2] = useState(10000);
    return (
        <div className="priceRange">
            
            <div className="priceRange">
            {/* <MdOutlineCurrencyRupee />  */}
                <span>{minValue}</span>
                <span>{maxValue}</span>
            </div>
            <MultiRangeSlider
                min={0}
                max={20000}
                minValue={0}
                maxValue={20000}
                canMinMaxValueSame={true}
                onInput={(e: ChangeResult) => {
                    setMinValue(e.minValue);
                    setMaxValue(e.maxValue);
                }}
                onChange={(e: ChangeResult) => {
                    setMinValue2(e.minValue);
                    setMaxValue2(e.maxValue);
                }}
                label={false}
                ruler={false}
            />
        </div>
    );
}
