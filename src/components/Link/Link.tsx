/* eslint-disable jsx-a11y/anchor-is-valid */
import Button from "../Button/Button";
import LinkStyles from "./Link.module.scss";

interface Props {
    originalLink: string;
    shortLink: string;
}

const Link: React.FC<Props> = ({ originalLink, shortLink }) => {
    return (
        <div className={LinkStyles.link}>
            <div className={LinkStyles.links}>
                <a href="#" className={LinkStyles.original} target="_blank" rel="noreferrer noopener">
                    {originalLink}
                </a>
                <a href="#" className={LinkStyles.short} target="_blank" rel="noreferrer noopener">
                    {shortLink}
                </a>
            </div>
            <Button type="button" label="Copy" />
        </div>
    );
};
export default Link;
