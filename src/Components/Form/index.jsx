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

const Form = () => {
    const formik = useFormik({
        initialValues: {
                userName: 'nome',
                userEmail: '123'
        }
    });


  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        console.log(formik.values)
    }} 
        className="w-full">
      <div className="mb-2">
          <label
            htmlFor="userName"
            className="text-sm font-bold text-gray-700 mb-2"
          >
            Name:
          </label>
          <input
            className="text-sm w-full mb-4 pl-2 py-2 rounded border shadow focus:outline-none hover:border-hover"
            type="text"
            placeholder="Enter your name"
            name="userName"
            id="userName"
            value={formik.values.userName}
            onChange={formik.handleChange}
          />
          <label
            htmlFor="userEmail"
            className="text-sm font-bold text-gray-700 mb-2"
          >
            Email:
          </label>
          <input
            className="text-sm w-full mb-4 pl-2 py-2 rounded border shadow focus:outline-none hover:border-hover"
            type="email"
            placeholder="email@example.com"
            name="userEmail"
            id="userEmail"
            value={formik.values.userEmail}
            onChange={formik.handleChange}
          />
      </div>
      <Button />
    </form>
  );
};

export default Form;
