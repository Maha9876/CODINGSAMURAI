function getnum(val){
    let a=document.getElementById("inputvalue")
    a.value=a.value+val
}

function solve(){
    let x=document.getElementById("inputvalue").value
    let y=eval(x)
    
    document.getElementById("inputvalue").value=y
}
function clearval(){
    let a=document.getElementById("inputvalue")
    a.value=''
}
function backspace(){
    let a=document.getElementById("inputvalue").value
    if(a.length>0){
        a=a.slice(0,a.length-1)
    }
    console.log(a)
    document.getElementById("inputvalue").value=a
}