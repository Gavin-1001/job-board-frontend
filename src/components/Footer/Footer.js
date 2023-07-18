import './Footer.css';

const Footer = () => {


    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>&copy; {currentYear} Your Website. All rights reserved.</p>
        </footer>
    )

}

export default Footer;