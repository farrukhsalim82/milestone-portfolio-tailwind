import { Header } from "../components/header";
import Footer from "../components/footer";

export default function About() {
  return (
    <div>
      <Header />
      <div className="ab-me px-4 py-8 md:px-8 lg:px-16">
        <p className="text-base md:text-lg lg:text-xl text-gray-700">
          I am a Front-End Developer. I can develop websites based on your needs and suggestions. I can also create responsive websites from scratch and provide consultation throughout the process.
        </p>
      </div>
      <Footer />
    </div>
  );
}