const Quran = require('./lib/app/Quran')

class App {
  constructor () {
    this.quran = new Quran()
  }

  /**
   * get chapter list
   * @param params
   * @returns {Promise<void>}
   */
  async getChapterList (params) {
    await this.quran.getChapterList({...params})
  }

  /**
   * get juz list
   * @param params
   * @returns {Promise<void>}
   */
  async getJuzList (params) {
    await this.quran.getJuzList({...params})
  }

  /**
   * get chapter by id
   * @param params
   * @returns {Promise<void>}
   */
  async getChapterById (params) {
    await this.quran.getChapterById({...params})
  }

  /**
   * get verse by chapter id
   * @param params
   * @returns {Promise<void>}
   */
  async getVerseByChapterId (params) {
    await this.quran.getVerseByChapterId({...params})
  }

  /**
   * get verse by page
   * @param params
   * @returns {Promise<void>}
   */
  async getVerseByPage (params) {
    await this.quran.getVerseByPage({...params})
  }

  /**
   * get verse by juz
   * @param params
   * @returns {Promise<void>}
   */
  async getVerseByJuz (params) {
    await this.quran.getVerseByJuz({...params})
  }

  /**
   * get random verse
   * @param params
   * @returns {Promise<void>}
   */
  async getRandomVerse (params) {
    await this.quran.getRandomVerse({...params})
  }

  /**
   * get recitation
   * @param params
   * @returns {Promise<void>}
   */
  async getRecitation (params) {
    await this.quran.getRecitation({...params})
  }

  /**
   * get translation
   * @param params
   * @returns {Promise<void>}
   */
  async getTranslation (params) {
    await this.quran.getTranslation({...params})
  }

  /**
   * get language
   * @param params
   * @returns {Promise<void>}
   */
  async getLanguage (params) {
    await this.quran.getLanguage({...params})
  }

  /**
   * get all audio surah by recitation
   * @param params
   * @returns {Promise<void>}
   */
  async getAllAudioSurahByRecitation (params) {
    await this.quran.getAllAudioSurahByRecitation({...params})
  }

  /**
   * get single audio surah by recitation
   * @param params
   * @returns {Promise<void>}
   */
  async getSingleAudioSurahByRecitation (params) {
    await this.quran.getSingleAudioSurahByRecitation({...params})
  }

  /**
   * get verse audio by surah and recitation
   * @param params
   * @returns {Promise<void>}
   */
  async geVerseAudioBySurahAndRecitation (params) {
    await this.quran.geVerseAudioBySurahAndRecitation({...params})
  }

  /**
   * get verse audio by juz and recitation
   * @param params
   * @returns {Promise<void>}
   */
  async geVerseAudioByJuzAndRecitation (params) {
    await this.quran.geVerseAudioByJuzAndRecitation({...params})
  }

  /**
   * get indopak script
   * @param params
   * @returns {Promise<void>}
   */
  async getIndopakScript (params) {
    await this.quran.getIndopakScript({...params})
  }

  /**
   * get uthmani script
   * @param params
   * @returns {Promise<void>}
   */
  async getUthmaniScript (params) {
    await this.quran.getUthmaniScript({...params})
  }
}

module.exports = new App()
