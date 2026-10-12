    import Reveal from "./Reveal";
    import floyd from "../../../shared/assets/floyd.png";

    export default function FloydBanner() {
    return (
        <section className="fb">
        <Reveal>
            <div className="fb-grid">
            <div className="fb-photo">
                <img src={floyd} alt="Floyd furniture" loading="lazy" />
            </div>
            <div className="fb-panel">
                <p className="fb-logo">
                feather <span>×</span> FLOYD
                </p>
                <h2 className="fb-heading">Floyd Furniture Meets Feather Flexibility</h2>
                <a href="#" className="fb-btn">Explore Floyd Furniture</a>
            </div>
            </div>
        </Reveal>
        </section>
    );
    }