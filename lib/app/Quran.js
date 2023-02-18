const Http = require('../client/http')

class Quran {
  // private property for response
  #response = null

  setResponse (response) {
    this.#response = response
  }

  getResponse () {
    return this.#response
  }

  /**
   * set options for http client
   * @param options
   * @returns {Promise<void>}
   */
  async setOption (options) {
    const http = new Http(options)
    const client = await http.initHttp()
    return this.setResponse(client)
  }

  /**
   * get chapter list
   * @returns {Promise<null>}
   */
  async getChapterList (params) {
    await this.setOption({
      baseURL: 'chapters',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get juz list
   * @returns {Promise<null>}
   */
  async getJuzList (params) {
    await this.setOption({
      baseURL: 'juzs',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get chapter by id
   * @param params
   * @returns {Promise<*>}
   */
  async getChapterById (params) {
    await this.setOption({
      baseURL: `chapters/${params.chapter_number}`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get verse by chapter id
   * @param params
   * @returns {Promise<*>}
   */
  async getVerseByChapterId (params) {
    await this.setOption({
      baseURL: `verses/by_chapter/${params.chapter_number}`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get verse by page
   * @param params
   * @returns {Promise<*>}
   */
  async getVerseByPage (params) {
    await this.setOption({
      baseURL: `verses/by_page/${params.page_number}`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get verse by juz
   * @param params
   * @returns {Promise<*>}
   */
  async getVerseByJuz (params) {
    await this.setOption({
      baseURL: `verses/by_juz/${params.juz_number}`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get random verse
   * @param params
   * @returns {Promise<*>}
   */
  async getRandomVerse (params) {
    await this.setOption({
      baseURL: `verses/random`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get recitation
   * @param params
   * @returns {Promise<*>}
   */
  async getRecitation (params) {
    await this.setOption({
      baseURL: `resources/recitations`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get translation
   * @param params
   * @returns {Promise<*>}
   */
  async getTranslation (params) {
    await this.setOption({
      baseURL: `resources/translations`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get language
   * @param params
   * @returns {Promise<*>}
   */
  async getLanguage (params) {
    await this.setOption({
      baseURL: `resources/languages`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get audio all surah by recitation
   * @param params
   * @returns {Promise<*>}
   */
  async getAllAudioSurahByRecitation (params) {
    await this.setOption({
      baseURL: `chapter_recitations/${params.recitation_id}`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get audio single surah by recitation
   * @param params
   * @returns {Promise<*>}
   */
  async getSingleAudioSurahByRecitation (params) {
    await this.setOption({
      baseURL: `chapter_recitations/${params.recitation_id}/${params.chapter_number}`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get audio specific verse by surah and recitation
   * @param params
   * @returns {Promise<*>}
   */
  async geVerseAudioBySurahAndRecitation (params) {
    await this.setOption({
      baseURL: `recitations/${params.recitation_id}/by_chapter/${params.chapter_number}`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get audio specific verse by juz and recitation
   * @param params
   * @returns {Promise<*>}
   */
  async geVerseAudioByJuzAndRecitation (params) {
    await this.setOption({
      baseURL: `recitations/${params.juz_number}/by_chapter/${params.chapter_number}`,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get indopak script
   * @param params
   * @returns {Promise<*>}
   */
  async getIndopakScript (params) {
    await this.setOption({
      baseURL: 'quran/verses/indopak',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * get uthmani script
   * @param params
   * @returns {Promise<*>}
   */
  async getUthmaniScript (params) {
    await this.setOption({
      baseURL: 'quran/verses/uthmani',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      params: params
    })

    return this.#returnResponse()
  }

  /**
   * return response
   * @returns {Promise<*>}
   */
  async #returnResponse () {
    return await this.getResponse().get()
  }
}

module.exports = Quran
