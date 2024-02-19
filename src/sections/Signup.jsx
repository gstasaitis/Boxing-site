import { useState } from "react";

const Signup = () => {

  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="signup">
        <div className="heading">
            <h1>Sign up for a free training now!</h1>
        </div>
      <div className="signup-main">
        <div className="signup-form">
              <form onSubmit={handleSubmit}>
            
            <div className="form-labels">
              <label>
                <input
                  type="text"
                  name="name"
                  placeholder="First Name Last Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </label>
              </div>
            <div className="form-button">
              <button className="button-48" type="submit">
                <span>Sign Up!</span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup