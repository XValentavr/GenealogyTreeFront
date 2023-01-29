class TreeApiClient {

    _getAccessToken = async () => {
        throw new Error('No info')
    }
    _makeRequest = async (endpoint, fetchData) => {
        try {
            let url = 'http://localhost:8000/' + endpoint;
            let response;
            console.log({...fetchData})
            try {
                response = await fetch(url, {...fetchData});
            } catch (error) {
                console.log(error);
            }
            let json;
            try {
                json = await response.json();
            } catch (error) {
                console.log(error)
            }
            if (!response.ok) {
                console.log(response)
            }
            if (!json) {
                console.log('Not data json')
            }
            console.log(json)
            return json ? json : response
        } catch (error) {
            throw error
        }
    }
    orderCreatingTree = (client) => {
        const token = localStorage.getItem('token')
        return this._makeRequest(`genealogistbuildstree/api/v1/fetch/`, {
            method: "POST",
            body: JSON.stringify({client}),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
        })
    }
    orderGettingTree = (status) => {
        const token = localStorage.getItem('token')
        const params = {}
        let url = `genealogistbuildstree/api/v1/fetch/`

        if (status) {
            params.status = status
            url = `genealogistbuildstree/api/v1/fetch/?status=${status}`
        }

        return this._makeRequest(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
        })
    }
    orderPatchTree = (client, status, genealogist) => {
        const token = localStorage.getItem('token')
        return this._makeRequest(`genealogistbuildstree/${client}/api/v1/fetch/`, {
            method: "PATCH",
            body: status ? JSON.stringify({status}) : JSON.stringify({genealogist}),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
        })
    }

    getOrdersForGenealogist = (client) => {
        const token = localStorage.getItem('token')
        return this._makeRequest(`genealogistbuildstree/${client}/api/v1/fetch/genealogist/`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
        })
    }

    orderPatchColorTree = (client, colorCode) => {
        const token = localStorage.getItem('token')
        return this._makeRequest(`genealogistbuildstree/${client}/api/v1/fetch/`, {
            method: "PATCH",
            body: JSON.stringify({colorCode}),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
        })
    }
    getInitialTree = (currentUserId) => {
        const token = localStorage.getItem('token')
        return this._makeRequest(`tree/${currentUserId}/api/v1/fetch/root`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
        })
    }

    patchTreeData = (currentTreeId, data) => {
        const token = localStorage.getItem('token')
        return this._makeRequest(`tree/${currentTreeId}/api/v1/fetch/tree`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
        })
    }
    createTreeLine = (treeId, data) => {
        const token = localStorage.getItem('token')
        return this._makeRequest(`tree/${treeId}/api/v1/fetch/line`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Token ${token}`,
            },
        })
    }

}


export default new TreeApiClient()