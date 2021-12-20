

function createNewObject(AuthorName,BookName,Theme,DownloadLink,marketprice,bookid){
    var newObject = {name:"",author:"",description:"",download_link:"",cost:""};
        newObject.author = AuthorName;
        newObject.name = BookName;
        newObject.description =Theme;
        newObject.download_link =DownloadLink;
        newObject.cost = marketprice;
        if (bookid!=null){
            newObject.id = bookid;            
        }
    return newObject;    
    }
export {createNewObject} ;   