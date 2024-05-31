import React from "react";
import ContentHeader from "../components/ContentHeader";
import Card from "../components/Card";
import TeacherList from "./TeacherList";
import "../styles/content.css";

const Sidebar = () => {
  return (
    <div className="content">
      <ContentHeader />
      <Card />
      <TeacherList />
    </div>
  )
}

export default Sidebar;