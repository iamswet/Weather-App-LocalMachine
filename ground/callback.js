const add = (a,b,callback)=>{
    setTimeout(()=>{
        callback(a+b)
    },5000)
}

add(5,4,(sum)=>{
    console.log(sum)
})

console.log("printed first")