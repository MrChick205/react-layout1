import React, { useState } from 'react';

const MenuForm = () => {
  const [order, setOrder] = useState({});
  const [total, setTotal] = useState(0);

  const menuItems = [
    { name: 'Pizza', price: 100 },
    { name: 'Burger', price: 50 },
    { name: 'Pasta', price: 80 },
    { name: 'Salad', price: 30 },
  ];

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: checked,
    }));
  };

  const calculateTotal = () => {
    let sum = 0;
    for (const item of menuItems) {
      if (order[item.name]) {
        sum += item.price;
      }
    }
    setTotal(sum);
  };

  return (
    <div>
      <h1>Menu</h1>
      <form>
        {menuItems.map((item) => (
          <div key={item.name}>
            <label>
              <input
                type="checkbox"
                name={item.name}
                checked={order[item.name] || false}
                onChange={handleChange}
              />
              {item.name} - {item.price} VNĐ
            </label>
          </div>
        ))}
        <button type="button" onClick={calculateTotal}>
          Tính tổng
        </button>
      </form>
      <h2>Tổng tiền: {total} VNĐ</h2>
    </div>
  );
};

export default MenuForm;