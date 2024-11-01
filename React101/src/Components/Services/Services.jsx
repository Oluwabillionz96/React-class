import Card from "./Card/Card"
import Axios from 'axios'
import { useState, useEffect } from "react"
import './services.css'
import { Link } from "react-router-dom"

const Services = () => {
  const [services, setServices] = useState([]);

    const fetchServices = async () => {
    try {
      const response = await Axios({
        method: 'get',
        url: 'http://localhost:8000/services',
      });

      // console.log('the fetch services data', response.data);
      setServices(response.data);

    } catch (error) {
      console.error('this is fetch services error >>>', error)
    }
  }

    useEffect(() => {
      fetchServices();
    }, []);
    useEffect(() => {
      console.log("the fetch services data", services);
    }, [services]);

  return (
    <section className="serve">
      <div className="services">
        {services &&
          services?.map((service) => (
            <Link to={`/services/${service?.name}`}>
              <Card
                title={service?.name}
                img={service?.image}
                desc={service?.desc}
              />
            </Link>
          ))}
      </div>
    </section>
  );
}

export default Services