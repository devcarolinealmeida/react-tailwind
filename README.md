# [Dev Newsletter](https://dev-caroline-react-tailwind.netlify.app/)

:pushpin: A project to study [Tail Wind CSS](https://tailwindcss.com/) (based on an [Alura course](https://cursos.alura.com.br/course/tailwind-css-estilizando-pagina-classes-utilitarias))

> Tailwind CSS is a utility-first CSS framework designed to enable users to create applications faster and easier.

## My challenges: 
- The initial project was to create a form with HTML, using TailWind to manipulate the CSS, but I wanted to do more...
- I chose to create a React app to practice what I have already learned from it.
- After finishing the styles, I applied the validation of the fields with the respective error messages.
- And when the fields are filled in correctly, userName and userEmail are captured as object.

## Screen shots:
<img width="600" src="https://user-images.githubusercontent.com/104517812/190097830-cd819ba2-4df0-42bf-b554-5618d740e65e.png">

![Schermata 2022-09-14 alle 10 06 43](https://user-images.githubusercontent.com/104517812/190097864-f006164f-e8ec-464e-b612-af729e3ac379.png)
![Schermata 2022-09-14 alle 10 08 04](https://user-images.githubusercontent.com/104517812/190098034-25996053-c636-4355-bde1-4abf41fe4d7a.png)

![Schermata 2022-09-14 alle 10 17 08](https://user-images.githubusercontent.com/104517812/190100758-465906eb-2f8c-4abb-8c3d-6edfe7709dc7.png)

## What I've learned:

### 1. Customize the theme
With TailWind, you can customize the theme on your tailwind.config.js file. Thats where you define your project’s color palette, type scale, fonts, breakpoints, border radius values, and more.
```
theme: {
    extend: {
      colors: {
        primary: "#C5DFFF",
        secondary: "#061E3C",
        hover: "#1057B0"
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    }
  }
```

### 2. Utility-first CSS
With Tailwind, you style elements by applying pre-existing classes directly in your HTML, without writing CSS. For example, to create this button I used:

https://user-images.githubusercontent.com/104517812/190109406-918d6b20-5f4f-40f6-a570-cc5800892614.mov

```
const Button = () => {
    return ( 
        <>
            <button className='font-bold text-white bg-secondary w-full py-2 
            rounded-full shadow-2xl hover:bg-hover duration-300' 
            type="submit">Subscribe!</button>
        </>
     );
}
```


### 3. useFormik()
To handle the form I used Formik. It helped me to: Getting values in and out of form state and Validation and error messages.
- We pass our form’s initialValues to the useFormik() hook
```
const formik = useFormik({
        initialValues: {
                userName: '',
                userEmail: ''
        }
    });
```
- The next step is to use the formik object to get the form values in and out of state
```
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
```
- To validate the form, define a validation function that accepts the form values and returns an error object
```
function validate(values) {
    const errors = {};

    if(!values.userEmail.includes('@')){
        errors.userEmail = 'Please, insert a valid email';
    } if (values.userName.length <= 1) {
        errors.userName = 'This field is required'
    }
    return errors;
}
```

### 4. Styling based on parent state (group-{modifier})
When you need to style an element based on the state of some parent element, mark the parent with the group class, and use group-* modifiers like group-hover to style the target element:


https://user-images.githubusercontent.com/104517812/197333558-1309ebdb-9a75-4a10-81a4-d5bc346720a6.mov


# Link
-> [Deploy](https://dev-caroline-react-tailwind.netlify.app/)

