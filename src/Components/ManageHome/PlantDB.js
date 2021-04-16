import Axios from "axios";

export function getplant(id) {
  const headers = {
    "Content-Type": "application/json"
  };
  return new Promise((resolve, reject) => {
    Axios.get(`https://localhost:44347/api/WaterPlants/${id}`, {
      headers: headers
    }).then(response => {
     
      
      resolve(response);
    });
  });
}

//update last time water the plant
export function UpdatelastWatered(id) {
  const headers = {
    "Content-Type": "application/json"
  };


  return new Promise((resolve, reject) => {
    Axios.put(`https://localhost:44347/api/WaterPlants/${id}`, { headers: headers })
      .then(response => {
        if (response.data.code == 200) resolve(true);
        else resolve(false);
      })
      .catch(error => {
        
        reject(false);
      });
  });
}



