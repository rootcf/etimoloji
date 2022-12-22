const axios = require("axios");
var html2json = require('html2json').html2json;

module.exports = {
    searchDetailed : function request(query,callback) {
            axios.get(`https://api.etimolojiturkce.com/searchdetailed/${query}`,
            {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept-Encoding": "*",
              },
            })
            .then(body => {
             
                try{
                let promise = new Promise(async (resolve, reject) =>{
                    if (!query)
                      return 
                      const output = []
                      let _result = ''
                      let _name = ' '
                   const newBody = body.data
           
                   const json = html2json(newBody[0].koken)
                  
                   for (let i = 0; i < json.child.length; i++) {
                    const element = json.child[i];
                    if (element.node === 'element' && i == 1) {
                      // İlk element türünde elemanı bulunca döngüden çıkıyoruz
                      _name = element.child[0].text
                   
                    } else if (element.node === 'text' && i != 0 && element.text != ' ') {
                      // Eğer text türünde bir eleman ise, sonuç dizisine ekliyoruz
                      _result += element.text;
                    }
                     else if (element.node === 'element'&& i != 0  && element.child[0].text != ' ') {
                      // Eğer text türünde bir eleman ise, sonuç dizisine ekliyoruz
                      _result += element.child[0].text;
                    }
                  }
                 
                  output.push({"name": _name,"result" : _result,"link" : `https://www.etimolojiturkce.com/kelime/${query}`})
               
                  resolve(output[0])

                });
                promise.then(result => {
                    callback(result)

                });
            }
                catch{
    
                }
        
            }); 
    }
}