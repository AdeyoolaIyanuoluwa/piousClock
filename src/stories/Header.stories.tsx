import React from "react";
import Header from "../components/Header/index";
import { BrowserRouter as Router } from "react-router-dom";

export default {
  title: "Components/Header",
  component: Header,
};

const Template = () => {
  return (
    <div>
      <Router>
        <Header />
      </Router>
    </div>
  );
};

export const Default = Template.bind({});
