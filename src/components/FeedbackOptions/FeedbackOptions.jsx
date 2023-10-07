export const FeedbackOptions = ({ options, leaveFeedback }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={leaveFeedback}
        >
          {option}
        </button>
      ))}
    </>
  );
};
