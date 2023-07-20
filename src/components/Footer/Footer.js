import './Footer.css';

const Footer = () => {


    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer fixed-bottom bg-light">
            <div className="container text-center">
            &copy; {currentYear}:
            <a className="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
    </footer>
    )
}

export default Footer;