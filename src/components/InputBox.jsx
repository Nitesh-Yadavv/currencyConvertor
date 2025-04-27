import React from "react";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import { useId } from "react";

function InputBox({
    amount,
    label,
    currencyOptions=[],
    onAmountChange,
    onCurrencyChange,
    selectCurrency="usd",
    className = "",
}) {
    
    let inputId = useId();
    let selectId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={inputId}    className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={inputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=>onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p  htmlFor={selectId}   className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    id={selectId}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=>onCurrencyChange(e.target.value)}
                >
                    {currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>)
                    )}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
