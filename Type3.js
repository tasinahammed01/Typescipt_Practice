"use strict";
// Interfaces and type alaiases
// *Defining interfaces
// *Using interfaces to define object shapes
// *Extending INterfaces
// *Type aliases
// *Intersection types
// ------------------------------------------------------------
// ------------------------------------------------------------
function getUser(obj) {
}
getUser({ name: "tasin", email: "abcd@gmail.com", password: "938jd834" });
function getAdmin(obj) {
    obj.admin;
    obj.name;
    obj.email;
}
function AllComments(commentsObj) {
    commentsObj.firstComment;
    commentsObj.SecondComment;
}
//  Note =>  Here if we declare  interface name same they will be marge  and when we want to access the interface data those indivisual data with same interface will be shown in the fuction.
