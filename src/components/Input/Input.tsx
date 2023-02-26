import InputStyles from "./Input.module.scss";

interface Props {
    placeholder: string;
    type: string;
    label: string;
    valid: boolean;
    value: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ placeholder, type, label, valid, value, onChange }) => {
    return (
        <div className={InputStyles.input_container}>
            <input
                className={`${InputStyles.input} ${!valid ? InputStyles.error : ""}`}
                placeholder={placeholder}
                type={type}
                aria-label={label}
                value={value}
                onChange={onChange}
            />
            {!valid && <span className={InputStyles.error}>Please add a link</span>}
        </div>
    );
};
export default Input;
