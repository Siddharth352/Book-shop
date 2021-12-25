

function createBookNewObject(AuthorName,BookName,Theme,DownloadLink,marketprice,bookid){
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

function createUserNewObject(username,firstName,lastName,age,phoneNumber,password,email){
        var newObject = {userName:"",firstName:"",LastName:"",age:"",password:"",email:"",phoneNumber:""};
            newObject.userName = username;
            newObject.firstName = firstName;
            newObject.LastName = lastName;
            newObject.age =age;
            newObject.password =password;
            newObject.email = email;
            newObject.phoneNumber=phoneNumber;
        return newObject;    
        }    
export {createBookNewObject, createUserNewObject} ;   