import React, { useState } from 'react';

const MyForm = () => {
  const [it, setIt] = useState('');
  const [english, setEnglish] = useState('');
  const [average, setAverage] = useState(null);
  const [xl, setXL] = useState('');
  const calculate = (e) => {
    e.preventDefault();
    const itScore = parseFloat(it);
    const englishScore = parseFloat(english);
    const avg = (itScore + englishScore) / 2;
    setAverage(avg);
    if (avg >= 10) {
      setXL('Xuất sắc');
    } else if (avg >= 8) {
      setXL('Giỏi');
    } else if (avg >= 7) {
      setXL('Khá');
    } else if (avg >= 6) {
      setXL('Trung bình');
    } else {
      setXL('Yếu');
    }
    // alert(`Điểm: ${avg}, xl: ${xl}`);
  };
  return (
    <div>
      <h1>Điểm trung bình: {average !== null ? average : 'Chưa tính toán'}</h1>
      <h2>Xếp loại: {xl}</h2>
      <form onSubmit={calculate}>
        <div>
          <label>
            IT:
            <input
              type="number"
              value={it}
              onChange={(e) => setIt(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            English:
            <input
              type="number"
              value={english}
              onChange={(e) => setEnglish(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Tính toán</button>
      </form>
    </div>
  );
};

export default MyForm;