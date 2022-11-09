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

    