import './styles.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';


function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-icons">
                <a href="https://www.youtube.com/channel/UCYnS7pxwA-io-jWU78z1eVQ" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://www.linkedin.com/in/wanderson-a-timoteo/" target="_new">
                    <LinkedinIcon />
                </a>
                <a href="https://www.instagram.com/wanderson_a_timoteo/" target="_new">
                    <InstagramIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;