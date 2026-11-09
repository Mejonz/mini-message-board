import { getAllMessages, insertNewMessage, searchForMessage } from "../db/queries.js";
import { body, validationResult, matchedData } from 'express-validator';

const validateNewMessage = [
    body("messageText").trim()
        .notEmpty().withMessage('please enter a message')
        .isLength({max: 500}).withMessage('maximum message length is 500 characters'),
    body("messageUser").trim()
        .notEmpty().withMessage('please enter a username')
        .isLength({max: 30}).withMessage('maximum username length is 30 characters'),
];

export async function messagesGet(req, res) {
    const messages = await getAllMessages();
    console.log("messages: ", messages);
    res.render('index', {
        title: 'Mini Messageboard',
        messages: messages,
    })
}

export async function newMessageGet(req, res) {
    res.render('form', {title: 'New Message'});
}

// export async function newMessagePost(req, res) {
//     const { messageText, messageUser } = req.body;
//     await insertNewMessage(messageUser, messageText);
//     res.redirect('/');
// }

export const newMessagePost = [
    validateNewMessage,
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form", {
                title: "Post a message",
                errors: errors.array(),
            });
        }
        const { messageText, messageUser } = matchedData(req);
        await insertNewMessage(messageUser, messageText);
        res.redirect('/');
    }
];

export async function messageDetailGet(req, res) {
    const messageId = req.params.id;
    // console.log(messageId);
    const message = await searchForMessage(messageId);
    console.log(message);
    res.render("messageDetail", { 
        title: "Message Details", 
        message: message 
    })
}