import React, {useState } from 'react'
import "./AboutUs.css"
import axios from "axios"

const AboutUs = () => {

    const [values, setValues] = useState({
        name: "",
        number: "",
        email: "",
        city: "",
        message: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!values.name || !values.number || !values.email || !values.city || !values.message) {
            alert("All fields are required");
            return;
          }
        try {
           const response = await axios.post("https://trade-suhana-backend-page.onrender.com/api/v1/post",
                values)
                    alert(response.data.message)
            setValues({
                name: "",
                number: "",
                email: "",
                city: "",
                message: "",
            })
        }
        catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
          }
    }


    return (
        <div className='aboutus'>
            <div className='aboutus-container'>
                <form onSubmit={handleSubmit}>
                    <h1>Contact Us</h1>
                    <input
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        placeholder='Number'
                        name='number'
                        value={values.number}
                        onChange={handleChange}
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    <input
                        type='text'
                        placeholder='City'
                        name='city'
                        value={values.city}
                        onChange={handleChange}
                    />
                    <textarea
                        placeholder='Message'
                        name='message'
                        value={values.message}
                        onChange={handleChange}
                    />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AboutUs