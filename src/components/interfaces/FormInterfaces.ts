import * as Yup from 'yup';

export interface FormProps {
    fields: FormField[];
    onSubmit: (values: Record<string, string>) => void;
    columns?: string;
    validationSchema?: Yup.ObjectSchema<any>;
    initialValues?: Record<string, string>;
}

export interface FormField {
    name: string;
    type: string;
    label: string;
}

