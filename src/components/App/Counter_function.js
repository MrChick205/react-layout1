import React, { useState } from 'react';

export function Counter_function() {
    const [count, setCount] = useState(0);
    console.log("Tính toán...");
    return (
        <div>
            <h1>Giá Trị: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Tăng</button>
            <button onClick={() => setCount(count - 1)}>Giảm</button>
        </div>
    );
}