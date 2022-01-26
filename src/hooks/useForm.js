import { useState } from "react";

const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target: { name, value } }) => {
        setValues({ ...values, [name]: value })
    }

    return [values, handleInputChange];

};

export default useForm;
