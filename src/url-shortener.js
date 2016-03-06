var dataBase=[];
var idGenerator=0;


module.exports = {
  shotener: function(urlString){
      var index = urlExist(urlString);
      var result;
      if(index==-1){
          result = {orogonalURL:urlString, id:idGenerator, shortUrl:"http://shortUrl/"};
          idGenerator++;
          result.shortUrl+=base62Encode(1);
          dataBase.push(result);
      }
      else{
        result = dataBase[index];
      }
      console.log(result);
      return result;
     
  }
};


function urlExist(urlString){
    for (var i=0; i<dataBase.length;i++){
        if (dataBase[i].orogonalURL==urlString){
            return i;
        }
    }
    return -1;
}


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