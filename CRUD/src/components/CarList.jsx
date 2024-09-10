import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteCar, AddCar, CarsList as InitialCarsList } from "../services"; // CarsList'i farklı bir isimle al

const CarList = () => {
  const [carsList, setCarsLists] = useState([]); // Başlangıçta boş bir liste
  const navigate = useNavigate();

  useEffect(() => {
    fillList();
  }, []);

  // Listeyi başlatmak için fillList fonksiyonunu kullanıyoruz
  const fillList = () => {
    setCarsLists([...InitialCarsList]); // CarsList'in bir kopyasını state'e ata
  };

  // Silme işlemi
  const handleDelete = (id) => {
    DeleteCar(id); // Silme işlemini gerçekleştir
    setCarsLists([...InitialCarsList]); // CarsList'in güncellenmiş halini state'e tekrar ata
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
                <button onClick={() => handleDelete(car.id)}> Sil </button>
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
