function converter(){
    var binario = document.getElementById('bin')
    var res = document.getElementById('res')
    var bin = Number(binario.value)
    var decimal = parseInt(bin , 2)

    
   
    res.innerHTML += decimal
    
}