import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";
export default function TaskForm({ setTasks }) {
  const [taskData, setTaskData] = useState({ task: "", status: "", tags: [] });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filteredTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filteredTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };

  // console.log("Tags Array>>>", taskData.tags);

  // console.log("TaskData", taskData.tags);
  const handleDataChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({ task: "", status: "", tags: [] });
  };

  return (
    <>
      <header className="app_header">
        <form onSubmit={handleSubmit}>
          <input
            name="task"
            type="text"
            value={taskData.task}
            className="task_input"
            placeholder="Enter your task"
            onChange={handleDataChange}
          />
          <div className="task_form_bottom_line">
            <div>
              <Tag
                tag={"HTML"}
                selectTag={selectTag}
                checkedTag={checkTag("HTML")}
              />
              <Tag
                tag={"CSS"}
                selectTag={selectTag}
                checkedTag={checkTag("CSS")}
              />
              <Tag
                tag={"JavaScript"}
                selectTag={selectTag}
                checkedTag={checkTag("JavaScript")}
              />
              <Tag
                tag={"React"}
                selectTag={selectTag}
                checkedTag={checkTag("React")}
              />
            </div>

            <div className="task_status_smallscreen">
              <select
                name="status"
                value={taskData.status}
                className="task_status"
                onChange={handleDataChange}
              >
                <option value="select">Select task status</option>
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
              <button type="submit" className="task_submit">
                +Add task
              </button>
            </div>
          </div>
        </form>
      </header>
    </>
  );
}
