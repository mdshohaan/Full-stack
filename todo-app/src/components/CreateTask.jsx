import { useState } from "react";

const CreateTask = ({ addNewTask }) => {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Type Your Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          if (text) {
            addNewTask(text);
            setText("");
          } else alert("Valid Data");
        }}
      >
        create task
      </button>
    </div>
  );
};

export default CreateTask;
