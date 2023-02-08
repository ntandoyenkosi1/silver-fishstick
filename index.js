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
    localStorage.setItem("data",data[0].email) // strore data
    for(var i=0;i<data.length;i++){
        var names= document.createElement("div")//<div></div>
        names.innerText=data[i].name.firstname //<div>Messi</div>
        names.className="play"
        var email=document.createElement("div")
        email.innerText=data[i].email
        var parent = document.querySelector("#player")
        parent.append(names) // adds the names div to the actual HTML
        parent.append(email)
    }
})
var c=["london","accra"]
localStorage.setItem("city",JSON.stringify(c))
localStorage.setItem("cities", "New York")