import { useState } from "react";
import "../app.css";
import FormInput from "../components/\FormInput";
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const FirstPage = (props) => {
 
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/form')
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1 style={{marginTop: "30px", marginBottom: "5px"}}>About app</h1>
        <br></br>
        <p>
            This application comes to the aid of all people who shop frequently, as well as senders because it makes their work easier.
        </p>
        <p>
            The next page contains a form with the most common fields in an online ordering form:
        </p>
        <ul>
            <li>street line</li>
            <li>zip code</li>
            <li>state</li>
            <li>city</li>
            <li>country</li>
        </ul> 
        <p>
            You must complete at least one field. Your entered address could be not valid:
        </p>
        <ul>
            <li>without city or/and state or/and country</li>
            <li>with multiple cities or/and states or/and countries</li>
            <li>with multiple data in one field</li>
            <li>with data in wrong field/s</li>
            <li>with alternate name for city or/and state or/and country</li>
            <li>with typos (without dupplicate characters or/and without at least a vowels or/and without prepositions)</li>
        </ul> 
        <p>
            The algorithm will correct the entered address just for state, city and country fields. 
        </p>
        <p>
            After correction will display top three possible correct addresses.
        </p>
        <br></br>
        <button>Let's start</button>
      </form>
    </div>
  );
};

export default FirstPage;