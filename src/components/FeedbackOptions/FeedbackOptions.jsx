import css from "./feedbackOptions.module.css";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.buttonSection}>
            {options.map((buttonName, index) => (
                <button
                    className={css.button}
                    key={index}
                    onClick={() => onLeaveFeedback(buttonName)}
                >
                    {buttonName}
                </button>
            ))}
        </div>
    )
}