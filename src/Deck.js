import React, { useState, useEffect } from "react";
import axios from "axios";

const URL = "https://api.github.com/users/elie";

/** GitHub Profile: shows info from GH API */

function ProfileViewer() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchUserWhenMounted() {
    async function fetchUser() {
      const userResult = await axios.get(URL);
      setProfile(userResult.data);
      setIsLoading(false);
    }
    fetchUser();
  }, [ ]);

  if (isLoading) return <i>Loading...</i>;

  return (
      <div>
        <b>{`${profile.name} is ${profile.bio}`}</b>
      </div>
  );
}
// end

export default ProfileViewer;