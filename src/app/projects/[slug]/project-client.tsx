"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

interface Project {
  slug: string;
  number: string;
  title: string;
  description?: string;
  images?: string[];
}

interface ProjectClientProps {
  nextProject: Project;
  prevProject: Project;
  project: Project;
}

const ProjectClient: React.FC<ProjectClientProps> = ({ nextProject, prevProject, project }) => {
  const projectNavRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const projectDesc = useRef<HTMLParagraphElement | null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const nextProjectProgress = useRef<HTMLDivElement | null>(null);

  const [isTransition, setIsTransition] = useState(false);
  const [progress, setProgress] = useState(true);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(projectNavRef.current, {
      opacity: 0,
      y: -100,
    });

    gsap.to(projectNavRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.25,
      ease: "power3.out",
    });

    gsap.to(projectDesc.current, {
      opacity: 1,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });

    const navscroll = ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        if (progressBarRef.current) {
          gsap.set(progressBarRef.current, {
            scaleX: self.progress,
          });
        }
      },
    });

    const footerbr = ScrollTrigger.create({
      trigger: footerRef.current,
      start: "top top",
      end: `+=${window.innerHeight * 3}px`,
      pin: true,
      pinSpacing: true,
      onEnter: () => {
        if (projectNavRef.current && !isTransition) {
          gsap.to(projectNavRef.current, {
            y: -100,
            duration: 0.5,
            ease: "power2.inOut",
          });
        }
      },
      onLeaveBack: () => {
        if (projectNavRef.current && !isTransition) {
          gsap.to(projectNavRef.current, {
            y: 0,
            duration: 0.5,
            ease: "power2.inOut",
          });
        }
      },

      onUpdate: (self) => {
        if (nextProjectProgress.current && progress) {
          gsap.set(nextProjectProgress.current, {
            scaleX: self.progress,
          });
        }
        if (self.progress >= 1 && !isTransition) {
          setProgress(false);
          setIsTransition(true);
          const tl = gsap.timeline();

          tl.set(nextProjectProgress.current, {
            scaleX: 1,
          });

          tl.to(
            [
              footerRef.current?.querySelector(".project-footer-copy"),
              footerRef.current?.querySelector(".next-project-progress"),
            ],
            {
              opacity: 0,
              duration: 0.3,
              ease: "power2.inOut",
            }
          );

          tl.call(() => {
            window.location.href = `/projects/${nextProject.slug}`;
          });
        }
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [nextProject.slug, isTransition, progress]);

  return (
    <div className="project-page">
      <div className="project-nav" ref={projectNavRef}>
        <div className="link">
          <span className="text-sm">&#8592;&nbsp;</span>
          <Link href={`/projects/${prevProject.slug}`}>Previous</Link>
        </div>
        <div className="project-page-scroll-progress">
          <p className="bg-[#]">{project.number}</p>
          <p>{project.title}</p>
          <div ref={progressBarRef} className="project-scroll-prg-br"></div>
        </div>

        <div className="link">
          <Link href={`/projects/${nextProject.slug}`}>Next</Link>
          <span>&#8594;&nbsp;</span>
        </div>
      </div>

      <div className="project-hero">
        <p className="grid-row-1/2 flex items-end justify-center mb-10">{project.number}</p>
        <h1>{project.title}</h1>
        {/* <p id="project-decs" ref={projectDesc}>
            {project.description}
          </p> */}
      </div>

      <div className="project-images">
        {project.images &&
          project.images.map((image, i) => (
            <div className="project-img" key={i}>
              <img src={image} alt="imgs" />
            </div>
          ))}
      </div>

      <div className="project-footer" ref={footerRef}>
        <h1>{nextProject.title}</h1>
        <div className="project-footer-copy">
          <p>Next Project</p>
        </div>
        <div className="next-project-progress">
          <div ref={nextProjectProgress} className="next-page-prg-br"></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectClient;
