import React, { useState } from 'react';

const useInputChange = (defaultValue) => {
    const [value, setValue] = useState(defaultValue);

    const handleOnchange = (e) => {
        setValue(e.target.value);
    }

    return [value, handleOnchange];

};

export default useInputChange;