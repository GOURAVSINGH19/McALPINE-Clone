import Image from "next/image.js";
import data from "../../project.js"

const Section3: React.FC = () => {
    return (
        <section className="c_projects_section o-container">
            <ul className="c_project_ul relative">
                {data.map((item, index) => (
                    <li key={index} className="li_items relative text-center">
                        <div className="li_imgs">
                            {item.images.map((img, imgIndex) => (
                                <div className="c-imgs " key={imgIndex}>
                                    <div className="inner-imgs-class">
                                        <Image style={{ "--imgindex": imgIndex } as React.CSSProperties}  src={img} alt={`Image ${imgIndex}`} className="inline-block w-full h-full" width={100} height={100} />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="c-projects-list_title">
                            {item.title}&nbsp;
                            <sup aria-labelledby="chapter-number-1" className="c-text">{item.number}</sup>
                        </p>
                        <a href={`/projects/${item.slug}` }className="c-projects-list_link">
                            <span className="c-text">View Wellness</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Section3;