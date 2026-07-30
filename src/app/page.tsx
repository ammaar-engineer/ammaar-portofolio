import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Knowledge from "@/components/sections/knowledge";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Profile from "@/components/sections/profile";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section id="home">
          <Hero />
        </section>
        <section id="knowledge">
          <Knowledge />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="profile">
          <Profile />
        </section>
      </main>
    </>
  );
}
