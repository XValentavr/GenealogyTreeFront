class AuthClient {
  _makeRequest = async (endpoint, {
    method,
    headers,
    body,
    params
  }) => {
    try {
      let url = 'http://localhost:8000/' + endpoint;
      const accessToken = '';
      let response;
      try {
        response = await fetch(url, {
          method: method || 'GET',
          headers: { ...headers },
          body: body ? JSON.stringify(body) : ''
        });
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
  register = async (value) => {
    return this._makeRequest("auth/api/v1/users/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: value
    })
  }

  auth = async (value) => {
    return this._makeRequest("auth/api/v1/token/login/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: value
    })
  }

  reset = async (value) => {
    return this._makeRequest("auth/api/v1/users/reset_password/", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: value
    })
  }
}

export default new AuthClient();