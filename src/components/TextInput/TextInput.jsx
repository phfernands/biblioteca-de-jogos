import PropTypes from "prop-types";

TextInput.propTypes = {
  label: PropTypes.string,
  htmlFor: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

export default function TextInput({ label, id, value, setValue }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}
