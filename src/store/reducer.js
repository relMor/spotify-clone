export const initialState = {
  user: null,
  playlists: [],
  discover_weekly: null,
  top_artsits: null,
  spotify: null,
  palying: false,
  item: null,
  token: null
  
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOP_ARTSITS":
      return {
        ...state,
        top_artsits: action.top_artsits,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
