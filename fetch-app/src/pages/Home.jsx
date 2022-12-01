import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/fetch-api">Fetch API</Link>
      <br />
      <br />
      <Link to="/async-await">Async Await</Link>
      <br />
      <br />
      <Link to="/axios">Axios</Link>
      <br />
      <br />
      <Link to="#">Test</Link>
      <br />
      <br />
      <Link to="#">Test</Link>
    </div>
  );
};

export default Home;
