
class AuthClient {

  _getAccessToken = async () => {
    localStorage.getItem('token')
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
  register = async (register) => {
    return this._makeRequest("auth/api/v1/users/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(register)
    })
  }

  authorize = async (authData) => {
    return this._makeRequest("auth/api/v1/token/login/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(authData)
    })
  }

  getDataByToken = async () => {
    const token = localStorage.getItem('token')
    return this._makeRequest("auth/api/v1/useruuid/", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      }
    })
  }
  reset = async (reset) => {
    return this._makeRequest("auth/api/v1/users/reset_password/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reset)
    })
  }
  support = async (support) => {
    return this._makeRequest("support/api/v1/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(support)
    })
  }
}

export default new AuthClient();