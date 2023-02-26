import { FormEvent, useEffect, useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Link from "../Link/Link";
import ShortenStyles from "./Shorten.module.scss";

interface LinkType {
    originalUrl: string;
    shortenUrl: string;
}

const Shorten = () => {
    const [valid, setValid] = useState(true);
    const [originalUrl, setOriginalUrl] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const [links, setLinks] = useState<LinkType[]>(JSON.parse(localStorage.getItem("links")!) || []);

    const genereteULR = async (e: FormEvent, url: string) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
            const shortenedUrl = await res.json();
            const link: LinkType = {
                originalUrl: url,
                shortenUrl: shortenedUrl.result.full_short_link2,
            };
            setValid(true);
            setOriginalUrl("");
            setLinks((prev) => [link, ...prev]);
        } catch {
            setValid(false);
        }
    };

    useEffect(() => {
        localStorage.setItem("links", JSON.stringify(links));
    }, [links]);

    return (
        <div className={ShortenStyles.shorten}>
            <form className={ShortenStyles.form} onSubmit={(e) => genereteULR(e, originalUrl)}>
                <Input
                    placeholder="Shorten a link here..."
                    type="text"
                    label="Shorten input"
                    valid={valid}
                    value={originalUrl}
                    onChange={(e: React.FormEvent<HTMLInputElement>) => setOriginalUrl(e.currentTarget.value)}
                />

                <Button type="submit" label="Shorten It!" />
            </form>

            <section className={ShortenStyles.links}>
                {links.map((link) => (
                    <Link originalLink={link.originalUrl} shortLink={link.shortenUrl} key={link.shortenUrl} />
                ))}
            </section>
        </div>
    );
};
export default Shorten;
