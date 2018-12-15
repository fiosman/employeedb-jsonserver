class HTTPRequests {
    // GET Request
    async getRequest(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    // POST Request
    async postRequest(url, data) {
        const config = {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, config);
        const resData = await response.json();
        return resData;
    }
    // DELETE request
    async deleteRequest(url) {
        const config = {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        }

        await fetch(url, config);
    }

    // PUT request
    async editRequest(url, data) {
        const config = {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, config);
        const resData = await response.json();
        return resData;
    }
}

export const request = new HTTPRequests;