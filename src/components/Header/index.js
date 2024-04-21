import './index.css'
import Vector from '../Images/Vector.jpg'
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { TbShoppingBagMinus } from "react-icons/tb";
import { BsChevronDown } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <GiHamburgerMenu className='haburger-icon'/>
                <img src={Vector} alt='logo' className='logo' />
                <h1 className='logo-title'>LOGO</h1>
                <div className='icons-container'>
                    <CiSearch className='icon' />
                    <CiHeart className='icon' />
                    <TbShoppingBagMinus className='icon' />
                    <CiUser className='icon' />
                    <h1 className='language'> ENG<BsChevronDown className='down-icon' /></h1>

                </div>
            </div>
            <ul className='tab-items'>
                <li className='tab'>SHOP</li>
                <li className='tab'>SKILLS</li>
                <li className='tab'>STORIES</li>
                <li className='tab'>ABOUT</li>
                <li className='tab'>CONTACT US</li>
            </ul>
            <div className='description-card'>
                <h1 className='description-head'>DISCOVER OUR PRODUCTS</h1>
                <p className='description-para'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
            </div>
        </div>
    )
}

export default Header