import axios from "axios";
// const BASEURL = "http://api.giphy.com/v1/stickers/search?api_key=5f2qiYkKasRM65bApSg9R42vbXi57BSJ";
// const APIKEY = "5f2qiYkKasRM65bApSg9R42vbXi57BSJ";

// const url = "http://api.giphy.com/v1/gifs/search?api_key=5f2qiYkKasRM65bApSg9R42vbXi57BSJ&q=dog"
const url2 = "http://api.giphy.com/v1/gifs/search?api_key=5f2qiYkKasRM65bApSg9R42vbXi57BSJ&q=dog&limit=12"

export default {
  search: function() {
    return axios.get(url2);
  }
};




