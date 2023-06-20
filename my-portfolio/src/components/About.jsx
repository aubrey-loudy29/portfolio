import profile from '../assets/profile.jpeg'
import floral1 from '../assets/floral1.png'
import floral2 from '../assets/floral2.png'

const About = () => {
    return (
        <div id='about' className='bg-green text-beige'>
            <p>
                <img id='about-floral' src={floral2} alt='floral' />
                <span id='about-title'> Hello! </span>
                <img id='about-floral' src={floral1} alt='floral' />
            </p>
            <p> My name is Aubrey Loudenslager and I'm a full-stack software engineer.</p>
            <img id='about-image' src={profile} alt='portrait'/>
            <p className='text-transparent'>this is a filler</p>
        </div>
    )
}

export default About