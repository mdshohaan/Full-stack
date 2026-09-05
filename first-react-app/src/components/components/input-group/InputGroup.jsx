// InputGroup.jsx

const InputGroup = (props) => {
  const label = props.label;
  const type = props.type;
  //   console.log(props);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        marginBottom: "1rem",
      }}
    >
      <label
        style={{
          fontFamily: "Arial",
          fontSize: "1rem",
          color: "#424242",
          fontWeight: "bold",
        }}
        htmlFor="name"
      >
        {label}
      </label>
      <input
        style={{
          padding: "0.5rem 1rem",
          outline: "none",
          border: "1px solid #ddd",
          borderRadius: "0.15rem",
          fontFamily: "Arial",
          fontSize: "0.9rem",
          color: "#666",
        }}
        type={type}
        id="name"
      />
    </div>
  );
};

export default InputGroup;
