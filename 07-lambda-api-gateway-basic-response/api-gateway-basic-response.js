exports.handler = async (event) => {
    console.log(event);
    const response = {
        body: 'Hello Cloud Scholars!',
    };
    return response;
};
