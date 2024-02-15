var Elinp = document.querySelector('.inp')
function fn(){
    var Elmun = Elinp.value
    if(Elmun % 3 == 0 && Elmun % 7 == 0 ){
        console.log('FizzBuzz')
    }else if(Elmun % 7 == 0){
        console.log('Buzz')
    }else if(Elmun % 3 == 0){
        console.log('Fizz')
    }else{
        console.log('Uchga va yettiga bolinmaydi')
    }
}