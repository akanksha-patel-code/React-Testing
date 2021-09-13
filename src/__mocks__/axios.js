const mockResponse = {
    data: {
        results: [
            {
                name : {
                    first: "akanksha",
                    last: "Harb"
                },
                picture : {
                    large: ""
                },
                login: {
                    username: "test"
                }
            }
        ]
    }
}

export default {
    get: jest.fn().mockResolvedValue(mockResponse)
}