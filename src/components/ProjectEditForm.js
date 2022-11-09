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
          
          