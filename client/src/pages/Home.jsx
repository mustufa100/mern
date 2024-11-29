export const Home = () => {
  return (
   <>
   <main>
    <section className="section-hero">
        <div className="container grid grid-two-cols">
            <div className="hero-content">
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <h1>welcome</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quas fuga reprehenderit nesciunt exercitationem omnis aut magni ipsam porro assumenda nulla rerum, ullam totam ut odio fugiat quae nemo error.</p>
                <div className="btn btn-group">
                    <a href="/contact">
                        <button className="btn">connect now</button>
                    </a>
                    <a href="/service">
                        <button className="btn secondary-btn">learn more</button>
                    </a>
                </div>
            </div>

            <div className="hero-image">
                <img src="/images/avr1.png" alt="" width="400" height="500"/>
            </div>
        </div>
    </section>
   </main>

   <section className="section-analytics">
    <div className="container grid grid-four-cols">
        <div className="div1">
            <h2>50+</h2>
            <p>registered companies</p>
        </div>
        <div className="div1">
            <h2>100,00+</h2>
            <p>Happy Clients</p>
        </div>
        <div className="div1">
            <h2>500+</h2>
            <p>well known developers</p>
        </div>
        <div className="div1">
            <h2>24/7</h2>
            <p>service</p>
        </div>
    </div>

   </section>

   <section className="section-hero">
        <div className="container grid grid-two-cols">
        <div className="hero-image">
                <img src="/images/avr1.png" alt="" width="400" height="500"/>
            </div>
            <div className="hero-content">
                <p>Lorem ipsum, dolor sit amet consectetur</p>
                <h1>welcome</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quas fuga reprehenderit nesciunt exercitationem omnis aut magni ipsam porro assumenda nulla rerum, ullam totam ut odio fugiat quae nemo error.</p>
                <div className="btn btn-group">
                    <a href="/contact">
                        <button className="btn">connect now</button>
                    </a>
                    <a href="/service">
                        <button className="btn secondary-btn">learn more</button>
                    </a>
                </div>
            </div>
        </div>
    </section>
   </>
  )
}
