import axios from "axios";
import fs from "fs/promises";
import md5 from "md5"
import assessments from "../src/api/assessments";

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

const checkData = async () => {
    const result = await axios.post(
        "https://api-eu-central-1.graphcms.com/v2/cko2ufijw3psx01z1e9t4ho71/master",
        { query: GET_ALL_ASSESSMENT_QUERY }
      );

      const {
          data: {
              data: { assessments },
          },
      } = result;

      const assessmentsString = JSON.stringify(assessments,
        null, 2);

      await fs.writeFile("./public/data/assessments.json", JSON.stringify(assessments));

      const hashesString = JSON.stringify({
          id: "hashes",
          data: {
            assessments: md5(assessmentsString),   

          }
      })

     await fs.writeFile("./public/data/hashes.json", hashesString);
};


checkData();


