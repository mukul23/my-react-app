import React from "react";
import Link from "gatsby-link";

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
      <Link to="/"><img src="" width="30"></img></Link>
      <Link to="/courses">Courses</Link>
    </div>
  </div>
);

export default Header;
