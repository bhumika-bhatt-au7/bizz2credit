import { connect } from "mongoose";

connect(process.env.LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
})
  .then(() => console.log("database connected"))
  .catch((error) => console.log(error));
