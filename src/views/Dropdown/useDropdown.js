import { useState } from "react";
import { useHistory } from "react-router-dom";

const useDropdown = () => {
  const [location, setLocation] = useState(null);
  const [category, setCategory] = useState(null);
  const [goals, setGoals] = useState(null);
  const [message, setMessage] = useState(null);
  const history = useHistory();

  const handleLocationInput = (e) => setLocation(e.target.value);
  const handleCategoryInput = (e) => setCategory(e.target.value);
  const handleGoalsInput = (e) => setGoals(e.target.value);

  const handleFormSubmit = (e) => {
      console.log("handleLocationInput")
    if (e.preventDefault) {
      e.preventDefault();
    }
    if (location === null) {
      return setMessage("no location");
    }
    if (category === null) {
      return setMessage("no category");
    }
    if (goals === null) {
      return setMessage("no goals");
    }
    history.push("/Assessments");
  };

  return {
    location,
    category,
    goals,
    message,
    handleLocationInput,
    handleCategoryInput,
    handleGoalsInput,
    handleFormSubmit,
    
  };
};

export default useDropdown;