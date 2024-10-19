import Layout from "@theme/Layout";

import { ProjectData, Showcase } from "../components/showcase/Showcase";
import image from "./assets/image.png";

const projects: ProjectData[] = [
  {
    title: "TTG - Time-To-Go",
    description: "A time tracker for your projects.",
    url: "https://github.com/savutro/time-to-go",
    image: image,
    role: "Developer",
  },
  {
    title: "Savutro.dev",
    description: "My personal webpage.",
    url: "https://www.meetup.com/GophersSilesia",
    image: image,
    role: "Developer",
  },
];

const title = "Projects";
const description = "Featured projects I was/am involved in.";

export default function ShowcasePage(): JSX.Element {
  return (
    <Layout title={title} description={description}>
      <main className="container container--fluid margin-vert--lg">
        <h1>{title}</h1>
        <p>{description}</p>

        <div className="row">
          {projects.map((project) => (
            <Showcase key={project.title} {...project} />
          ))}
        </div>
      </main>
    </Layout>
  );
}