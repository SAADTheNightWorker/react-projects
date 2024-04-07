import React, { useContext } from "react";
import Context from "../context/Context";

const Profile = () => {
  const { user } = useContext(Context);
  console.log(user);

  if (!user.username || !user.password) {
    return <h1>User Not Loged In</h1>;
  }

  return (
    <div>
      <h1>Profile: {user.username}</h1>
      <h1>Welcome</h1>
      <h2>more components</h2>
    </div>
  );
};

export default Profile;
