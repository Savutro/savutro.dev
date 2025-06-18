import Layout from "@theme/Layout";

import { ProjectData, Showcase } from "../components/showcase/Showcase";
import screen2 from "./assets/qr-aware.png";
import screen1 from "./assets/savutro-dev.png";
import ttgPic from "./assets/ttg.png";

const projects: ProjectData[] = [
  {
    title: "savutro.dev",
    description: "It's this very website you're currently on.",
    url: "https://github.com/savutro/savutro.dev",
    image: screen1,
    role: "Owner / Developer",
  },
  {
    title: "qr-code-awareness",
    description: "A tiny website to teach people about this security issue.",
    url: "https://github.com/savutro/qr-code-awareness",
    image: screen2,
    role: "Owner / Developer",
  },
  {
    title: "ttg - time to go",
    description: "A cli tool to track your time spend on projects.",
    url: "https://github.com/savutro/time-to-go",
    image: ttgPic,
    role: "Owner / Developer",
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