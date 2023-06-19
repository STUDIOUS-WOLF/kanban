import React from "react";
import Task from "../Task/Task";
import "./TaskContainer.css";
import AddIcon from "../../icons/add-square.svg";
function TaskContainer(props) {
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const [formData, setFormData] = React.useState({
    title: "",
    description: "",
    lable: "",
  });
  const [containerName,setContainerName]=React.useState('')
  const [taskArray, setTaskArray] = React.useState([]);
  React.useEffect(() => {
    console.log(buttonClicked);
  }, [buttonClicked]);
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handleChangeName(event) {
    setContainerName(event.target.value);
  }
  function handleSubmitName(event){
    event.preventDefault()
    setContainerName(event.target.value)
    props.addTaskContainer(containerName);

  }

  function handleSubmit(event) {
    event.preventDefault();
    setTaskArray([...taskArray, <Task {...formData} />]);
    setButtonClicked(false);
    setFormData({ title: "", description: "", lable: "" });
  }
  function addTask() {
    setButtonClicked(true);
  }
  function handleClick() {
    console.log("this was called");
    props.addTaskContainer();
    setButtonClicked(false);
  }
  return (
    <div className="taskContainer">
      <div className="taskContainerHeader">
        <div className="taskContainerLeft">
          <div className="title">
            <div className="dotIcon"></div>
            <span className="taskContainerName">To DO</span>
            <div className="badge">{taskArray.length|| '0'}</div>
          </div>
        </div>
        <div className="taskContainerRight">
          <img className="image" src={AddIcon} onClick={handleClick} />
        </div>
      </div>
      {taskArray}
      {!buttonClicked ? (
        <button onClick={addTask}>add Task</button>
      ) : (
        <form>
          <input
            placeholder="Enter Lable"
            type="text"
            name="lable"
            value={formData.value}
            onChange={handleChange}
          />
          <input
            placeholder="Enter Title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <input
            placeholder="Enter Description"
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
          <input type="submit" placeholder="Save" onClick={handleSubmit} />
        </form>
      )}
    </div>
  );
}

export default TaskContainer;


