import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from './image/Haqdarshak.png'

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Location");
  };

  return (
    <>



				<h2>Building Solutions that Empower Communities</h2>
<img src={img1} alt="Example" style={{ width: "300px", height: "500px" , marginLeft: "14cm"}} />
        <button
          className="btn"
          type="button"
          onClick={handleClick}
          style={{ marginTop: "5%" }}
        >
          SignUp
        </button>

    </>
  );
};

export default Home;