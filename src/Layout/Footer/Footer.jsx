import { FaFacebook, FaTwitterSquare, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/Image/nav_logo.png'
const Footer = () => {
    return (
        <footer className="footer bg-base-200 dark:border-t-2 dark:bg-black text-neutral-content p-10">
        <aside>
          <img className='h-20 w-20' src={logo} alt="" />
          <p className='text-black dark:text-white '>
          Online Tutor Booking Platform
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <h6 className='text-black font-bold dark:text-white '>Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a href='https://x.com/?lang=en'>
            <FaTwitterSquare className='text-blue-400' size={30}/>
            </a>
            <a href='https://www.facebook.com/'>
              <FaFacebook className='text-blue-700' size={30}/>
            </a>
            <a href='https://www.youtube.com/'>
              <FaYoutube className='text-red-600' size={30}/>
            </a>
          </div>
        </nav>
      </footer>
    );
};

export default Footer;