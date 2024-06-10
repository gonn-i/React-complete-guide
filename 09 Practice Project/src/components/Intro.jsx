import No_Project from '../assets/no-projects.png';
import Button from './Button';

export default function Intro({ handleClick }) {
  return (
    <section className="mt-24 text-center w-2/3 mx-auto ">
      <img src={No_Project} className="w-20 h-20 mx-auto object-contain"></img>
      <p className="my-5 text-zinc-800 text-3xl font-bold">No Project Selected</p>
      <p className="my-5 text-gray-500 text-xl font-extralight">Select a project or get started with a new one</p>
      <p>
        <Button onClick={handleClick}>Create new project</Button>
      </p>
    </section>
  );
}
