exports.handler = async (event) => {
    console.log(event);

    let httpMethod;
    let path;
    const routeKey = event.requestContext.routeKey;
    console.log("Route Key: " + routeKey);

    if (routeKey == "$default") {
        return callback(new Error("Shouldn't have reached this part of code. Please investigate! 1"));
    } else {
        const routeKeyArray = routeKey.split(' ');
        httpMethod = routeKeyArray[0];
        path = routeKeyArray[1];
    }

    let body;
    let statusCode = '200';
    const headers = {
        'Content-Type': 'application/json',
    };

    try {
        switch (httpMethod) {
            case 'GET':
                body = [
                    {
                        "id": "1",
                        "name": "Jack"
                    },
                    {
                        "id": "2",
                        "name": "Jill"
                    }
                ]
                break;
            default:
                throw new Error(`Unsupported method "${event.httpMethod}"`);
        }
    } catch (err) {
        statusCode = '400';
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    const response = {
        statusCode,
        body,
        headers,
    };

    return response;
};
