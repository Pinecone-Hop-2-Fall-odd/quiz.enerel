// const express = require("express");
// const fs = require("fs");

// const router = express.Router();

// // router.get("/user", (request, response) => {
// //   const { username, password, id } = request.headers;
// //   fs.readFile(
// //     "./UserInfo.json",
// //     "utf-8",

// //     (readError, data) => {
// //       let saveddata = JSON.parse(data);
// //       if (username) {
// //         const filteredData = saveddata.filter(
// //           (data) => data.username === username
// //         );
// //         response.json({ data: filteredData.length === 1 });
// //       } else {
// //         if (password) {
// //           const filteredData = saveddata.filter(
// //             (data) => data.password === password
// //           );
// //           console.log(saveddata);
// //           console.log(filteredData);

// //           response.json({ id: filteredData[0].id });
// //         } else {
// //           response.json({ data: false });
// //         }
// //       }
// //     }
// //   );
// // });
// // router.post("/users", (req, res) => {
// //   const users = req.body;

// //   fs.readFile(
// //     "./UserInfo.json",
// //     "utf-8",

// //     (readError, data) => {
// //       let saveddata = JSON.parse(data);

// //       if (readError) {
// //         res.json({
// //           status: "read file error",
// //         });
// //       }

// //       const newUser = {
// //         id: Date.now().toString(),

// //         username: users.username,

// //         age: users.age,

// //         work: users.work,

// //         password: users.password,
// //       };

// //       saveddata.push(newUser);

// //       console.log(saveddata);

// //       fs.writeFile(
// //         "./UserInfo.json",

// //         JSON.stringify(saveddata),

// //         (writeError) => {
// //           if (writeError) {
// //             res.json({
// //               status: "error hhhh",
// //             });
// //           } else {
// //             res.json({
// //               status: "success hhhhh",

// //               data: saveddata,
// //             });
// //           }
// //         }
// //       );
// //     }
// //   );
// // });

// // router.put("/users/:id", (request, response) => {
// //   const { id } = request.params;
// //   fs.readFile(
// //     "./UserInfo.json",
// //     "utf-8",

// //     (readError, data) => {
// //       let savedData = JSON.parse(data);

// //       if (readError) {
// //         response.json({
// //           status: "read file error",
// //         });
// //       }
// //       const body = request.body;

// //       const updatedData = savedData.map((d) => {
// //         if (d.id == body.id) {
// //           (d.username = body.username ? body.username : d.username),
// //             (d.age = body.age ? body.age : d.age),
// //             (d.work = body.work ? body.work : d.work);
// //           d.password = body.password ? body.password : d.password;
// //         }

// //         return d;
// //       });

// //       fs.writeFile(
// //         "./UserInfo.json",

// //         JSON.stringify(updatedData),

// //         (writeError) => {
// //           response.json({
// //             data: updatedData,
// //           });
// //         }
// //       );
// //     }
// //   );
// // });

// // router.delete("/users/:id", (request, response) => {
// //   const { id } = request.params;
// //   fs.readFile("./UserInfo.json", "utf-8", (readError, data) => {
// //     let savedData = JSON.parse(data);
// //     if (readError) {
// //       response.json({
// //         status: "read file error",
// //       });
// //     }
// //     const deleteddData = savedData.filter((d) => d.id !== id);
// //     fs.writeFile(
// //       "./UserInfo.json",
// //       JSON.stringify(deleteddData),
// //       (writeError) => {
// //         if (writeError) {
// //           response.json({
// //             status: "error",
// //           });
// //         }
// //         response.json({
// //           status: "success",
// //           data: deleteddData,
// //         });
// //       }
// //     );
// //   });
// // });

// module.exports = { router };
