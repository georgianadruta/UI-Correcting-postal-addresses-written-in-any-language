import { useLocation } from "react-router";
import "../app.css";
import OutlinedCard from "../components/OutlinedCard";
import { useNavigate } from 'react-router-dom';

const TopPage = (props) => {
  const { state } = useLocation()
  const { addr } = state
  
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form')
  };

  return (
    <div className="app">
      <h1>Here are your results:</h1>
      {addr && addr[0] && addr[0].map((element, id) => {
      return (<OutlinedCard key={id} element={element} />)
      })}
      <button onClick={handleSubmit}>Correct another address</button>
    </div>    
  );
};

export default TopPage;