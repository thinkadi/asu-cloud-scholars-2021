exports.handler = async (event) => {
    console.log(event);
    const response = {
        outputMessage: event.inputMessage,
    };
    return response;
};
