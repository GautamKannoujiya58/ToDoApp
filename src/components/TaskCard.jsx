import DeleteIcon from "../assets/Todo/delete.png";
import Tag from "./Tag";
import "./TaskCard.css";
export default function TaskCard({ titleName, tags, handleDelete, index }) {
  return (
    <>
      <div className="task_card">
        <p className="task_text">{titleName}</p>

        <div className="text_card_bottom_line">
          <div className="task_card_tags">
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag} selected />
            ))}
          </div>
          <div className="task_delete" onClick={() => handleDelete(index)}>
            <img className="delete_icon" src={DeleteIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
