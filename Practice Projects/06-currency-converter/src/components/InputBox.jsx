import {useId} from 'react'
import useCurrencyNames from '../hooks/useCurrencyNames';

function InputBox({
  label,
  amount,
  onAmountchange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "", 
}) {
  const amountInputId = useId();
  const names = useCurrencyNames();  
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex  ${className}`}>
      <div className="w-1/2">
        <label 
        htmlFor={amountInputId}
        className="text-black/40 mb-2 inline-block">{label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountchange && onAmountchange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            names.get(currency) &&
            <option key={currency} value={currency}>
              {names.get(currency)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
