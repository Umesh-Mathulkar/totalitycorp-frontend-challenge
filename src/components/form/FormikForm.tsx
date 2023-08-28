import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../ui/Button';
import { FormProps } from '../interfaces/FormInterfaces';



const FormikForm = ({
    fields,
    onSubmit,
    columns = '-1',
    validationSchema,
    initialValues,
}: FormProps) => {
    // Use the passed initialValues or generate default values
    const formInitialValues = initialValues || fields.reduce(
        (acc, field) => ({ ...acc, [field.name]: '' }),
        {}
    );

    // Use the passed validationSchema or generate a default schema
    const formValidationSchema = validationSchema || Yup.object(
        fields.reduce(
            (acc, field) => ({ ...acc, [field.name]: Yup.string().required(`${field.label} is required`) }),
            {}
        )
    );

    // Define the UI classes as constants
    const GRID_CLASS = `grid grid-cols${columns} gap-4`;
    const FIELD_CLASS = `mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500`;
    
    return (
        <Formik
            initialValues={formInitialValues}
            validationSchema={formValidationSchema}
            onSubmit={onSubmit}
            validateOnBlur={false}
            validateOnChange={false}
            
        >
            {({ errors, touched }) => (
                <Form>
                    <div className={GRID_CLASS}>
                        {fields.map((field) => (
                            <div key={field.name}>
                                <label htmlFor={field.name} className="block text-[16px] font-medium text-gray-700">{field.label}</label>
                                <Field  id={field.name} name={field.name} type={field.type} className={FIELD_CLASS} />
                                {touched[field.name as keyof typeof touched] && errors[field.name as keyof typeof touched] && (
                                    <ErrorMessage name={field.name} component="div" className="mt-2 text-sm text-red-600" />
                                )}
                            </div>
                        ))}
                    </div>
                <Button className='mt-4' >Submit</Button>
                </Form>
            )}
        </Formik>
    );
};

export default FormikForm;
