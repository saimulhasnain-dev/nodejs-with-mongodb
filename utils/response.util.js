module.exports = {
    sendResponse: (res, data, code = 200) => {
        res.status(code).send({data});
    },
    errorResponse: (res, message, code = 500) => {
        res.status(code).send(message);
    },
    emptyResponse: (res, code = 404) => {
        res.status(code);
    }
}
// module.exports = sendResponse