# Etimoloji
Türkçe kelimelerin kökenlerini göstermek için https://api.etimolojiturkce.com/searchdetailed Adresine istek gönderen bir paket.

⚠ Bu paket sadece api.etimolojiturkce.com adresinden gelen çıktıları derli toplu bir şekilde kullanıcıya sunar. Hatalar oluşabilir. 


## Örnek Kullanım
```js
const etimoloji = require('etimoloji')

etimoloji.search("merhaba", response => {
                 console.log(`Kelimenin kökeni ${response.name}`)
                 console.log(`Açıklama ${response.result}`)
                 console.log(`İlgili web adresi ${response.link}`)
 })
```
