import React, { useState, useCallback, useEffect } from 'react';
import SelectButton from '../components/SelectButton';


const initialSelectedDays = new Array(7).fill(false);
initialSelectedDays[0] = true;


const useWeekdaySelect = () => {

    const [buttons, setButtons] = useState([]);
    const [selectedDays, setSelectedDays] = useState(initialSelectedDays);

    const createSelectButtons = useCallback((day, index) => {
        return (
            <SelectButton
                label={day}
                selected={selectedDays[index]}
                id={index}
                key={index}
                onPress={(id) => {
                    if (!(selectedDays[id] && selectedDays.filter(selected => selected).length === 1)) {
                        const newSelectedDays = [...selectedDays];
                        newSelectedDays[id] = newSelectedDays[id] ? false : true;
                        setSelectedDays([...newSelectedDays]);
                    }
                }}
            />
        );
    }, [selectedDays]);


    useEffect(() => {
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const newButtons = weekdays.map(createSelectButtons);
        setButtons(newButtons);

    }, []);



    return { buttons, selectedDays };
};

export default useWeekdaySelect;