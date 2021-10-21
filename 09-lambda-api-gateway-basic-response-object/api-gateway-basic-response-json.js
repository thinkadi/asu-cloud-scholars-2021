exports.handler = async (event) => {
    console.log(event);
    const response = {
        statusCode: 200,
        body: JSON.stringify({
            "message": "Hello Cloud Scholars!"
        }),
    };
    return response;
};
