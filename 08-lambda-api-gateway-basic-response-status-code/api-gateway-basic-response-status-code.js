exports.handler = async (event) => {
    console.log(event);
    const response = {
        statusCode: 201,
        body: 'Hello Cloud Scholars!',
    };
    return response;
};
