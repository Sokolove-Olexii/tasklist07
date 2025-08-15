import React, { Component } from "react";
import styled from "styled-components";

const TaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin: 20px auto;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const AddBtn = styled.button`
  display: flex;
  width: 180px;
  height: 30px;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border: none;
`;

const TaskUl = styled.ul`
  list-style: none;
`;

const TaskLi = styled.li`
  display: flex;
  margin: 8px;
`;

const RemoveBtn = styled.button`
  display: flex;
  margin-left: 15px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  border: none;
`;

class TaskList extends Component {
  static tasks = [
    { id: 1, text: "Вивчити React" },
    { id: 2, text: "Виконати завдання" },
    { id: 3, text: "Відпочити" },
  ];

  addTask = () => {
    const text = prompt("Введіть текст завдання:");
    if (text && text.trim() !== "") {
      TaskList.tasks.push({
        id: Date.now(),
        text,
      });
      this.forceUpdate();
    }
  };

  deleteTask = (id) => {
    TaskList.tasks = TaskList.tasks.filter((task) => task.id !== id);
    this.forceUpdate();
  };

  render() {
    return (
      <TaskContainer className="task-list">
        <AddBtn className="add-btn" onClick={this.addTask}>
          Додати завдання
        </AddBtn>

        <TaskUl>
          {TaskList.tasks.map((task) => (
            <TaskLi key={task.id} className="task-item">
              <span>{task.text}</span>
              <RemoveBtn
                className="delete-btn"
                onClick={() => this.deleteTask(task.id)}
              >
                Видалити
              </RemoveBtn>
            </TaskLi>
          ))}
        </TaskUl>
      </TaskContainer>
    );
  }
}

export default TaskList;
