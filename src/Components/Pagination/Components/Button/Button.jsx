import "./styles.scss";

function Button({ index, onClick, isSelected }) {
  return (
    <button
      className={`button-pagination ${isSelected ? "is-selected" : ""}`}
      key={index}
      onClick={onClick}
    >
      {index}
    </button>
  );
}

export default Button;
