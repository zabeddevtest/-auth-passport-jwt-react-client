import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("https://auth-passport-jwt-react.herokuapp.com/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        // console.log(response)
      })
      .catch((err) => {
        navigate("/login");
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Profile</div>;
};

export default Profile;
