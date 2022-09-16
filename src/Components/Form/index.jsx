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
    const messages = {};

    if(!values.userEmail.includes('@')){
        messages.userEmail = 'Please, insert a valid email';
    } if (values.userName.length <= 1) {
        messages.userName = 'This field is required'
    } if (values.userEmail.includes('@') &&  values.userName.length >= 1){
        messages.userOk = `Thank you for subscribing, ${values.userName}!`

    }
    return messages;
}

const Form = () => {
    const [messages, setmessages] = useState({});


    const formik = useFormik({
        initialValues: {
                userName: '',
                userEmail: ''
        }
    });


  return (
    <form onSubmit={(event) => {
        event.preventDefault()
        setmessages(validate(formik.values))
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
              {messages.userName && <span className="text-xs text-red-500 absolute mt-1">{messages.userName}</span>} 
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
              {messages.userEmail && <span className="text-xs text-red-500 absolute mt-1">{messages.userEmail}</span>}
          </div>
      </div>
      <Button text={'Subscribe!'} />
      {messages.userOk && <span className="text-xs text-secondary mt-1 absolute block">{messages.userOk}</span>}
    </form>
  );
};

export default Form;
