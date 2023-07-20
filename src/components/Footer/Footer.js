import './Footer.css';
import {useEffect, useState} from "react";

// const Footer = () => {
//
//
// //     const currentYear = new Date().getFullYear();
// //
// //     return (
// //         <footer className="footer fixed-bottom bg-light">
// //             <div className="container text-center">
// //             &copy; {currentYear}:
// //             <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
// //         </div>
// //     </footer>
// //     )
// // }

const divStyle = {
    backgroundColor: '#f2f2f2', // Replace 'blue' with the color you want
    padding: '20px',
    color: 'white',
};


const Footer = () => {
    const [showFooter, setShowFooter] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const bodyHeight = document.body.scrollHeight;

            // Check if the user has scrolled to the bottom of the page
            if (scrollPosition + windowHeight >= bodyHeight) {
                setShowFooter(true);
            } else {
                setShowFooter(false);
            }
        };

        // Add event listener for the scroll event
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className={showFooter ? 'show' : 'hide' } >
            {/* Footer content */}
            <p className="moveIn">&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
    );
};


export default Footer;