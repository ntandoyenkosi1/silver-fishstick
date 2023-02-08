// // source of data
var obj = [
    {
        "name": "Messi",
        "goals": ["22"]
    },
    {
        "name": "Ronaldo",
        "goals": ["20"]
    },
    {
        "name": "Ntando",
        "goals": ["0"]
    }
]

// creating HTML elements dynamically
// for(var i=0;i<obj.length;i++){
//     var names= document.createElement("div")//<div></div>
//     names.innerText=obj[i].name //<div>Messi</div>
//     names.className="play"
//     var parent = document.querySelector("#player")
//     parent.append(names) // adds the names div to the actual HTML
// }
fetch("http://fakestoreapi.com/users")
.then(response=>response.json())
.then((data)=>{
    console.log(data)
    // stroning data on localStorage using setItem
    localStorage.setItem("data",data[0].email) // strore data
    for(var i=0;i<data.length;i++){
        // create an HTML element
        var names= document.createElement("div")//<div></div>
        // assign some data to it
        names.innerText=data[i].name.firstname //<div>Messi</div>
        // assign a class to the element
        names.className="play"
        // create an email element again
        var email=document.createElement("div")
        // assign some data to it
        email.innerText=data[i].email
        // select a parent element from the HTML
        var parent = document.querySelector("#player")
        // add the elements we created earlier to the parent element
        parent.append(names) // adds the names div to the actual HTML
        parent.append(email)
    }
})
var c=["london","accra"]
// store an object/array to localStorage: We need to stringify it first
localStorage.setItem("city",JSON.stringify(c))
localStorage.setItem("cities", "New York")
// retrieving data from localStorage, we use JSON.parse to undo JSON.string
var existingCities=JSON.parse(localStorage.getItem("city"))
console.log(existingCities)