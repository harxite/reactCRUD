import CarsList from "../services";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CarList = () => {
  const [carsList, setCarsLists] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fillList();
  }, []);

  const fillList = () => {
    setCarsLists(CarsList);
  };

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Model</th>
            <th>Isim</th>
            <th>Islem</th>
          </tr>
        </thead>
        <tbody>
          {carsList.map((car) => (
            <tr key={car.id}>
              <td>{car.model}</td>
              <td>{car.name}</td>
              <td>
                <button
                  onClick={() => {
                    navigate(`/update/${car.id}`);
                  }}
                >
                  Duzenle
                </button>
                <button onClick={() => {}}> Sil </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={() => {
          navigate("/add");
        }}
      >
        Ekle
      </button>
    </div>
  );
};

export default CarList;
