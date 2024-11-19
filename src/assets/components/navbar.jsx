import { useState, useEffect } from 'react';
import logo from '../kick a flick.png';
import { Link } from 'react-router-dom';

function Navbar() {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div 
            className={`flex border space-x-10 items-center p-1 ${scrolling ? 'bg-gray-800' : 'bg-gray-900'}  top-0 left-0 w-full z-10 transition-all duration-300`}
        >
            <img className='cursor-pointer w-16 ml-8' src={logo} alt="Logo" />
            
            <Link className='text-blue-500 text-lg font-semibold' to="/">Movies</Link>
            <Link className='text-blue-500 text-lg font-semibold' to="/watchlist">WatchList</Link>
        </div>
    );
}

export default Navbar;