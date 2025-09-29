import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const updateTask = (index) => {
    const updated = prompt("Edit your task", tasks[index]);
    if (updated !== null && updated.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[index] = updated;
      setTasks(updatedTasks);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Get Things Done !</h2>
      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="What is the task today?"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addButton}>
          Add Task
        </button>
      </div>
      <div style={styles.taskList}>
        {tasks.map((t, index) => (
          <div key={index} style={styles.taskItem}>
            <span>{t}</span>
            <div>
              <button onClick={() => updateTask(index)} style={styles.iconButton}>
                ✏️
              </button>
              <button onClick={() => deleteTask(index)} style={styles.iconButton}>
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#0f172a",
    borderRadius: "10px",
    color: "#fff",
    fontFamily: "Segoe UI, sans-serif",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  inputContainer: {
    display: "flex",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px 0 0 5px",
    backgroundColor: "#1e293b",
    color: "white",
  },
  addButton: {
    padding: "10px 15px",
    fontSize: "16px",
    backgroundColor: "#840d3fff",
    border: "none",
    color: "#fff",
    borderRadius: "0 5px 5px 0",
    cursor: "pointer",
  },
  taskList: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  taskItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e21111ff",
    padding: "10px 15px",
    borderRadius: "5px",
  },
  iconButton: {
    background: "none",
    border: "none",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    marginLeft: "10px",
  },
};

export default App;
