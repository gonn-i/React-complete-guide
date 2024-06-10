import { useState } from 'react';
import SideBar from './components/SideBar';
import Intro from './components/Intro';
import AddProject from './components/AddProject';
import SelectedProject from './components/SelecetedProject';

export default function App() {
  // 프로젝트 + 내부 할일을 담을 객체
  const [projectList, setProjectList] = useState({
    selectedProjectId: undefined, // 프로젝트 리스트가 빈 상황
    projects: [],
    tasks: [],
  });

  //// Task 관리 함수
  // 1) Task 추가 함수
  function handleAddTask(text) {
    setProjectList((prevTask) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevTask.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevTask,
        tasks: [...prevTask.tasks, newTask],
      };
    });
  }

  // 2) Task 삭제 함수
  function handleDeleteTask(id) {
    setProjectList((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  //// 프로젝리 관리 함수
  // 1) 프로젝트 추가 페이지 보여주는 함수 (Save)
  function handleAddClick() {
    setProjectList((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null, //새로운 프로젝트를 추가한다는 신호
      };
    });
  }
  // 2) Intro 페이지 보여주는 함수 (Cancel)
  function handleCancelAddProject() {
    setProjectList((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined, //Cancel 버튼 누를시
      };
    });
  }

  // 3) 프로젝트 상세 보기 버튼
  function handleSelectProject(id) {
    setProjectList((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id, // 특정 프로젝트를 누른 경우, undefined 에서 -> 누른 놈 id 로 변경
      };
    });
  }

  // 4) 프로젝트 추가 함수
  function handleAddProject(projectData) {
    //프로젝트 추가
    setProjectList((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  // 5) 프로젝트 삭제 함수 (Delete)
  function handleDeleteProject() {
    setProjectList((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId),
      };
    });
  }

  // 프로젝트 상태 관리값에서 id값과 현재 클릭된 프로젝트의 id (projectList.selectedProjectId) 비교해서 같은거 탐색
  const selectedProject = projectList.projects.find((project) => project.id === projectList.selectedProjectId);

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectList.tasks}
    />
  );

  if (projectList.selectedProjectId === null) {
    content = <AddProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectList.selectedProjectId === undefined) {
    content = <Intro handleClick={handleAddClick} />;
  }

  return (
    <main className="flex gap-8 h-screen">
      <SideBar
        onselectProject={handleSelectProject}
        handleClick={handleAddClick}
        projects={projectList.projects}
        selectedProjectId={projectList.selectedProjectId}
      />
      {content}
    </main>
  );
}
