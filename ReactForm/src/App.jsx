
import { useState } from "react";
import "./App.css"

function App() {
  const [formData, setFormData] = useState({
    fname: '',
    emailId: '',
    Gender: false,
    Age: '',
    Profession: '',
    Liked: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log(formData)
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked  } = e.target;
    if (type === 'radio') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? value : '',
      }));
    } else {
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }))};
  };

  return (
    <div className="container">
    {!formSubmitted && (
      <form onSubmit={handleSubmit}>

      <div className="input1">
            <label htmlFor="input1">Name : </label>
            <input type="text" id="input1" name="fname" value={formData.fname} onChange={handleInputChange} />
          </div>
  
          <div className="checkBoxes">
              <label > Gender : </label>
            <div className="check1">
              <label htmlFor="c1">Male</label>
              <input type="checkbox" id="c1" name="Gender" value={formData.Gender} onChange={handleInputChange} />
            </div>
            <div className="check2">
              <label htmlFor="c2">Female</label>
              <input type="checkbox" id="c2" name="Gender" value={formData.Gender} onChange={handleInputChange} />
            </div>
          </div>
  
          <div className="dropDown">
              <div className="drop1">
                  <label htmlFor="d1">Age : </label>
                  <select name="Age" id="d1" value={formData.Age} onChange={handleInputChange}>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                  </select>
              </div>
              <div className="drop2">
                  <label htmlFor="d2">Profession : </label>
                  <select name="Profession" id="d2" value={formData.Profession} onChange={handleInputChange}>
                      <option value=""></option>
                      <option value="Doctor">Doctor</option>
                      <option value="Engineer">Engineer</option>
                      <option value="Lawyer">Lawyer</option>
                  </select>
              </div>
          </div>
  
          <div className="input2">
              <label htmlFor="input2">Email : </label>
              <input type="email" id="input2" name="emailId" value={formData.emailId} onChange={handleInputChange}/>
            </div>
  
            <div className="radio">
            <label>Are you interested in the form:</label>
  <input
    type="radio"
    id="radio1"
    name="Liked"
    value="Yes"
    checked={formData.Liked === 'Yes'}
    onChange={handleInputChange}
  />
  <label htmlFor="radio1">Yes</label>

  <input
    type="radio"
    id="radio2"
    name="Liked"
    value="No"
    checked={formData.Liked === 'No'}
    onChange={handleInputChange}
  />
  <label htmlFor="radio2">No</label>
            </div>
  
            <input type="submit" value="Submit" />
      </form>
    )}

{formSubmitted && (
        <div>
          <h2>Submitted Values</h2>
          <p>Name: {formData.fname}</p>
          <p>Email: {formData.emailId}</p>
          <p>Gender: {formData.Gender ? 'Male' : 'Female'}</p>
          <p>Age: {formData.Age}</p>
          <p>Profession: {formData.Profession}</p>
          <p>Liked: {formData.Liked}</p>
        </div>
      )}
    
    </div>
  )
}

export default App
