// import PropTypes from "prop-types";
import css from "./statistics.module.css";

export const Statistics = ({
    good,
    neutral,
    bad
}) => {
    return (
        <div className={css.statistics}>
            <h2 className={css.header}>Statistics</h2>
            <ul>
                <li>Good: <span className={css.number}>{ good }</span></li>
                <li>Neutral: <span className={css.number}>{ neutral }</span></li>
                <li>Bad: <span className={css.number}>{ bad }</span></li>
            </ul>
        </div>
    )
}