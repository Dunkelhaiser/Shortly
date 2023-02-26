import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Link from "../Link/Link";
import ShortenStyles from "./Shorten.module.scss";

const Shorten = () => {
    const [valid, setValid] = useState(true);

    return (
        <div className={ShortenStyles.shorten}>
            <form
                className={ShortenStyles.form}
                onSubmit={(e) => {
                    e.preventDefault();
                    setValid(false);
                }}
            >
                <Input placeholder="Shorten a link here..." type="text" label="Shorten input" valid={valid} />

                <Button type="submit" label="Shorten It!" />
            </form>

            <section className={ShortenStyles.links}>
                <Link originalLink="https://www.youtube.com/watch?v=l6dCMV-le_E" shortLink="https://www.bit.ly/das12qw" />
            </section>
        </div>
    );
};
export default Shorten;
