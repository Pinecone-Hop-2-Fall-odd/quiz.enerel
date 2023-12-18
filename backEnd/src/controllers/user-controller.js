// import { UserModel } from "../models/mongoose.js";
import { UserModel } from "../../models/mongoose.js";
import { userRouter } from "../routers/user-routes.js";

export const users = [
  {
    id: "sanoifhjsapomfp868",
    name: "bob",
    email: "email@gmail.com",
    password: "pass",
  },
];

export const getUser = (req, res) => {
  const { id } = req.params;

  const user = users.filter((cur) => cur.id === id)[0];

  if (user) {
    res.status(200).json({ user: user });
  } else {
    res.status(405).json({ message: "user not found" });
  }
};

export const getUserName = async (req, res) => {
  const { username } = req.params;

  const user = await UserModel.findOne({ username: username });

  if (user) {
    res.status(200).json({ user: user });
  } else {
    res.status(405).json({ message: "user not found" });
  }
};

export const getAllUsers = async (req, res) => {
  const users_data = await UserModel.find();
  res.status(200).json({ users_data });
};

export const createUser = async (req, res) => {
  const body = req.body;

  await UserModel.create({
    username: body.username,
    age: body.age,
    createdOn: new Date(),
    work: body.work,
    password: body.password,
  });

  res.status(200).json({ users: body });
};

export const editUser = (request, response) => {
  const { id } = request.params;
  const body = request.body;

  const updatedData = users.map((d) => {
    if (d.id == body.id) {
      (d.username = body.username ? body.username : d.username),
        (d.age = body.age ? body.age : d.age),
        (d.work = body.work ? body.work : d.work);
      d.password = body.password ? body.password : d.password;
    }

    return d;
  });

  users = updatedData;
  response.json({
    data: updatedData,
  });
};

export const deleteUser = (request, response) => {
  const { id } = request.params;

  const deleteddData = users.filter((d) => d.id !== id);
  users = deleteddData;
  response.json({
    status: "success",
    data: deleteddData,
  });
};
