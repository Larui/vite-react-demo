import API from "./api";

export default {
  test: () => {
    return API.get({
      url: "/test",
    });
  },
};
