class usersApiClient {

  _getAccessToken = () => {
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
        console.log('json',json)
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

  getPersonalInfo = async (uuid) => {
    const token = localStorage.getItem('token')
    return this._makeRequest(`profile/${uuid}/api/v1/fetch/`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    })
  }

  getAllUsers = async () => {
    const token = localStorage.getItem('token')
    return this._makeRequest(`users/api/v1/fetch/`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${token}`,
      },
    })
  }

}
export default new usersApiClient();