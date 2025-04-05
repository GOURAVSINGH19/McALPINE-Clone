"use client"
const Navbar = () => {
    return (
        <header>
            <div className="c_nav_container">
                <div className="c_nav">
                    <div className="c_main">
                        <a href="/" className="c_logo_svg">
                            <svg  className="c_logo" xmlns="http://www.w3.org/2000/svg" spacing="preserve" viewBox="0 0 36 36">
                                <path id="background-hover" d="M0 0h36v36H0z"></path>
                                <path id="background-idle" d="M0 0h36v36H0z"></path>
                                <path id="type" d="M20.6 11h-1.4l-4.3 8.2-4.8-8.2H7v.1h.3c.8 0 1.2.3 1.2 2.8v11.2h.3V12.4l5.3 8.8h.2l4.7-9V25h1.7V14.2c-.1-2.3-.1-3-.1-3.2m5.5 0c-2.4 0-3.6 2-3.6 4v.1c0 2 1.2 4 3.6 4 1.7 0 2.6-.8 2.9-2.2h-.2c-.1.6-.4 1.1-.9 1.4-.4.4-1 .6-1.6.6-2.1 0-2.4-2-2.4-3.8 0-1.8.2-3.8 2.4-3.8.4 0 .7.1 1 .2.3.2.6.4.8.7.3.4.5.8.6 1.2.1.2.1.5.1.8v-3.1c.2 0-1.9-.1-2.7-.1"></path>
                            </svg>
                        </a>
                        <button className="c_nav_button">
                            &#x2717;
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar