import Navbar from "@/components/navbar";
import Experience from "@/sections/experience/page";
import Hero from "@/sections/hero/page";
import Knowledge from "@/sections/knowledge/page";
import Profile from "@/sections/profile/page";
import Projects from "@/sections/projects/page";

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
