import { useState } from "react";

const DatePicker = () => {
    const [date, setDate] = useState("");

    return (
        <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="date-picker"
        />
    );
};

export default DatePicker;
