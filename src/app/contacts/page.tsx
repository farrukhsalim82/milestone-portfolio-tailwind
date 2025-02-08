import { Header } from "../components/header";
import Footer from "../components/footer";

export default function Projects() {
  return (
    <div>
      <Header />
      <section className="proj px-4 py-8 max-w-5xl mx-auto">
        <p className="other-particulars text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Email: <a href="mailto:farrukh.salim82@gmail.com" className="text-blue-500 hover:underline">farrukh.salim82@gmail.com</a>
        </p>
        <p className="other-particulars text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Phone: 92-300-3636697
        </p>
        <p className="other-particulars text-lg sm:text-xl md:text-2xl lg:text-3xl">
          LinkedIn: <a href="https://www.linkedin.com/in/farrukh-salim-834209106/" 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="text-blue-500 hover:underline">
            farrukh-salim-834209106
          </a>
        </p>
      </section>
      <Footer />
    </div>
  );
}