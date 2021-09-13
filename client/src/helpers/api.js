import axios from "axios";

const baseURL = "http://localhost:4000/api/";

const handleError =
  (fn) =>
  (...params) =>
    fn(...params).catch((error) => {
      console.log(error);
    });

export const api = {
  registerAuthor: handleError(async (payload) => {
    const res = await axios.post(baseURL + "authors/", payload);
    return res.data;
  }),
  loginAuthor: handleError(async (payload) => {
    const res = await axios.post(baseURL + "authors/login", payload);
    return res.data[0];
  }),
  createArticle: handleError(async (payload) => {
    const res = await axios.post(baseURL + "articles", payload);
    return res.data;
  }),
  getArticles: handleError(async (page) => {
    const res = await axios.get(baseURL + "articles/", {
      params: { page: page },
    });
    return res.data;
  }),
  getArticlesByAuthorId: handleError(async (id) => {
    const res = await axios.get(baseURL + "articles/" + id);
    return res.data;
  }),
  updateArticleViews: handleError(async (id, payload) => {
    const res = await axios.put(baseURL + "articles/" + id, payload);
    return res.data;
  }),
  // getWord: handleError(async id => {
  //   const res = await axios.get(baseURL + id);
  //   return res.data;
  // }),
  // getWords: handleError(async () => {
  //   const res = await axios.get(baseURL);
  //   return res.data;
  // }),
  // deleteWord: handleError(async id => {
  //   const res = await axios.delete(baseURL + id);
  //   return res.data;
  // }),
  // createWord: handleError(async payload => {
  //   const res = await axios.post(baseURL, payload);
  //   return res.data;
  // }),
  // updateWord: handleError(async payload => {
  //   const res = await axios.put(baseURL + payload._id, payload);
  //   return res.data;
  // })
};
