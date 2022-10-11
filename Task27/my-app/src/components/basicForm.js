import {Formik, Form, Field, ErrorMessage} from 'formik' ;
import React from "react";
import './Form.css'
import * as Yup from "yup";
import {useFormik} from 'formik';


const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});


const ValidateForm = () => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                description: '',
                wantGetUpdatesByEmail: true
            }}
            validationSchema={SignupSchema}
            onSubmit={values => alert(JSON.stringify(values, null, 2))}

        >
            {({errors, touched, values}) => {
                console.log(values, errors, touched)
                return (<Form>
                        <p>FirstName</p>
                        <Field name="firstName"/>
                        {errors.firstName && touched.firstName ? (
                            <div>{errors.firstName}</div>
                        ) : null}
                        <p>LastName</p>
                        <Field name="lastName"/>
                        {errors.lastName && touched.lastName ? (
                            <div>{errors.lastName}</div>
                        ) : null}
                        <p>Email</p>
                        <Field name="email" type="email"/>
                        {errors.email && touched.email ? <div>{errors.email}</div> : null}
                        <p>Description</p>
                        <Field name="description" type="Description"/>

                        <div className="checkBox">
                            <label>
                                Confirm sending your email
                                <Field
                                    name="wantGetUpdatesByEmail"
                                    type="radio"
                                    value="true"
                                ></Field>
                            </label>
                            <label>
                                Do not send letter
                                <Field
                                    name="wantGetUpdatesByEmail"
                                    type="radio"
                                    value="false"
                                ></Field>
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </Form>
                )
            }}
        </Formik>
    );
}

export default ValidateForm;

// const BasicForm = () => {
//
//     const formik = useFormik({
//         initialValues: {
//             firstName: '',
//             lastName: '',
//             email: '',
//             description: '',
//             wantGetUpdatesByEmail: true
//         },
//
//         onSubmit: values => {
//             alert(JSON.stringify(values, null, 2));
//         },
//     });
//     return (
//
//         <form onSubmit={formik.handleSubmit}>
//             <label htmlFor="firstName">First Name*</label>
//             <input
//                 id="firstName"
//                 name="firstName"
//                 type="text"
//                 placeholder="Enter your name"
//                 onChange={formik.handleChange}
//                 value={formik.values.firstName}
//             />
//
//             <label htmlFor="lastName">Last Name*</label>
//             <input
//                 id="lastName"
//                 name="lastName"
//                 type="text"
//                 placeholder="Enter your last name"
//                 onChange={formik.handleChange}
//                 value={formik.values.lastName}
//             />
//
//             <label htmlFor="email">Email*</label>
//             <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 placeholder="Enter your email"
//                 onChange={formik.handleChange}
//                 value={formik.values.email}
//             />
//             <label htmlFor="Description">Description</label>
//             <input className="comment"
//                    id="Description"
//                    name="Description"
//                    type="text"
//                    onChange={formik.handleChange}
//                    value={formik.values.firstName}
//             />
//             <div className="checkBox">
//                 <label>
//                     <input   type="radio" checked name="dva"/>
//                     Confirm sending your email
//                 </label>
//                 <label>
//                     <input type="radio" name="dva"/>
//                     Do not send letter
//                 </label>
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     );
// };
// export default BasicForm;
