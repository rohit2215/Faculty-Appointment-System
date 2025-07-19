import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
const Faculty = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const applyFilter = () => {
    if (speciality) {
      const decodedSpeciality = decodeURIComponent(speciality);
      setFilterDoc(doctors.filter((doc) => doc.speciality === decodedSpeciality));
    } else {
      setFilterDoc(doctors);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div>
      <p className="text-gray-600">
        Browse through the Faculties based on their specialities.
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary" : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>
        <div
          className={`flex flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:block"
          }`}
        >
          <p
            onClick={() =>
              speciality === "Career Counseling Specialist"
                ? navigate("/faculties")
                : navigate(`/faculties/${encodeURIComponent("Career Counseling Specialist")}`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Career Counseling Specialist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Career Counseling Specialist
          </p>
          <p
            onClick={() =>
              speciality === "Mental Health Counselor"
                ? navigate("/faculties")
                : navigate(`/faculties/${encodeURIComponent("Mental Health Counselor")}`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Mental Health Counselor" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Mental Health Counselor
          </p>
          <p
            onClick={() =>
              speciality === "Academic Counselor"
                ? navigate("/faculties")
                : navigate(`/faculties/${encodeURIComponent("Academic Counselor")}`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Academic Counselor" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Academic Counselor
          </p>
          <p
            onClick={() =>
              speciality === "Social and Behavioral Counselor"
                ? navigate("/faculties")
                : navigate(`/faculties/${encodeURIComponent("Social and Behavioral Counselor")}`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Social and Behavioral Counselor" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Social and Behavioral Counselor
          </p>
          <p
            onClick={() =>
              speciality === "Substance Abuse Counselor"
                ? navigate("/faculties")
                : navigate(`/faculties/${encodeURIComponent("Substance Abuse Counselor")}`)
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Substance Abuse Counselor" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Substance Abuse Counselor
          </p>
          {/* <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/faculties'):navigate('/faculties/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}>Diversity and Inclusion Counselor</p>  */}
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transation-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div
                  className={`flex items-center gap-2 text-sm text-center ${
                    item.available ? "text-green-500" : "text-gray-500"
                  } `}
                >
                  <p
                    className={`w-2 h-2 ${
                      item.available ? "bg-green-500" : "bg-gray-500"
                    } rounded-full`}
                  ></p>
                  <p>{item.available ? "Available" : "Not Available"}</p>
                </div>
                <p className="text-gray-900 text-lg front-medium">
                  {item.name}
                </p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
