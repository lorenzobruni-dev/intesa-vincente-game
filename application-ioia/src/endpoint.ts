import axios from "axios";

const URL_API = "https://random-word-api.herokuapp.com/word?lang=it";

export const getWord = () => axios.get(URL_API);