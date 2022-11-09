import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [recentProjects, setRecentProjects] = useState([]);

  useEffect(() => {
    // fetch the 3 most recently added projects from json-server
    fetch("http://localhost:4000/projects?_sort=id&_order=desc&_limit=3")
      .then((r) => r.json())
      .then((recentProjects) => {
        setRecentProjects(recentProjects);
      });
  }, []);