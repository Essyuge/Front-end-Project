import ProjectListItem from "./ProjectListItem";
import { useState, useEffect } from "react";
import { NavLink, useHistory, useParams, useRouteMatch, useLocation } from "react-router-dom";

const ProjectList = ({
    projects,
    onProjectEdit,
    onProjectDelete,
    setSelectedCategory,
    setSearchQuery
  }) => {
    
    const [searchInputText, setSearchInputText] = useState("");
    const { category } = useParams();
    // useLocation provides access to query parameters as search
    const { search } = useLocation();
    // useHistory gives access to the history object so we can update the url
    const history = useHistory();
    // useRouteMatch used to access the url without any query parameters
    const { url } = useRouteMatch(); 

    
