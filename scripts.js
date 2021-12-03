function checkUsername(){
    var alMsg = document.getElementById('feedback');
    if(this.value.length < 5){
        elMsg.textContent = 'Username must be 5 characters or more';

    }else{
        elMsg.textContent = '';
    }
}
var elUsename = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false);