import React, { useState } from "react";

const TestControlled = () => {
 

  const [formData, setFormData] = useState({
    userName: "",
    fullName: "",
    Addressfield: "",
  });
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (event.target.value.length <= 5) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
      setError("");
    } else {
      setError("input character cannot exceed more than 5");
    }
  };

  return (
    <div>
      <form>
        <p>{formData.userName}</p>
        <label htmlFor="name" className="text-2xl">
          {" "}
          User Name:
        </label>
        <input
          name="userName"
          value={formData.userName}
          id="name"
          type="text"
          className="ml-2 border-2 border-white"
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
        <p>{formData.fullName}</p>
        <label htmlFor="fullname" className="text-2xl">
          {" "}
          Full Name:
        </label>
        <input
          name="fullName"
          value={formData.fullName}
          id="fullname"
          type="text"
          className="ml-2 border-2 border-white"
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
        <p>{formData.Addressfield}</p>
        <label htmlFor="Addressfield" className="text-2xl">
          {" "}
          Address:
        </label>
        <input
          name="Addressfield"
          value={formData.Addressfield}
          id="Addressfield"
          type="text"
          className="ml-2 border-2 border-white"
          onChange={handleChange}
        />
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default TestControlled;

// formik
// React Hook Form
