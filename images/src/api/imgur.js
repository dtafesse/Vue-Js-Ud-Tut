import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '447c5c335d6dd88';
const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: 'token'
    };

    // causes user's browser to authomatically navigate to the following url
    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(
      queryString
    )}`;
  },
  fetchImages(token) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }
};
