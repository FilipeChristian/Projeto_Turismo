    let count = 1;
let intervelID = setInterval(function(){
    count++
    if(count > 3){
        count = 1;
    }
    
    for(let i = 1;i <= 3;i++){
        document.getElementById("radio" + i).checked = false
    }

    document.getElementById("radio" + count).checked = true

}, 2000)

for(let i = 1;i < 3;i++){
    const radio = document.getElementById("radio" + i)

    radio.addEventListener('click', function(){
        clearInterval(intervelID);
    })


}

