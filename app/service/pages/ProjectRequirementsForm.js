import React, { useState } from "react";
import axios from 'axios'; // Ensure Axios is imported

const ProjectRequirementsForm = ({ setShowForm }) => {
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    phone: "",
    contactMethod: "",
    description: "",
    services: [],
    pdfFile: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "services") {
      setFormData((prevData) => ({
        ...prevData,
        services: checked
          ? [...prevData.services, value]
          : prevData.services.filter((service) => service !== value),
      }));
    } else if (type === "file" && name === "pdfFile") {
      setFormData((prevData) => ({
        ...prevData,
        pdfFile: e.target.files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const submitData = new FormData();
    submitData.append("email", formData.email);
    submitData.append("companyName", formData.companyName);
    submitData.append("phone", formData.phone);
    submitData.append("contactMethod", formData.contactMethod);
    submitData.append("description", formData.description);
    submitData.append("services", formData.services.join(", ")); // Combine services into a single string

    // Ensure PDF file is selected and append it directly
    if (formData.pdfFile) {
      submitData.append("pdfFile", formData.pdfFile); // Directly append the file (no base64 conversion)
    } else {
      alert("Please upload a PDF file.");
      return;
    }

    try {
      // Send data to the API
      const response = await axios.post(
        "/api/submit-form.js",
        submitData, 
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the correct content type for file uploads
          },
        }
      );

      if (response.data.result === 'success') {
        alert("Form submitted successfully!");
        setFormData({
          email: "",
          companyName: "",
          phone: "",
          contactMethod: "",
          description: "",
          services: [],
          pdfFile: null,
        });
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      if (error.response) {
        console.error("API Error:", error.response.data);
        alert(`API Error: ${error.response.data.message || "An error occurred. Please try again."}`);
      } else if (error.request) {
        console.error("No response received:", error.request);
        alert("No response received from the server.");
      } else {
        console.error("Error setting up request:", error.message);
        alert("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="bg-transparent backdrop-blur-sm p-6 rounded-lg shadow-lg w-full max-w-2xl mx-auto text-white overflow-y-auto max-h-[70vh]">
      <h2 className="text-center text-2xl font-semibold mb-4">Project Requirements Form</h2>
      <p className="text-center text-sm mb-4">Please fill out the form with your project details. We will get in touch with you soon.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Company Name</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-transparent text-white border-white"
            required
          />
        </div>
        <div>
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-transparent text-white border-white"
            required
          />
        </div>
        <div>
          <label className="block">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-transparent text-white border-white"
            required
          />
        </div>
        <div>
          <label className="block">Preferred Contact Method</label>
          <div className="flex items-center mt-1 space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="Phone"
                onChange={handleChange}
                className="form-radio"
                required
              />
              <span className="ml-2">Phone</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="contactMethod"
                value="Email"
                onChange={handleChange}
                className="form-radio"
                required
              />
              <span className="ml-2">Email</span>
            </label>
          </div>
        </div>
        <div>
          <label className="block">Project Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-transparent text-white border-white"
            required
          />
        </div>
        <div>
          <label className="block">Select Services</label>
          <div className="flex flex-col space-y-2 mt-2">
            {['AI Services', 'Web Development', 'App Development', 'Cloud Services'].map(service => (
              <label className="inline-flex items-center" key={service}>
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">{service}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block">Upload Project PDF</label>
          <input
            type="file"
            name="pdfFile"
            accept=".pdf"
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-md bg-transparent text-white border-white"
            required
          />
        </div>
        <div className="text-center mt-4">
          <button
            type="submit"
            className="s-btn border-2 border-gray-500 mt-4 px-6 py-2 bg-tranparant/50 text-white rounded-md focus:outline-none hover:bg-gray-400 hover:text-black"
          >
            SUBMIT DETAILS
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectRequirementsForm;
