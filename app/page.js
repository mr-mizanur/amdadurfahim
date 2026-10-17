import Loader from "@/components/Loader";
import ScrollTop from "@/components/ScrollTop";
import MobileNav from "@/components/MobileNav";
import Rail from "@/components/Rail";
import Topbar from "@/components/Topbar";
import Hero from "@/components/Hero";
import { Profile, Experience, Competencies, Approach, Skills, Contact } from "@/components/Sections";
import { profile } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Loader />
      <ScrollTop />
      <MobileNav />
      <div className="shell">
        <Rail />
        <main className="main">
          <Topbar />
          <Hero />
          <Profile />
          <Experience />
          <Competencies />
          <Approach />
          <Skills />
          <Contact />
          <footer className="footer">
            <p>
              © {new Date().getFullYear()} {profile.name}. {profile.role}, {profile.company}.
            </p>
            <p>
              Developed by{" "}
              <a href="https://mizanurdev.com" target="_blank" rel="noreferrer">
                mizanurdev.com
              </a>
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
