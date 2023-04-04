let dbUsers = [
    {
        username: "Fifee",
        password: "abcd",
        name: "Fifee Zaheed",
        email: "fifee2000@gmail.com"
    },
    {
        username: "Kei",
        password: "1234",
        name: "Keima",
        email: "kei@gmail.com"
    },
    {
        username: "Kei",
        password: "1234",
        name: "Keima",
        email: "kei@gmail.com"  
    }

]

function login(reqUsername, reqPassword) {
    let matchUser = dbUsers.find(
        x => x.username == reqUsername      
    )
    console.log(matchUser)
    if (!matchUser) return "User not found!"
    if(matchUser.password ==reqPassword){
        return matchUser
    } else{
        return "Invalid password!"
    }

}

function register(reqUsername,reqPassword,reqName,reqEmail){
    dbUsers.push({
        username: reqUsername,
        passwrod: reqPassword,
        name: reqName,
        email: reqEmail

    })
}

// try to login
console.log(login("Fifee","abcd"))
console.log(login("utem","password"))
console.log(login("Kei","password"))

register("utem","password","fkekk","fkekk@,com")
console.log(login("utem","password"))




