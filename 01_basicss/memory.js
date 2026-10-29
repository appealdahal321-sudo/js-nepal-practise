// stack(primitive)  heap(reference:non-primitive)

let myGang = "DahalGang"


let anotherGang = myGang

anotherGang = "Lundians"

console.log(anotherGang);
console.log(myGang);


let userone = {
    email : "behal@gmail.com",
    upi : "genfu@bj"
}

let usertwo = userone

usertwo.email = "sekih@gmail.com"

console.log(userone.email);

console.log(usertwo.email);



