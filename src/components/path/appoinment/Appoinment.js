import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import Services from './Services';
import MyModal from './MyModal';

const Appoinment = () => {
    const [selected, setSelected] = useState(new Date());
    return (
        <div>
            <AppointmentBanner selected={selected}
            setSelected={setSelected}
            ></AppointmentBanner>

            <Services
            selected={selected}
            setSelected={setSelected}
            >

            </Services> 

            
                {/* <button onClick={()=>window.my_modal_1.showModal()}>modaloo</button> */}
           

            <MyModal></MyModal>
       
        </div>
    );
};

export default Appoinment;