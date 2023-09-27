import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./Items";
import { Link } from "react-router-dom";


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};


const Items = [
  { id: "0", text: "PROJECTS", to:"/Projects"},
  { id: "1", text: "BLOG", to: "/Blog"},
  { id: "2", text: "ABOUT", to:"/About"},
  { id: "3", text: "HOME", to: "/Home"},
];

export const Navigation = ({ toggleSidebar, isSidebarOpen }) => (
  <motion.ul className={`ul ${isSidebarOpen ? "open" : "closed"}`} variants={variants}>
    {Items.map((item) => (
      <div key={item.id}>
        <Link
          to={`${item.to}`}
          onClick={isSidebarOpen ? toggleSidebar : (e) => e.preventDefault()}
        >
          <MenuItem id={item.id} key={item.id} text={item.text} to={item.to} />
        </Link>
      </div>
    ))}
  </motion.ul>
);