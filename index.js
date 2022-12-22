const {searchDetailed} = require("./src/core.js")
/**
 * rootcf tarafından yapılan Etimoloji paketi.
 * Bu paket. Kullanıcının belirttiği kelimeyi 
 */

module.exports = {
      /**
     * @param {string} query Aratmak istediğiniz kelime
     */

      /** 
      * Belirtilen kelimeyi https://api.etimolojiturkce.com/searchdetailed adresi üzerinden aratır.
      * 
      * Örnek kullanım aşağıda verilmiştir.
      * @example
       etimoloji.search("merhaba", response => {
                 console.log(`Kelimenin kökeni ${response.name}`)
                 console.log(`Açıklama ${response.result}`)
                 console.log(`İlgili web adresi ${response.link}`)
           })
      */
    search : searchDetailed
}