import React, { useEffect, useState } from "react";
import ServiceData from "./ServiceData";
import { format } from "date-fns";

import MyModal from "./MyModal";
import Modal from "./Modal";
import { useQuery } from "react-query";
import Loader from "../../Loader";

const Services = ({ selected, setSelected }) => {
  

//   const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

//     console.log(treatment)
//   const {data:services=[]}=useQuery({
//       queryKey:['me'],
//       queryFn:()=>  fetch('http://localhost:4000/appoint')
//       .then(res=>res.json())
//   })
const data = format(selected, "PP");
const date = format(selected, "PP");

  // console.log("smair", data);

  const {data:services=[],refetch,isLoading} = useQuery({
    queryKey: ["appointments",date],
    queryFn: () =>
      fetch(`http://localhost:4000/appoint?date=${date}`)
      .then((res) => res.json()),
  });

//   useEffect(() => {
//     fetch("http://localhost:4000/appoint")
//       .then((res) => res.json())
//       .then((data) => {
//         setServices(data);
//       });
//   }, []);

if(isLoading){
  return <Loader></Loader>
}

  return (
    <section className="mt-20">
      <div className="flex flex-col text-center">
        <h2 className="text-2xl text-primary">
          Avilable Services on September {format(selected, "PP")}{" "}
        </h2>
        <p className="mt-1 text-lg">Please select a service .</p>
      </div>

      <div className="mb-10 mt-20 gap-7 grid md:grid-cols-3 lg:grid-cols-3 grid-cols-1">
        {services.map((sir) => (
          <ServiceData
            key={sir._id}
            sir={sir}
            setTreatment={setTreatment}
            treatment={treatment}
          ></ServiceData>
        ))}
      </div>
      {/* 
    {
        treatment &&
        <MyModal treatment={treatment}
        setTreatment={setTreatment}
        >

        </MyModal>
    } */}

      {treatment && (
        <Modal treatment={treatment} data={data} 
        selected={selected}
        refetch={refetch}
        ></Modal>
      )}
    </section>
  );
};

export default Services;
