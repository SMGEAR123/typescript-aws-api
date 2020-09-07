const apiResponses = {
    _200: (body: { [key: string]: any }) => {
        console.log("body", body);
        console.log("JSON body", JSON.stringify(body, null, 2))
        return {
            statusCode: 200,
            body: JSON.stringify(body, null, 2),
        };
    },
    _400: (body: { [key: string]: any }) => {
        return {
            statusCode: 400,
            body: JSON.stringify(body, null, 2),
        };
    },
};

export default apiResponses;