import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { IinputProp } from '../interfaces/UiInterfaces';



const Input = ({
    handleChange,
    type,
    value,
    placeholder,
    className,
}
:
IinputProp
) => {
    const validationSchema = Yup.string()
        .required('Value is required')
        .min(3, 'Value must be at least 3 characters');

    const [error, setError] = useState<string | undefined>();

    useEffect(() => {
        try {
            validationSchema.validateSync(value);
            setError(undefined);
        } catch (err) {
            setError((err as Yup.ValidationError).message);
        }
    }, [value]);

    return (
        <div>
            <input
                type={type}
                onChange={handleChange}
                value={value}
                placeholder={placeholder}
                className={`rounded-md p-2 ${className}`}
            />
            {error && <p className="text-red-500">{error}</p>}
        </div>
    );
};

export default Input;
