
//document.addEventListener(('DOMContentLoaded'),function(){
//const button = document.getElementById('btn');
//});


//alert('Element clicked through function!');
//});

function random(){
//alert('Element clicked through function!');

    var choice = document.getElementById('menulist').value;
    var count = document. getElementById('count').value;
   // alert(choice);
    //alert(count);
    if (choice = 'sandwich'){
        var sandprice = 6.99;
        var total = sandprice * count;
        alert("1-Your total price is " + total);
    }
    else if (choice = 'salad'){
        var salprice = 4.99;
        var total = salprice * count;
        alert("2-Your total price is " + total);
    }
    else
        if (choice = 'platter'){
        var plattprice = 5.99;
        var total = plattprice * count;
        alert("3-Your total price is " + total);
    }else
         if (choice = 'quit'){
    alert("Thank you for using Quad Shop");
         }
        }


    
    /*switch (choice){
        case "sand":
            const sandprice = 3.99;
            var total = sandprice * count;
            alert("Your total price is " + total);
        break;
            case "sal":
                const salprice = 4.99;
                var total = salprice * count;
            
            alert("Your total price is " + total);
        break;
                case "platt":
                    const plattprice = 5.99;
                    var total = plattprice * count;
                alert("Your total price is " + total);
        break;


    }*/

