import React, { FunctionComponent } from "react";
import { Category } from "../type";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
}> = ({ value, handlerFilterCategory, active }) => {
  let className = "capitalize cursor-pointer hover:text-green";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handlerFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectNavbar: FunctionComponent<{
  handlerFilterCategory: Function;
  active: string;
}> = (props) => {
  return (
    <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none ">
      <NavItem value="all" {...props} />
      <NavItem value="react" {...props} />
      <NavItem value="nodeJS" {...props} />
      <NavItem value="redux" {...props} />
      <NavItem value="bootstrap" {...props} />
      <NavItem value="solidity" {...props} />
    </div>
  );
};

export default ProjectNavbar;
