exports.handler = async (event) => {
    console.log(event);
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "message": "Hello Cloud Scholars!"
        }),
    };
    return response;
};
