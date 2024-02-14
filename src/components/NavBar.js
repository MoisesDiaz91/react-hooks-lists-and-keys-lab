import React, { createElement } from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const listMap = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ))
  return (<>
      <div id="navigation" className="nav-bar">
        <nav>
          {listMap}
        </nav>

      </div>
    </>


  );
}

export default NavBar;


// {
//   const links = ["home", "about", "projects"];

//   const anchors = links.map((link) => (
//     <a key={link} href={"#" + link}>
//       {link}
//     </a>
//   ));
//   return <nav>{anchors}</nav>;
// }