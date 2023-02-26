/* eslint-disable jsx-a11y/anchor-is-valid */
import StatsStyles from "./Stats.module.scss";
import Layout from "../Layout/Layout";
import Card from "../Card/Card";
import iconRecognition from "../../images/icon-brand-recognition.svg";
import iconRecords from "../../images/icon-detailed-records.svg";
import iconCustomize from "../../images/icon-fully-customizable.svg";

const Stats: React.FC = () => {
    return (
        <Layout className={StatsStyles.stats}>
            <div className={StatsStyles.content}>
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                <section className={StatsStyles.cards_section}>
                    <Card
                        title="Brand Recognition"
                        text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in
                    your content."
                        icon={iconRecognition}
                    />
                    <Card
                        title="Detailed Records"
                        text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
                        icon={iconRecords}
                    />
                    <Card
                        title="Fully Customizable"
                        text="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
                        icon={iconCustomize}
                    />
                </section>
            </div>
        </Layout>
    );
};

export default Stats;
