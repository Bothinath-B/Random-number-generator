function GenerateRandom()
{
    var x=document.getElementById('start').value;
    var y=document.getElementById('end').value;
    var randomnum=Math.floor((Math.random()*y)+1);
    var count=0;
    if(y==0 && randomnum==1)
    {
        count=1;
        alert('Please Enter The Numbers!')
    }
    else
    {
    while(randomnum<x)
    {
        var randomnum=Math.floor((Math.random()*y)+1);
    }
    document.getElementById("displayRandom").innerHTML='Random number:'+randomnum;
    }
    ResultBackground(count);
}

function ResultBackground(check) 
{
  if(check==0)
  {
  document.getElementById("result").style.backgroundColor = "white";
  }
}