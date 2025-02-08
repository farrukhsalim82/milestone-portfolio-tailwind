import Link from "next/link";
import { Header } from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import html from "../app/images/html.jpg";
import next from "../app/images/next.jpg";
import tail from "../app/images/tail.jpg";
import type from "../app/images/ts.jpg";
import css from "../app/images/css.jpg";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="my-container mx-auto max-w-screen-xl">
        {/* First Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center first">
          <div className="first-left">
            <div className="top-name">
            <h1 className="name text-4xl font-bold text-gray-800">Farrukh Salim</h1>
            </div>
            <h3 className="other-particulars text-xl text-gray-600 mt-2">Front End Developer</h3>
          </div>
          <div className="first-right"></div>
        </div>

        {/* About Me Section */}
        <div className="about-me">
          <div className="about-me-top">
            <h1 className="abt-me text-3xl font-semibold text-gray-800">About Me</h1>
          </div>
          <div className="about-me-bottom ">
            <p className="abt-text text-lg text-gray-600">
              I am a Front End Developer. I can develop the website based on your needs and suggestions. I can also
              develop responsive websites from scratch and consult you during the job.
            </p>
            <div className="btn mt-4">
              <button className="btn-view bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                <Link href={"/about-me"}>View More</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills">
          <div className="skills-top">
            <h1 className="abt-me text-3xl font-semibold text-gray-800">Skills</h1>
          </div>
          <div className="skills-bottom mt-4">
            <div className="skills-bottom-top grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              <div className="skill1 flex flex-col items-center">
                <Image className="html" src={html} alt="HTML 5 logo" width={64} height={64} />
                <p className="color-white mt-2 text-center">HTML 5</p>
              </div>
              <div className="skill2 flex flex-col items-center">
                <Image className="css" src={css} alt="CSS 3 logo" width={64} height={64} />
                <p className="color-white mt-2 text-center">CSS 3</p>
              </div>
              <div className="skill3 flex flex-col items-center">
                <Image className="next" src={next} alt="Next JS logo" width={64} height={64} />
                <p className="color-white mt-2 text-center">Next JS</p>
              </div>
              <div className="skill4 flex flex-col items-center">
                <Image className="type" src={type} alt="TypeScript logo" width={64} height={64} />
                <p className="color-white mt-2 text-center">TypeScript</p>
              </div>
              <div className="skill5 flex flex-col items-center">
                <Image className="tail" src={tail} alt="Tailwind CSS logo" width={64} height={64} />
                <p className="color-white mt-2 text-center">Tailwind CSS</p>
              </div>
            </div>
            <div className="btn mt-4 text-center">
              <button className="btn-view2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                <Link href={"/skills"}>View More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}