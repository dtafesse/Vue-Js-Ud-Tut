import api from '../../api/imgur';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
};

const actions = {
  async fetchImages({ rootState }) {
    // rootState is a reference to all the "state" stored inside
    // our Veux store instance.
    // allows across moudle communication
    // recall the token is stored in the auth module
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    console.log(response);
  }
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default { state, getters, actions, mutations };
