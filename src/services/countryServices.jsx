import axios from "axios";

const countryUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAllCountries = () => {
    return axios.get(countryUrl);
}

export default {getAllCountries};
