import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer kL1c8Kn10dgQWINSGTFfSOyjzL187FAGgoTWFzORlt6Nf5SbKwQEmci7j50k13tEfk7JE4qnxRj_16izdnRlGHdPWsUBor6P6v4G7lplcTl81YcwXYFBWFLAMIg_X3Yx'
  }
});