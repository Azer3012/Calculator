(function(){   //esas funksiya

    let screen  = document.querySelector('.text');
    let buttons = document.querySelectorAll('.btn-num');
    let clear   = document.querySelector('.delete');
    let equal   = document.querySelector('.equal');
    
    buttons.forEach(function(button){                 // butonlari loopa salib data numlarini ekrana beraber etmek
        button.addEventListener('click',function (e) {
            let value = e.target.dataset.num;
            //screen.value = screen+value; bucur de yazmaq olar
            screen.value += value;
    
        })
    });
    
    equal.addEventListener('click', function(e) {  //netice ucun funksiya
        if(screen.value == '')
        {
            screen.value = 'Zehmet olmasa reqem daxil edin!';
        } 
        else
        {
            let answer = eval(screen.value);  //kalkulyator ucun lazimi eval() metodu ile ekrana cixartmaq
            screen.value = answer;
        }
    })
    
    clear.addEventListener('click', function(e) { // c knopkasi ile ekrani temizlemek
        screen.value = '';
    })
    
    
    })


    (); //adI olmasa da esas funksiyadi :)