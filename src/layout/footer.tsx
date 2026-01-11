import ContactButton from "@/components/contact-form/contact-button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex w-full flex-col items-center gap-6 bg-transparent px-6 py-4 sm:px-10 md:px-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 rounded-2xl bg-accent p-4 text-background sm:p-6 md:gap-6 lg:p-10">
        <div className="text-center">
          <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase text-accent md:text-sm lg:text-base">
            Get in touch
          </span>
        </div>
        <div>
          <h1 className="mb-4 text-center text-2xl font-bold sm:text-3xl lg:text-4xl">
            Interested in working together?
          </h1>

          <p className="mx-auto max-w-3xl text-center text-base font-semibold leading-7 sm:text-lg lg:text-xl">
            You can also reach me at: {siteMetadata.contactnumber}
          </p>
        </div>
        <Link
          href={`mailto:${siteMetadata.email}`}
          target="_blank"
          className="mb-2 cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-6xl"
        >
          <span>kadermollarasel000@</span>
          <br />
          <span>gmail.com</span>
        </Link>
        <div className="flex justify-center">
          <ContactButton />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-4 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-accent">©{year} Abdul Kader Molla</span>
        <div className="flex gap-8">
          <Link
            href={siteMetadata.github}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Github"
          >
            <GithubIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </Link>
          {/* Twitter icon removed as XIcon is not available */}
          <Link
            href={siteMetadata.linkedin}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Linkedin"
          >
            <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
