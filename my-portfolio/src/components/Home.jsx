import vine from '../assets/vine.png'
import logo from '../assets/logo.png'

const Home = () => {
    return (
        <div id='home' className='bg-white'>
            <div className='logo-box'> 
            <div>
                <img id='vine' className='rotate' src={vine} alt='Rotatevine' />
            </div>
            <div>
                <img id='al-logo' className='al-logo' src={logo} alt='Logo' />
            </div>
            </div>
        </div>
    )
}

export default Home