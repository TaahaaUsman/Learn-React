import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import currency_generator from './assets/currencyGenerator';
import Inputbox from './Inputbox';

function App() {
  let [amount, setAmount] = useState(0);
  let [from, setFrom] = useState('usd');
  let [to, setTo] = useState('pkr');
  let [convertAmount, setConvertAmount] = useState(0);
  const currncyInfo = currency_generator(from);

  const options = Object.keys(currncyInfo);

  function swap (){
    setFrom(to);
    setTo(from);
  }
function convert (){
  setConvertAmount(amount * currncyInfo[to]);
}


return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://t3.ftcdn.net/jpg/04/34/58/54/240_F_434585463_zpdtTpTEbqQFfsp6RVEW6IIxEM9dHf86.jpg')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                          label="From"
                          amount= {amount}
                          currencyOption= {options}
                          onCurrencyChange = {(currency) => {setAmount(amount)}}
                          selectCurrency = {from}
                          
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                          
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amount= {convert}
                          currencyOption= {options}
                          onCurrencyChange = {(currency) => {setTo(amount)}}
                          selectCurrency = {from}
                           
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from.toUpperCase()} to {to.toUpperCase()}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
