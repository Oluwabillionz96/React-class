import './hero.css'
const Hero = () => {
  return (
      <section className='hero'>
          <div className="css-hero-container">
              <p className='welcome'>Welcome to </p>
              <h1>My Site</h1>
              <div className='btn'>
                  <button>Download CV</button>
                  <button>Hire Me</button>
              </div>
          </div>
    </section>
  )
}

export default Hero