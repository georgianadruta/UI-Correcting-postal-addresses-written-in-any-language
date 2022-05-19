import { useState } from "react";
import "../app.css";
import FormInput from "../components/\FormInput";
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const FormPage = (props) => {
  const [values, setValues] = useState({
    street: '',
    zipCode: '',
    state: '',
    city: '',
    country: '',
  });
  const [error, setError] = useState(false)

  const [addr, setAddr] = useState([])
  const [loading, setLoading] = useState(false)

  const inputs = [
    {
      id: 1,
      name: "street",
      type: "text",
      placeholder: "Strada General Henri Mathias Berthelot Nr. 16",
      label: "Street"
    },
    {
      id: 2,
      name: "zipCode",
      type: "text",
      placeholder: "700259",
      label: "Zip Code"
    },
    {
      id: 3,
      name: "county",
      type: "text",
      placeholder: "Iași",
      label: "State"
    },
    {
      id: 4,
      name: "city",
      type: "text",
      placeholder: "Iași",
      label: "City"
    },
    {
      id: 5,
      name: "country",
      type: "text",
      placeholder: "România",
      label: "Country"
    },
  ];

  const navigate = useNavigate()


  async function getTop(data) {
    console.log("received data", data)
    let response = getSolutions(data)
    return await response;
  }

  function getSolutions(data){
    try {
      console.log("searching solution...")
      return axios.post('http://localhost:8081/get-solutions', data);
    }
    catch (error) {
      reject('error');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!e.target[0].value && !e.target[1].value && !e.target[2].value && !e.target[3].value && !e.target[4].value){
        setError(true)
    } else {
        setError(false)
        setLoading(true)
        let data = { street: e.target[0].value, zipCode: e.target[1].value, state: e.target[2].value, city: e.target[3].value, country: e.target[4].value }
        getTop(data).then(response => {
          console.log("post request response:", response)
          setAddr(addr.push([
            {street: response.data[0].street, zipCode: response.data[0].zipCode, county: response.data[0].state, city: response.data[0].city, country: response.data[0].country},
            {street: response.data[1].street, zipCode: response.data[1].zipCode, county: response.data[1].state, city: response.data[1].city, country: response.data[1].country},
            {street: response.data[2].street, zipCode: response.data[2].zipCode, county: response.data[2].state, city: response.data[2].city, country: response.data[2].country},
          ]))
          console.log("top three correct addresses", addr)
          setLoading(false)
          navigate('/top', { state: { addr: addr } })
        })
    }
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      {loading && 
      <div className="spinner-container">
        <div className="loading-spinner">
        </div>
      </div>}
      {!loading && <form onSubmit={handleSubmit}>
        <h1 style={{marginTop: "30px", marginBottom: "5px"}}>Welcome! Please introduce an address:</h1>
        {error && <Alert severity="error">You must complete at least one field!</Alert>}
        <br></br>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name] || ''}
            onChange={onChange}
          />
        ))}
        <button>Correct address</button>
      </form>}
    </div>
  );
};

export default FormPage;