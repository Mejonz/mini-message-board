import { Router } from "express";
import { messagesGet, newMessageGet, newMessagePost, messageDetailGet } from "../controllers/messagesController.js";

const indexRouter = Router();

//data
// const messages = [
//   {
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date()
//   },
//   {
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date()
//   }
// ];

//routes
// indexRouter.get('/', (req, res) => {
//     res.render("index", { title: "Mini Messageboard", messages: messages });
// })

// indexRouter.get('/new', (req, res) => {
//   res.render("form", {title: "New Message"});
// })

// indexRouter.post('/new', (req, res) => {
//   const { messageText, messageUser } = req.body;
//   messages.push({text: messageText, user: messageUser, added: new Date()});
//   res.redirect("/");
// })

// indexRouter.get('/message/:id', (req, res) => {
//   const messageId = req.params.id;
//   const message = messages[messageId];
//   // console.log(message);
//   res.render("messageDetail", {title: "Message Details", message: message});
// })

//routes refactored with sql queries
indexRouter.get('/', messagesGet);
indexRouter.get('/new',newMessageGet);
indexRouter.post('/new', newMessagePost);
indexRouter.get('/message/:id', messageDetailGet);

export default indexRouter;