import McALPINE from "../components/mcalpine"

const Footer = () => {
  return (
    <footer className="c_footer o-container ">
      <div className="w-full c_footer_top_div">
        <nav className="c_footer_nav">
          <ul className="h_ul_section">
            <li className="c_li_items"><a href="/" className="c_a_items">Projects</a></li>
            <li className="c_li_items"><a href="/" className="c_a_items">Philoophy</a></li>
            <li className="c_li_items"><a href="/" className="c_a_items">Team</a></li>
            <li className="c_li_items"><a href="/" className="c_a_items">Books and Press</a></li>
            <li className="c_li_items"><a href="/" className="c_a_items">Furniture Lines</a></li>
          </ul>
        </nav>
      </div>
      <div className="w-full c_footer_bottom_div">
        <div className="c_footer_logo_svg">
          <a href="/" className="c_logo_link">
            <span className="c_logo text-white">
              <McALPINE />
            </span>
          </a>
        </div>
        <nav className="c-footer_subnav">
          <ul className="c-footer_subnav_list">
            <li className="c-footer_subnav_item">
              <a href="https://www.facebook.com/mcalpinehouse" className="c-footer_subnav_link || c-link" target="_self">
                <span className="c-link_label">Facebook</span>
              </a>
            </li>
            <li className="c-footer_subnav_item">
              <a href="https://www.pinterest.ca/mcalpinehouse/" className="c-footer_subnav_link || c-link" target="_self">
                <span className="c-link_label">Pinterest</span>
              </a>
            </li>
            <li className="c-footer_subnav_item">
              <a href="https://www.instagram.com/mcalpinehouse" className="c-footer_subnav_link || c-link" target="_self">
                <span className="c-link_label">Instagram</span>
              </a>
            </li>
          </ul>
          <ul className="c-footer_subnav_list">
            <li className="c-footer_subnav_item">
              <button className="c-footer_subnav_link || c-link" data-copy-clipboard="" data-copy-clipboard-value="info@mcalpinehouse.com">
                <span className="u-screen-reader-text hidden">Copy</span>
                <span className="c-link_label">info@mcalpinehouse.com</span>
                <span className="u-screen-reader-text hidden">to clipboard</span>
              </button>
            </li>

            <li className="c-footer_subnav_item">
              <button className="c-footer_subnav_link || c-link" data-copy-clipboard="" data-copy-clipboard-value="jobs@mcalpinehouse.com">
                <span className="u-screen-reader-text hidden">Copy</span>
                <span className="c-link_label">jobs@mcalpinehouse.com</span>
                <span className="u-screen-reader-text hidden">to clipboard</span>
              </button>
            </li>

            <li className="c-footer_subnav_item">
              <button className="c-footer_subnav_link || c-link" data-copy-clipboard="" data-copy-clipboard-value="844.624.6633">
                <span className="u-screen-reader-text hidden">Copy</span>
                <span className="c-link_label">844.624.6633</span>
                <span className="u-screen-reader-text hidden">to clipboard</span>
              </button>
            </li>
          </ul>
        </nav>
        <nav className="c-footer_legal">
            <ul className="c-footer_legal_list">
                
                <li className="c-footer_legal_item">
                    <button className="c-footer_subnav_link || c-link"  data-cc="show-preferencesModal" data-no-swup="">
                        <span className="c-link_label">
                            Manage Cookies
                        </span>
                    </button>
                </li>
                <li className="c-footer_legal_item">
                    ©2025 McALPINE
                </li>
            </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer