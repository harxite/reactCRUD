import { useNavigate, useParams } from "react-router-dom";
import { GetCarById } from "../services";
import { UpdateCar } from "../services";
import { useEffect, useState } from "react";

const CarUpdate = () => {
  const { id } = useParams();

  const car = GetCarById(id);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    model: "",
  });

  useEffect(() => {
    const car = GetCarById(Number(id));
    if (car) {
      setFormData({ name: car.name, model: car.model });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateCar(Number(id), formData);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Name:</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
      />
      <label htmlFor="">Model :</label>
      <input
        type="text"
        name="model"
        id="model"
        value={formData.model}
        onChange={handleChange}
      />
      <button type="submit">Guncelle</button>
    </form>
  );
};

export default CarUpdate;
