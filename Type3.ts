// Interfaces and type alaiases
// *Defining interfaces
// *Using interfaces to define object shapes
// *Extending INterfaces
// *Type aliases
// *Intersection types
// ------------------------------------------------------------
// ------------------------------------------------------------






// *Using interfaces to define object shapes
// ================================================


interface User1{
    name: string;
    email: string;
    password: string;
    gender?: string;   // we use the ? to avoid the error of ts when anyone not want to input any value
}


function getUser(obj: User1){
    
    
}

getUser({name:"tasin",email:"abcd@gmail.com", password: "938jd834"})



// *Extending INterfaces
// =============================


interface User2 {
    name: string;
    email: string;
    password: string;
}

interface admin extends User1, User2{
    admin: boolean;

}

function getAdmin(obj: admin){
    obj.admin
    obj.name
    obj.email
}

// Note: =>  If we use extends  we can access the user 2 interface obj data from admin interface obj. We can also get access to multiple user interface obj data.



interface comments{
    firstComment: string; 
}
interface comments{
    SecondComment: string;
}

function AllComments(commentsObj: comments){
    commentsObj.firstComment;
    commentsObj.SecondComment;
}

//  Note =>  Here if we declare  interface name same they will be marge  and when we want to access the interface data those indivisual data with same interface will be shown in the fuction.






