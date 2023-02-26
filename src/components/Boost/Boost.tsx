/* eslint-disable jsx-a11y/anchor-is-valid */
import BoostStyles from "./Boost.module.scss";
import Layout from "../Layout/Layout";

const Boost: React.FC = () => {
    return (
        <Layout className={BoostStyles.boost}>
            <div className={BoostStyles.content}>
                <h2>Boost your links today</h2>
                <a href="#" className="link_btn">
                    Get Started
                </a>
            </div>
        </Layout>
    );
};

export default Boost;
