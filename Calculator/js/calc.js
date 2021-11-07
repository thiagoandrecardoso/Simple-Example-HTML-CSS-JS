function insert_numbers(num)
{
    var number = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = number + num;
}

function clean()
{
    document.getElementById('result').innerHTML = "";
}

function back()
{
    var len  = document.getElementById('result').innerHTML.length;
    var result =  document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, len - 1);
}

function calculate()
{
    var operation = document.getElementById('result').innerHTML;
    if(operation)
    {
        document.getElementById('result').innerHTML = eval(operation);
    }
}