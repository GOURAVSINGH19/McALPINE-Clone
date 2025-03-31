import data from "../../project"
const Section3 = () => {
    return (
        <section className="c_projects_section w-full h-screen o-container">
            <ul>
                {data.map((item, index) => (
                    <li key={index} className="li_items">
                        {/* <div className="flex-1 opacity-0">
                            {item.images.slice(0, 3).map((img, imgIndex) => (
                                <img key={imgIndex} src={img} alt={`Image ${imgIndex + 1}`} className="inline-block" />
                            ))}
                        </div> */}
                        <div className="flex-1 text-center">
                            {item.title} {item.number}
                        </div>
                        <div className="flex-1">
                            {item.images.slice(3, 6).map((img, imgIndex) => (
                                <img key={imgIndex} src={img} alt={`Image ${imgIndex + 4}`} className="inline-block" />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Section3;