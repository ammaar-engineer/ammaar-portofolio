import Navbar from "@/components/navbar";
import Hero from "@/sections/hero/page";
import Knowledge from "@/sections/knowledge/page";
import Projects from "@/sections/projects/page";
import Experience from "@/sections/experience/page";
import Profile from "@/sections/profile/page";

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
