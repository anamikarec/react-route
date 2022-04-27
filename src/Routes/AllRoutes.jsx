import { Route } from "react-router-dom";
// import About from "../pages/About";
// import Home from "../pages/Home";
// import Users from "../pages/Users";

function AllRoutes() {
  return (
    <div>
      <Route exact path="/">
        {/* <Home /> */}
        Home
      </Route>
      <Route path="/users">
        {/* <Users /> */}
        Users
      </Route>
      <Route path="/about">About</Route>
    </div>
  );
}

export default AllRoutes;
