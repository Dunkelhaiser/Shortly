/* eslint-disable jsx-a11y/anchor-is-valid */
import HeroStyles from "./Hero.module.scss";
import illustration from "../../images/illustration-working.svg";
import Layout from "../Layout/Layout";

const Hero: React.FC = () => {
    return (
        <Layout className={HeroStyles.hero}>
            <section>
                <h1>More than just shorter links</h1>
                <p>Build your brand&apos;s recognition and get detailed insights on how your links are performing.</p>
                <a href="#" className="link_btn">
                    Get Started
                </a>
            </section>
            <img src={illustration} alt="Working person illustration" />
        </Layout>
    );
};

export default Hero;
