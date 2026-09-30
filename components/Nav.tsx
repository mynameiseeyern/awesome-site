import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/content/site";

export function Nav() {
  return (
    <header className="top col">
      <a className="name" href="/#top">
        {site.name}
      </a>
      <nav aria-label="Primary">
        <ul>
          <li><a href="/#work">Work</a></li>
          <li><a href="/#how">How I work</a></li>
          <li><a href="/#experience">Experience</a></li>
          <li><a href="/#contact">Contact</a></li>
          <li><ThemeToggle /></li>
        </ul>
      </nav>
    </header>
  );
}
