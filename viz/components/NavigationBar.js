const NavigationBar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <div className="navbar-brand">Fire EHR</div>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li
            className={props.pathname === "#" ? "nav-item active" : "nav-item"}
          >
            <a className="nav-link" href="#">
              Sample menu
            </a>
          </li>
        </ul>
        <div />
      </div>
    </div>
  </nav>
)

export default NavigationBar
