
function display(val)
{
    document.getElementById("monitor").value+= val;
}

function solve()
{
    var x = document.getElementById("monitor").value;
    var y =eval (x);
    document.getElementById("monitor").value = y.toFixed(2);
}

function clearMonitor()
{
    document.getElementById("monitor").value = " ";
}