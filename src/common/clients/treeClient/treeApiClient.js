class TreeApiClient {

  _getAccessToken = async () => {
    throw new Error('No info')
  }
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
          headers: {
            Authorization: `Token ${accessToken}`,
            ...headers,
            'Content-Type': 'application/json'
          },
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
      if (!response.of) {
        console.log("Not data")
      }
      if (!json) {
        console.log('Not data json')
      }
      return json ? json : response
    } catch (error) {
      throw error
    }
  }

}