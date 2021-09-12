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
    // console.log(res.data);
    return res.data;
  }),
  loginAuthor: handleError(async (payload) => {
    const res = await axios.post(baseURL + "authors/login", payload);
    // console.log("API:", res.data);
    return res.data[0];
  }),
  createArticle: handleError(async (payload) => {
    console.log("createArticle body:", payload);
    const res = await axios.post(baseURL + "articles", payload);
    console.log("createArticle:", res.data);
    return res.data;
  }),
  getArticles: handleError(async () => {
    const res = await axios.get(baseURL + "articles/");
    // console.log(res.data);
    return res.data;
  }),
  getArticlesByAuthorId: handleError(async (id) => {
    const res = await axios.get(baseURL + "articles/" + id);
    console.log("helper2", res.data);
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
