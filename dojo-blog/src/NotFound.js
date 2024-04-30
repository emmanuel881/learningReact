import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  const history = useHistory();
  return (
    <div className="not-found">
      <h2>Not found</h2>
      <p>This page does not exist </p>
      <Link to="/">Go back to homepage...</Link>
      {
        //setTimeout(() => {history.push("/")}, 10000);
      }
    </div>
  );
};

export default NotFound;
