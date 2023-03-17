import { useEffect } from "react";
import { useHistory, Link, Switch, Route, useRouteMatch } from "react-router-dom";
import ViewProfile from "./ViewProfile";
import EditProfile from "./EditProfile";

const Profile = ({ login }) => {
  const history = useHistory();

  const { path, url } = useRouteMatch(); // profile - is current url

  useEffect(() => {
    if (!login) history.push("/");
  }, [login, history]);

  return (
    <>
      <h1>Profile</h1>;
      <ul>
        <li>
          <Link to={`${url}/viewprofile`}>View Profile</Link>
        </li>
        <li>
          <Link to={`${url}/editprofile`}>Edit Profile</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/viewprofile`} component={ViewProfile} />
        <Route path={`${path}/editprofile`} component={EditProfile} />
      </Switch>
    </>
  );
};

export default Profile;
