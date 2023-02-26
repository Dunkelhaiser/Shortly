/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Button from "../Button/Button";
import LinkStyles from "./Link.module.scss";

interface Props {
    originalLink: string;
    shortLink: string;
}

const Link: React.FC<Props> = ({ originalLink, shortLink }) => {
    const [buttonStyle, setButtonStyle] = useState<"primary" | "secondary">("primary");
    const [buttonText, setButtonText] = useState<"Copy" | "Copied">("Copy");

    const copyToClipboard = (str: string) => {
        navigator.clipboard.writeText(str);
        setButtonStyle("secondary");
        setButtonText("Copied");
        setTimeout(() => {
            setButtonStyle("primary");
            setButtonText("Copy");
        }, 3000);
    };

    return (
        <div className={LinkStyles.link}>
            <div className={LinkStyles.links}>
                <a href={originalLink} className={LinkStyles.original} target="_blank" rel="noreferrer noopener">
                    {originalLink}
                </a>
                <a href={shortLink} className={LinkStyles.short} target="_blank" rel="noreferrer noopener">
                    {shortLink}
                </a>
            </div>
            <Button type="button" label={buttonText} color={buttonStyle} onClick={() => copyToClipboard(shortLink)} />
        </div>
    );
};
export default Link;
