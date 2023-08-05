import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

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

export default Profile
