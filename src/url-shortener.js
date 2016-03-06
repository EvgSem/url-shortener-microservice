var dataBase=[];
var idGenerator=0;

function shotener(urlString){
  var index = urlExist(urlString);
    console.log("Input: " + urlString);
  var result;
  if(index==-1){
      console.log("I am in if");
      result = {originalURL:urlString, id:idGenerator, shortUrl:"http://shortUrl/"};
      idGenerator++;
      result.shortUrl+=base62Encode(result.id);
      dataBase.push(result);
  }
  else{
      console.log("I am in else");

      result = dataBase[index];
  }
  console.log("DataBaseLengthEnd: " + dataBase.length);
  return result;
};


function urlExist  (urlString) {
    for (var i = 0; i < dataBase.length; i++) {
        if (dataBase[i].originalURL == urlString) {
            return i;
        }
    }
    return -1;
};

module.exports.shotener = shotener;
module.exports.urlExist = urlExist;
module.exports.dataBase = dataBase;
module.exports.idGenerator = idGenerator;

function base62Encode(num){
    var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    if (num == 0){
        return alphabet[0];
    }
    var arr = [];
    var base = alphabet.length;
    var rem;
    while (num){
        rem = parseInt(num % base);
        num = parseInt(num / base);
        arr.push(alphabet[rem]);
        console.log(rem);
    }
    arr.reverse();
    return arr.join('');
}