import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import notification from "./toast";
import { ToastContainer } from "react-toastify";
import { useTheme } from "./Theme/ThemeContext";
const Contact = () => {
  const { theme } = useTheme();
  const [values, setValues] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      emailjs
        .send(
          "service_9om7xnr",
          "template_j4oxnpx",
          values,
          "0sGY_6AthzL0ACvBx"
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response);
            setValues({
              fullName: "",
              email: "",
              phone: "",
              message: "",
            });
            setStatus("SUCCESS");
            notification("Your message submitted successfully", "success");
            setLoading(false);
          },
          (error) => {
            console.log("FAILED...", error);
            notification(" Please Try Again Mail Send FAILED...", "error");
          }
        );
    }
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 3000);
    }
  }, [status]);

  const handleChange = (e: any) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!values.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!values.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!values.phone.trim()) {
      newErrors.phone = "Phone is required";
      isValid = false;
    }else if (!/^\d{11,15}$/.test(values.phone)) { // Update the regular expression to allow 11 to 15 digits
        newErrors.phone = "Phone is invalid";
        isValid = false;
      
    }

    if (!values.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (    
      <section className="py-5">
        <div className="container px-3">
          {/* <!-- Contact form--> */}
        <div className={`${theme === 'dark' ? 'bg-light' : 'bg-dark'} rounded-4 py-5 px-4 px-md-5`} style={{marginTop:"70px"}}>
            <div className="text-center mb-5">
              <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                <i className="bi bi-envelope"></i>
              </div>
              <h1 className="fw-bolder">Get in touch</h1>
              <p className="lead fw-normal text-muted mb-0">
                Let's work together!
              </p>
            </div>
            <p>{status && renderAlert()}</p>
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <form onSubmit={handleSubmit}>
                  {/* <!-- Name input--> */}
                  <div className="form-floating mb-3">
                    <input
                      className={`form-control ${theme === 'dark' ? 'bg-light' : 'bg-dark'}`}
                      id="name"
                      value={values.fullName}
                      onChange={handleChange}
                      name="fullName"
                      type="text"
                      placeholder="Enter your name..."
                    />
                    {errors.fullName && <div className="text-danger">{errors.fullName}</div>}{" "}
                    {/* Display error message */}
                    <label htmlFor="name">Full name</label>
                  </div>
                  {/* <!-- Email address input--> */}
                  <div className="form-floating mb-3">
                    <input
                    className={`form-control ${theme === 'dark' ? 'bg-light' : 'bg-dark'}`}
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                    />
                    {errors.email && <div  className="text-danger">{errors.email}</div>}{" "}
                    {/* Display error message */}
                    <label htmlFor="email" >Email address</label>
                  </div>
                  {/* <!-- Phone number input--> */}
                  <div className="form-floating mb-3">
                    <input
                      className={`form-control ${theme === 'dark' ? 'bg-light' : 'bg-dark'}`}
                      id="phone"
                      type="tel"
                      value={values.phone}
                      onChange={handleChange}
                      name="phone"
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && <div  className="text-danger">{errors.phone}</div>}{" "}
                    {/* Display error message */}
                    <label htmlFor="phone">Phone number</label>
                  </div>
                  {/* <!-- Message input--> */}
                  <div className="form-floating mb-3">
                    <textarea
                      className={`form-control ${theme === 'dark' ? 'bg-light' : 'bg-dark'}`}
                      id="message"
                      value={values.message}
                      onChange={handleChange}
                      name="message"
                      placeholder="Enter your message here..."
                    ></textarea>
                    {errors.message && <div  className="text-danger">{errors.message}</div>}{" "}
                    {/* Display error message */}
                    <label htmlFor="message">Message</label>
                  </div>
                  {/* <!-- Submit Button--> */}
                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-lg"
                      id="submitButton"
                      type="submit"
                    >
                     {!loading ? "Submit" : "Please wait"}
                    </button>
                  </div>
                </form>
                {/* Display success message */}
                {status === "SUCCESS" && (
                  <div  className="text-success">Your message submitted successfully</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

const renderAlert = () => <ToastContainer />;
export default Contact;
