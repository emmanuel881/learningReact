import { useState, userState } from "react";

const Home = () => {
  const [name, setName] = useState("mario");
  //let name = "mario";
  let counter = 0;
  const handleClick = (e) => {
    if (counter === 0) {
      setName("Tom");
      counter = 1;
    } else {
      setName("mario");
      counter = 0;
    }
    console.log("clicked");
  };
  return (
    <div className="home">
      <h2>Welcome</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
