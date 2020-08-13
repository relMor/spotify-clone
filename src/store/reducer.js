export const initialState = {
  user: null,
  playlists: [],
  palying: false,
  item: null,
  // token:
  //   "BQCcHSmAnFpvoNYkQP3jTA5XgMUGX-sm8M8wLSK67q4BFOQBFUMnegMWf-ZEUigbY46OEXPJ4fi9_MoTv6uTdjIwBtoD9EZb3ZdCUbninHI5sTDxveiBwxuSiwTVrSjz0vh1CgQiqpSkGuqyDFYUeUm_f9HwuFJXrcgM2IlsAyqRnQuzWFoQ",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return{
        ...state,
        discover_weekly: action.discover_weekly
      }
    default:
      return state;
  }
};

export default reducer;
