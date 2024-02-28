import ExampleClientComponent from "../../../components/ExampleClientComponent";
import LanguageChanger from "../../../components/LanguageChanger";
import Hero from "./components/Main/Hero/Hero";
import WhatWeDo from "./components/Main/WhatWeDo/WhatWeDo";
import Projects from "./components/Main/Projects/Projects";
import Reviews from "./components/Main/Reviews/Reviews";

export default async function Home() {
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <Projects />
      {/* <Reviews /> */}
    </div>
  );
}
