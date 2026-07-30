import { Button } from "@/components/ui/button";
import type { SocialLinks } from "@/types";

const socialLinks: SocialLinks = {
  github: "https://github.com/ammaar-engineer",
  threads: "https://threads.net/@ammaar_engineer",
};

export default function Profile() {
  return (
    <section className="w-full px-4 py-20">
      <div className="container mx-auto max-w-6xl space-y-8">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">My Profile</h2>

        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="rounded-none"
            asChild
          >
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="rounded-none gap-2"
            asChild
          >
            <a
              href={socialLinks.threads}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="currentColor"
              >
                <path d="M12.186 3.004c-3.712 0-6.715 3.003-6.715 6.715 0 1.274.357 2.467.977 3.483l-1.487 5.458 5.599-1.455c.977.596 2.126.945 3.361.945 3.712 0 6.715-3.003 6.715-6.715s-3.003-6.715-6.715-6.715zm3.715 9.215c-.146.824-.859 1.538-1.683 1.683-1.274.219-2.636.219-3.91 0-.824-.145-1.537-.859-1.683-1.683-.219-1.274-.219-2.636 0-3.91.146-.824.859-1.538 1.683-1.683 1.274-.219 2.636-.219 3.91 0 .824.145 1.537.859 1.683 1.683.219 1.274.219 2.636 0 3.91z"/>
              </svg>
              Threads
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
