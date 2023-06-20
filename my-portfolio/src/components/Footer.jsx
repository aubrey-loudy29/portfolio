import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div id='footer' className='bg-white bg-opacity-50'>
            <div className='flex justify-center'>
                <img id='footer-logo' className='centered' src={logo} alt='logo' />
            </div>
        </div>
    )
}

export default Footer