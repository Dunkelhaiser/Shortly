/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from "../../images/logo.svg";
import FooterStyles from "./Footer.module.scss";
import iconFacebook from "../../images/icon-facebook.svg";
import iconTwitter from "../../images/icon-twitter.svg";
import iconPinterest from "../../images/icon-pinterest.svg";

const Footer: React.FC = () => {
    return (
        <footer className={FooterStyles.footer}>
            <a href="#">
                <img src={Logo} alt="Logo" className={FooterStyles.logo} />
            </a>

            <div className={FooterStyles.list}>
                <div className={FooterStyles.links}>
                    <h4>Features</h4>
                    <ul>
                        <li>
                            <a href="#">Link Shortening</a>
                        </li>
                        <li>
                            <a href="#">Branded Links</a>
                        </li>
                        <li>
                            <a href="#">Analytics</a>
                        </li>
                    </ul>
                </div>
                <div className={FooterStyles.links}>
                    <h4>Resources</h4>
                    <ul>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Developers</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                </div>
                <div className={FooterStyles.links}>
                    <h4>Company</h4>
                    <ul>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Our Team</a>
                        </li>
                        <li>
                            <a href="#">Careers</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={FooterStyles.icon_list}>
                <a href="#">
                    <img src={iconFacebook} alt="Facebook" />
                </a>
                <a href="#">
                    <img src={iconTwitter} alt="Twitter" />
                </a>
                <a href="#">
                    <img src={iconPinterest} alt="Pinterest" />
                </a>
            </div>
        </footer>
    );
};
export default Footer;
