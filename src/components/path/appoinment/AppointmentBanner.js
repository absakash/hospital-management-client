
import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png"
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const  AppointmentBanner = ({selected,setSelected}) => {
  // const [selected, setSelected] = useState(new Date());
  return (
    <header className="py-20 mt-20 mb-10"
    
    style={
        {
            background:`url(${bg})`
        }
    }
    
    >
      <div className="hero  flex ">
        <div className="hero-content flex-col lg:flex-row-reverse mr-10 mx-10">
          <img
            src={chair}
            className="sm:w-3/4 md:1/2 lg:w-1/2 rounded-2xl"
            alt="dentist-chair"
          />
          <div className="mr-20">
            <DayPicker
              mode="single"
              selected={selected}
              onSelect={setSelected}
            ></DayPicker>

            <p className="py-10 text-primary text-2xl">You picked {format(selected, "PP")}.</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
