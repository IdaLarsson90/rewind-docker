
import './Hero.scss'
import dice from '../../assets/dice.avif'

const Hero = () =>{

    return(
        <section className='hero'> 
          <img className='hero__pic' src={dice} alt="" />
          <section className='hero__container'>
            <section className='box'>
              <h2>Let's roll</h2>
              <h3>Håll koll på matchresultaten mellan dig och dina vänner tillsammans med <span>Rewind</span>.</h3>
            </section>
          </section>
        </section>
    )
}

export default Hero;