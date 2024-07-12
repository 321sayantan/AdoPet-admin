/* eslint-disable react/prop-types */
import useInput from "../hooks/use-input";

const SearchBox = ({ placeholder, onSubmit }) => {
  const {
    value,
    valueChangeHandler,
    valueInputBlurHandler,
    isValid,
    hasError,
  } = useInput((value) => value.trim().length >= 2);

  let formIsValid = false;
  if (isValid) {
    formIsValid = true;
  }

  const searchHandler = (event) => {
    event.preventDefault();
    if (hasError) return;
    const searchedVal = value;
    onSubmit(searchedVal);
  };

  const searchBoxClasses = hasError ? "is-invalid" : "";

  return (
    <>
      <form className="form-group search-box" onSubmit={searchHandler}>
        <input
          type="search"
          className={"form-input " + searchBoxClasses}
          onChange={valueChangeHandler}
          onBlur={valueInputBlurHandler}
          placeholder={placeholder}
          value={value}
        />
        <button type="submit" disabled={!formIsValid}>
          <i className="material-icons opacity-10">search</i>
        </button>
      </form>
      {hasError && <p className="invalid-feedback">Improper search value!</p>}
    </>
  );
};

export default SearchBox;
