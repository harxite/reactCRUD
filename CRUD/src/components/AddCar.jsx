import Car from "../models/Car";
import { AddCar } from "../services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CarAdd = () => {
  const [formData, setFormData] = useState({
    name: "",
    model: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    AddCar(formData);
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          value={formData.name}
        />
        <label htmlFor="model">Model</label>
        <input
          type="text"
          name="model"
          id="model"
          onChange={handleChange}
          value={formData.model}
        />
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default CarAdd;
