import { useState } from "react";

function EventClick() {
  const [number, setNumber] = useState(0);

  const tambahHandler = () => {
    let jumlah = number + 1;
    if (jumlah <= 10) {
      setNumber(jumlah);
    } else {
      alert("Number must be between 0 and 10");
    }
  };

// Non readable
//   const tambahHandler = () => number + 1 <= 10 ? setNumber(number +1) : alert("Number must be between 0 and 10");

//   const kurangHandler = () => number -1 >= -10 ? setNumber(number -1) : alert("Number must be between 0 and -10");
   
  const kurangHandler = () => {
    let selisih = number - 1;
    if (selisih >= -10) {
      setNumber(selisih);
    } else {
      alert("Selisih must be between 0 and -10");
    }
  };

  return (
    <div>
      <h1>{number}</h1>

      <button onClick={tambahHandler}>Tambah</button>
      <button onClick={kurangHandler}>Kurang</button>
    </div>
  );
}

export default EventClick;
