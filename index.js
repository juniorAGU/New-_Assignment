document.addEventListener("DOMContentLoaded",() => {
let buttn = document.getElementById("cal1")
let ck1 = document.getElementById("demo1")
let clippers = document.getElementById("cal2")
let ck12 = document.getElementById("demo2")
buttn.onclick = () => {
    if(ck1.innerHTML === ""){
    fetch("./index.json")
.then(response => response.json())
.then(me1 => {
    let cuz1 = me1.car1
    ck1.innerHTML = cuz1.map(cars => {
        return(`Name: ${cars.name}, Model: ${cars.model}, Color: ${cars.color}`)
    }).join("<br>")
})
.catch(error => console.error("error fetching JSON:", error));
}else {
     ck1.innerHTML = ""
}
};


clippers.onclick = () => {
    if(ck12.innerHTML === ""){
    fetch("./index.json")
.then(response => response.json())
.then(me12 => {
    let cuz12 = me12.car2
    ck12.innerHTML = cuz12.map(cars => {
        return(`Name: ${cars.name}, Model: ${cars.model}, Color: ${cars.color}`)
    }).join("<br>")
})
.catch(error => console.error("error fetching JSON:", error));
}else {
     ck12.innerHTML = ""}
}
    });
// for the second car


//  fetch("./index.json")
// .then(response => response.json())
// .then(me1 => {
//     let cuz1 = me1.car3
//     let ck1 = document.getElementById("demo1")
//     ck1.innerHTML = cuz1.map(cars => {
//         return(`Name: ${cars.name}, Model: ${cars.model}, Color: ${cars.color}`)
//     }).join("<br>")
// })
// .catch(error => console.error("error fetching JSON:", error));





// let ck1 = document.getElementById("demo1")
// ck1.innerHTML = cuz1.map((cars) => {
//     return(`Name: ${cars.name}, Model: ${cars.model}, Color: ${cars.color} `)
// }).join("<br>")






// let car1 = document.getElementById("demo1")
// let cuz1 = [{name: "toyota v6", model: "2019", color: "yellow"},{name:"toyota supra",model:"2018 limi",color: "whiite"}]
// car1.innerHTML = cuz1.map((car) => {
//     return(`Name: ${car.name}, Model: ${car.model}, Color: ${car.color}`)
// }).join("<br>")
