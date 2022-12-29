class TreeApiClient {

  _getAccessToken = async () => {
    throw new Error('No info')
  }
  _makeRequest = async (endpoint, fetchData) => {
    try {
      let url = 'http://localhost:8000/' + endpoint;
      let response;
      try {
        response = await fetch(url, { ...fetchData });
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
      body: JSON.stringify({ client }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    })
  }
  orderGettingTree = () => {
    const token = localStorage.getItem('token')
    return this._makeRequest(`genealogistbuildstree/api/v1/fetch/`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    })
  }
  orderPatchTree = (client, genealogist) => {
    const token = localStorage.getItem('token')
    return this._makeRequest(`genealogistbuildstree/${client}/api/v1/fetch/`, {
      method: "PATCH",
      body: JSON.stringify({ genealogist }),
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
      body: JSON.stringify({ data }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    })
  }
}


export default new TreeApiClient()