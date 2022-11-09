import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

const initialState = {

    title:"",
    author:"",
    summary:"",
    price:"",
    image:"",
    category:""
    };

    const ProjectEditForm = ({ onUpdateProject }) => {
        const [formData, setFormData] = useState(initialState);
      
        const { title, author, summary, price, image ,category} = formData;
      
        const { id } = useParams();
        const history = useHistory()
        console.log('id', id)

        useEffect(() => {
            fetch(`http://localhost:4000/projects/${id}`)
              .then((res) => res.json())
              .then((project) => setFormData(project));
          }, [id]);
          
          const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData(formData => ({ ...formData, [name]: value }));
          };
        
          const handleSubmit = (e) => {
            e.preventDefault();
            const configObj = {
              method: "PATCH",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(formData),
            };

            fetch(`http://localhost:4000/projects/${id}`, configObj)
      .then((resp) => resp.json())
      .then((updatedProj) => {
        onUpdateProject(updatedProj);
        history.push("/projects")
      });
  };
