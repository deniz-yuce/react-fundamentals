// setTimeout(() => {
//   console.log("Hello");
// }, 5000);

// setInterval(() => {
//   console.log("Ben her saniye çalışacağım");
// }, 1000);

// const sayHi = (cb) => {
//   cb();
// };

// sayHi(() => {
//   console.log("Hello");
// });

import fetch from "node-fetch";
import axios from "axios";

// fetch("https://jsonplaceholder.typicode.com/users").then((data) =>
//   console.log(data.json().then((users) => console.log(users)))
// );

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((data) => data.json())
//   .then((users) => {
//     console.log("Users downloaded", users);
//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((data) => data.json())
//       .then((posts) => {
//         console.log("Post 1 downloaded", posts);

//         fetch("https://jsonplaceholder.typicode.com/posts/2")
//           .then((data) => data.json())
//           .then((data) => console.log("data 2 downloaded", data));
//       });
//   });

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// async function getData() {
//   const { data } = await axios("https://jsonplaceholder.typicode.com/users"); //THIS ONE

//   const { data: post1 } = await axios(
//     "https://jsonplaceholder.typicode.com/posts/1"
//   );

//   const post2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//   ).json();

//   console.log("users", data);
//   console.log("post1", post1);
//   console.log("post2", post2);
// }

// getData();

// (async () => {
//   console.log("selam");
// })();

// const getComments = (number) => {
//   return new Promise((resolve, reject) => {
//     if (number === 1) {
//       resolve({ text: "Deniz" });
//     }

//     reject("Hata");
//   });
// };

// getComments(3)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");

    resolve(data);
    // reject("error");
  });
};

const getPost = (post_id) => {
  return new Promise(async (resolve, reject) => {
    const { data: post1 } = await axios(
      "https://jsonplaceholder.typicode.com/posts/" + post_id
    );

    resolve(post1);
    // reject("another error");
  });
};

// getUsers()
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// getPost(1)
//   .then((data) => console.log(data))
//   .catch((e) => console.log(e));

// (async () => {
//   try {
//     const users = await getUsers();
//     const post = await getPost(1);

//     console.log(users);
//     console.log(post);
//   } catch (e) {
//     console.log(e);
//   }
// })();

Promise.all([getUsers(), getPost(1)])
  .then(console.log)
  .catch(console.log);
