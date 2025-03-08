"use strict";
// Basic types
// 1/ Premetive types (num, string, boolean)
// 2/ array
// 3/ Tuples
// 4/ Enums
// 5/ any, unknown, void, null, undefined, never
//  Primitives and reference 
// -------------------------
//  => Primitives = 2,432, true false , "tasin" ,   ==> we can copy it 
//  => Reference = (), {}, []   ==> but we can't copy it directly
// Array
// -------------------------
let a = [1, 3, 5, 64, "tasin", "ahamed"];
// Tuples
// -------------------------
let a2 = [23, "tasin"];
//*  Note:  tuples is one kind o array but in tuples we can fix the index type serially like the example.
// Enums
// -------------------------
// ==> by this we can setup properties and value like object.
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["GUEST"] = "guest";
    UserRole["SUPER_ADMIN"] = "super_admin";
})(UserRole || (UserRole = {}));
UserRole.ADMIN;
// Never
// -------------------------
function abcd() {
    while (true) { }
}
abcd();
console.log("hey");
// Note: when i define the function as never the function will not run next line .
