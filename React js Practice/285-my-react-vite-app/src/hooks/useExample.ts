import { useState, useEffect } from 'react';

const useExample = (initialValue: any) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        // Logic to run on component mount or value change
        console.log('Value changed:', value);
    }, [value]);

    const updateValue = (newValue: any) => {
        setValue(newValue);
    };

    return { value, updateValue };
};

export default useExample;