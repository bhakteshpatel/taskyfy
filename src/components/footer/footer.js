import "./footer.css"

const Footer = () => {
    return (
        <footer>
            <a href="/">Taskify</a>
            <div>
                <p>Copyright   &copy; {new Date().getFullYear()} <br /></p>
            </div>
        </footer>
    )
}

export default Footer;