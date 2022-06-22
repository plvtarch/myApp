import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
    const sizeTypes = ['Российский', 'Американский', 'Европейский'];
  const russianSizesTable = ['38', '40', '42', '44', '46'];
  const americanSizesTable = ['0', '2', '4', '6', '8'];
  const euSizesTable = ['XXS', 'XS', 'S', 'M', 'L'];

  const [sizeType, setSizeType] = useState('Российский');
  const [sizeValue, setSizeValue] = useState(0);
  const [sizeTable, setSizeTable] = useState(russianSizesTable);

  const onSizeTypeChange = (e) => {
    setSizeType(e.target.value);
    if (e.target.value === 'Российский') {
      setSizeTable(russianSizesTable);
    }
    else if(e.target.value === 'Европейский')
    {
      setSizeTable(euSizesTable);
    } else {
      setSizeTable(americanSizesTable);
    }
  };

  const onSizeValueChange = (e) => {
    setSizeValue(e.target.value);
  };

  return (
    <>
      <div>
        <select
          style={{ width: '100px', marginRight: '20px' }}
          value={sizeType}
          onChange={onSizeTypeChange}
        >
          {sizeTypes.map((t) => (
            <option value={t}>{t}</option>
          ))}
        </select>
        <label>Тип размера</label>
      </div>
      <div>
        <select
          style={{ width: '100px', marginRight: '20px' }}
          value={sizeTable[sizeValue]}
          onChange={onSizeValueChange}
        >
          {sizeTable.map((s) => (
            <option value={s}>{s}</option>
          ))}
        </select>
        <label>Размер</label>
      </div>
    </>
  );
}

export default App;
