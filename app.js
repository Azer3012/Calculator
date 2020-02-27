(function(){

    let screen  = document.querySelector('.text');
    let buttons = document.querySelectorAll('.btn-num');
    let clear   = document.querySelector('.delete');
    let equal   = document.querySelector('.equal');
    
    buttons.forEach(function(button){
        button.addEventListener('click',function (e) {
            let value = e.target.dataset.num;
            //screen.value = screen+value;
            screen.value += value;
    
        })
    });
    
    equal.addEventListener('click', function(e) {
        if(screen.value == '')
        {
            screen.value = 'Zehmet olmasa reqem daxil edin!';
        } 
        else
        {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    
    clear.addEventListener('click', function(e) {
        screen.value = '';
    })
    
    
    })();