import { useAuth } from "../store/auth";

export const Service = () => {
  const { services } = useAuth();

  // Check if services is defined and is an array before using map
  if (!Array.isArray(services)) {
    return <div>Loading services...</div>; // You can replace this with a spinner or message
  }
  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>
        <div className="container grid grid-three-cols">
          {services.map((curElem, index) => {
            const { price, description, provider, service } = curElem;
            return (
              <div className="card" key={index}>
                <div className="card-img">
                  <img src="/images/avr1.png" alt="" width="200" />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{provider}</p>
                    <p>{price}</p>
                  </div>
                  <h2>{service}</h2>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
