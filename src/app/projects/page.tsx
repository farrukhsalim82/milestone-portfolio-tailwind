import { Header } from "../components/header";
import Footer from "../components/footer";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="proj max-w-screen-lg mx-auto px-4 py-8">
        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed">
          I can develop websites based on your needs and suggestions. I can
          also develop responsive websites from scratch and consult you during
          the project.
        </p>
      </div>
      <Footer />
    </div>
  );
}