import axios from "axios";

const getUser = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + user_id
    );

    resolve(data);
  });
};

const getPost = (user_id) => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
    );

    resolve(data);
  });
};

const results = [];

export const getInfo = (user_id) => {
  const userInfo = getUser(user_id)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  const userPost = getPost(user_id)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));

  results.push(userInfo);
  results.push(userPost);
  return results;
};
