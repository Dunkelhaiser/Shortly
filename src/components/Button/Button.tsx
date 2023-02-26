import ButtonStyles from "./Button.module.scss";

interface Props {
    type: "button" | "submit" | "reset";
    label: string;
    color?: "primary" | "secondary";
}

const Button: React.FC<Props> = ({ type, label, color = "primary" }) => {
    return (
        <button type={type} className={`${ButtonStyles.button} ${ButtonStyles[color]}`}>
            {label}
        </button>
    );
};
export default Button;
