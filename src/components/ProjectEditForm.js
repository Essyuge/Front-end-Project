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

        
    