import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
export default function TaskColumn({
  titleName,
  img,
  tasks,
  status,
  handleDelete,
}) {
  // console.log(tasks.status);
  return (
    <>
      <section className="task_column">
        <h2 className="task_column_heading">
          <img className="task_column_icon" src={img} alt="" />
          {titleName}
        </h2>
        {/* <TaskCard /> */}
        {tasks.map(
          (task, index) =>
            task.status === status && (
              <TaskCard
                key={index}
                titleName={task.task}
                tags={task.tags}
                handleDelete={handleDelete}
                index={index}
              />
            )
        )}
      </section>
    </>
  );
}
