import { useState } from 'react'

export const useForm = (initiaState = {}) => {

    const [values, setValues] = useState(initiaState);

    const reset = () => {
        setValues(initiaState);
    }

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    }

    return [values, handleInputChange, reset];

}