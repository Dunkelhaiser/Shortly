/* eslint-disable jsx-a11y/anchor-is-valid */
import CardStyles from "./Card.module.scss";

interface Props {
    title: string;
    text: string;
    icon: string;
}

const Card: React.FC<Props> = ({ title, text, icon }) => {
    return (
        <div className={CardStyles.card}>
            <div className={CardStyles.icon}>
                <img src={icon} alt="Stat Icon" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default Card;
