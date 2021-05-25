import axios from "axios";


const GET_ALL_ASSESSMENT_QUERY = `

{
    assessments{
      id
      name
      difficulty
      timeAndMinutes
      questions{
        id 
        options
        answer
        description{
          html
        }
        explanation{
          html
        }
      }
      
    }
  }
  
`;
const syncAssessments = async () => {
  const {
    data: {
      data: {
          assessments
      },
    },
  } = await axios.post(
    "https://api-eu-central-1.graphcms.com/v2/cko2ufijw3psx01z1e9t4ho71/master",
    { query: GET_ALL_ASSESSMENT_QUERY }
  );

  window.localStorage.setItem("assessments", JSON.stringify(assessments));
  return assessments;
};

export default{
   syncAssessments,
};
