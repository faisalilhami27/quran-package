const axios = require('axios')

class Http {
  #baseURL = 'https://api.quran.com/api/v4'
  constructor (props) {
    this.props = props
  }

  /**
   * Initialization for HTTP client
   */
  async initHttp () {
    const options = this.props
    return axios.create({
      baseURL: `${this.#baseURL}/${options.baseURL}`,
      timeout: options.timeout,
      headers: options.headers,
      params: options.params
    });
  }
}

module.exports = Http
