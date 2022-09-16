import React, { useState } from "react";
import Button from "../Button";

function useFormik({
    initialValues
}) {
    const [ values, setValues] = useState(initialValues)

    function handleChange(event) {
        const fieldName = event.target.getAttribute('name');
        const value = event.target.value;
        setValues({
            ...values,
            [fieldName]: value,
        })
    }

    return {
        values,
        handleChange
    }
}

function validate(values) {
    const errors = {};

    if(!values.userEmail.includes('@')){
        errors.userEmail = 'Please, insert a valid email';
    } if (values.userName.length <= 1) {
        errors.userName = 'This field is required'
    }
    return errors;
}

const Form = () => {
    const [errors, setErrors] = useState({});


    const formik = useFormik({
        initialValues: {
                userName: '',
                userEmail: ''
        }
    });


  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        setErrors(validate(formik.values))
        console.log(formik.values)
    }} 
        className="w-full">
      <div className="mb-10">
          <div className="mb-5">
              <label
                htmlFor="userName"
                className="text-sm font-bold text-gray-700 mb-2"
              >
                Name:
              </label>
              <input
                className="text-sm w-full pl-2 py-2 rounded border shadow focus:outline-none hover:border-hover block"
                type="text"
                placeholder="Enter your name"
                name="userName"
                id="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
              />
              {errors.userName && <span className="text-xs text-red-500 absolute mt-1">{errors.userName}</span>} 
          </div>
          <div className="mb-5">
              <label
                htmlFor="userEmail"
                className="text-sm font-bold text-gray-700 mb-2"
              >
                Email:
              </label>
              <input
                className="text-sm w-full pl-2 py-2 rounded border shadow focus:outline-none hover:border-hover block"
                type="text"
                placeholder="email@example.com"
                name="userEmail"
                id="userEmail"
                value={formik.values.userEmail}
                onChange={formik.handleChange}
              />
              {errors.userEmail && <span className="text-xs text-red-500 absolute mt-1">{errors.userEmail}</span>}
          </div>
      </div>
      <Button text={'Subscribe!'} />
    </form>
  );
};

export default Form;
