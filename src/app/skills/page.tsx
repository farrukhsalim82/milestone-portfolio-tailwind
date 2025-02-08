import { Header } from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import html from "../images/html.jpg";
import next from "../images/next.jpg";
import tail from "../images/tail.jpg";
import type from "../images/ts.jpg";
import css from "../images/css.jpg";

export default function Skills() {
  return (
    <div>
      <Header />
      <div className="skills2">
        <div className="skills-top text-center py-10">
          <h1 className="abt-me text-4xl font-bold">Skills</h1>
        </div>
        <div className="skills-bottom">
          <div className="skills-bottom-top grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-6">
            <div className="skill1 text-center">
              <Image className="html mx-auto" src={html} alt="HTML 5 logo" />
              <p className="mt-2 text-lg font-semibold">HTML 5</p>
            </div>
            <div className="skill2 text-center">
              <Image className="css mx-auto" src={css} alt="CSS 3 logo" />
              <p className="mt-2 text-lg font-semibold">CSS 3</p>
            </div>
            <div className="skill3 text-center">
              <Image className="next mx-auto" src={next} alt="Next JS logo" />
              <p className="mt-2 text-lg font-semibold">Next JS</p>
            </div>
            <div className="skill4 text-center">
              <Image className="type mx-auto" src={type} alt="TypeScript logo" />
              <p className="mt-2 text-lg font-semibold">TypeScript</p>
            </div>
            <div className="skill5 text-center">
              <Image className="tail mx-auto" src={tail} alt="Tailwind CSS logo" />
              <p className="mt-2 text-lg font-semibold">Tailwind CSS</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}