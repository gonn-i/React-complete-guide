import Button from './Button';

export default function SideBar({ handleClick, projects, onselectProject, selectedProjectId }) {
  return (
    <aside className="top-0 left-0 z-40 w-1/3 h-screen md:w-72 ">
      <div className="h-full px-3 py-4 content-normal overflow-y-none bg-gray-800 dark:bg-gray-800">
        <h1 className="my-20  mx-0 text-white text-2xl">YOUR PROJECT</h1>
        <Button onClick={handleClick}>+ Add Project</Button>
        <ul>
          {projects.map((project) => {
            let cssClasses =
              'w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800';
            if (project.id === selectedProjectId) {
              cssClasses += ' bg-stone-800 text-stone-200';
            } else {
              cssClasses += ' text-stone-400';
            }
            return (
              <li key={project.id}>
                <button onClick={() => onselectProject(project.id)} className={cssClasses}>
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
