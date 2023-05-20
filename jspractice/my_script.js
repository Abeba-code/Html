
// function myDemo(){
//     document.getElementById ("demo").innerHTML="this is my first js"
//     }

    function minMax(){
        let num1=document.getElementById("num1").value;
        let num2=document.getElementById("num2").value;
        let num3=document.getElementById("num3").value;

        let min = Math.min(num1, num2, num3)

        let max = Math.max(num1, num2, num3)

        document.getElementById("min").innerHTML = min
       
    }