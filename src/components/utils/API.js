import axios from "axios";
// const BASEURL = "http://api.giphy.com/v1/stickers/search?api_key=5f2qiYkKasRM65bApSg9R42vbXi57BSJ";
// const APIKEY = "5f2qiYkKasRM65bApSg9R42vbXi57BSJ";

// const url = "http://api.giphy.com/v1/gifs/search?api_key=5f2qiYkKasRM65bApSg9R42vbXi57BSJ&q=dog"


const url = "http://api.giphy.com/v1/gifs/search?api_key=5f2qiYkKasRM65bApSg9R42vbXi57BSJ&q=";
const characters = ["superhero", "dogs", "cats", "tom and jerry", "flogs", "clown"]
export default {
  search: function(level) {
    let query = characters[Math.floor(Math.random()*characters.length)]
    return axios.get(url+query+"&limit="+level);
  }
};




