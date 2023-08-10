import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import axios from 'axios';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";


const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  console.log("before useeffect")

  useEffect(() => {
    console.log("from useeffect")
    console.log("from useeffect", user)
    const checkUser = async () => {
      if(isAuthenticated){
        try {
          const response = await axios.post("http://localhost:8080/api/login", { user });
          console.log(response)
          
          //redirect to homepahe
  
          //show relevant view based on user type
  
        } catch (error) {
          // if (error?.response?.status === 401) {
          //   navigate("/register-owner");
          // }
          console.error(error);
        }

      }
     
    };
    checkUser()
  }, [user])

  return(
    isAuthenticated && (
      <article>
        {/* {JSON.stringify(user)} */}
        <h2>{user?.name}</h2>
        <ul>
          {Object.keys(user).map((objectKey, i) => <li key={i}>{objectKey}:{user[objectKey]}</li>)}
        </ul>
      </article>

    )
  )

}

export default Profile;
