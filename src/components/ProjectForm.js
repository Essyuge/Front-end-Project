import { useState } from "react";
import { useHistory } from "react-router-dom";

const initialState = {
    title:"",
    author:"",
    summary:"",
    price:"",
    image:"",
    category:""
  };

  const ProjectForm = ({ onAddProject }) => {
    const [formData, setFormData] = useState(initialState);
    const history = useHistory();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((formData) => ({ ...formData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ ...formData, claps: 0 }),
        };

        fetch("http://localhost:4000/projects", configObj)
        .then((resp) => resp.json())
        .then((project) => {
          onAddProject(project);
          history.push("/projects")
        });
    };
    