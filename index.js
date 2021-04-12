
const pop=() =>{
    var x=document.getElementById("s").value;
    var v=0;
    var c=0;
    var d=0;
    var s=0;
    var sc=0;
    v=x.match(/[aeiou]/gi).length;
    
    for( i=0;i<x.length;i++)
    {
        if(x[i]==" ")
        s=s+1;
        if(['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','s'].includes(x[i]))
        c=c+1;
    }
    
    d=x.match(/[0-9]/gi).length;
    
    sc=x.length-(v+c+d+s);
    document.getElementById("C").innerHTML=c;
    document.getElementById("V").innerHTML=v;
    document.getElementById("SP").innerHTML=s;
    document.getElementById("SPE").innerHTML=sc;
    document.getElementById("D").innerHTML=d;
}