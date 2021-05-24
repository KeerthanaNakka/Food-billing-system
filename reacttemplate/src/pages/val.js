
function getdetails()
{
    var name=document.getElementById("customertext");
    var mobile=document.getElementById("customermobile");
    var orderdate=document.getElementById("orderdate");

    var OptChickenRiceBowl=document.getElementById("OptChickenRiceBowl");
    var OptPopcornRiceDuo=document.getElementById("OptPopcornRiceDuo");
    var OptVegRiceBowl=document.getElementById("OptVegRiceBowl");

    var OptBurger=document.getElementById("OptBurger");
    var OptPizza=document.getElementById("OptPizza");
    var OptFries=document.getElementById("OptFries");
    var OptChickenPopcorn=document.getElementById("OptChickenPopcorn");

    var OptRedbull=document.getElementById("OptRedbull");
    var OptPepsi=document.getElementById("OptPepsi");

    var OptChocoKrusher=document.getElementById("OptChocoKrusher");
    var OptStrawberryKrusher=document.getElementById("OptStrawberryKrusher");
    var OptVanillaKrusher=document.getElementById("OptVanillaKrusher");

    var customername=name.value;
    var customermobile=mobile.value;
    var date=orderdate.value;
    

    var mealname="";
    var snacksname="";
    var Beveragename="";
    var krushername="";
    var mealcost=0;
    var snackscost=0;
    var beveragecost=0;
    var krushercost=0;
    var total=0;

    if(OptChickenRiceBowl.checked)
    {
        mealname=OptChickenRiceBowl.value;
        mealcost=210;
    }
    if(OptPopcornRiceDuo.checked)
    {
        mealname=OptPopcornRiceDuo.value;
        mealcost=240;
    }
    if(OptVegRiceBowl.checked)
    {
        mealname=OptVegRiceBowl.value;
        mealcost=170;
    }
    if(OptBurger.checked)
    {
        snacksname=OptBurger.value;
        snackscost=120;
    }
    if(OptPizza.checked)
    {
        snacksname=OptPizza.value;
        snackscost=145;
    }
    if(OptFries.checked)
    {
        snacksname=OptFries.value;
        snackscost=60;
    }
    if(OptChickenPopcorn.checked)
    {
        snacksname=OptChickenPopcorn.value;
        snackscost=115;
    }
    total=mealcost+snackscost;
    if(OptRedbull.checked)
    {
        Beveragename+=OptRedbull.value+"<br>";
        beveragecost=90;
        total+=beveragecost;
    }
    if(OptPepsi.checked)
    {
        Beveragename+=OptPepsi.value+"<br>";
        beveragecost=85;
        total+=beveragecost;
    }
    if(OptChocoKrusher.checked)
    {
        krushername=OptChocoKrusher.value;
        krushercost=40;
        total+=krushercost;
    }
    if(OptStrawberryKrusher.checked)
    {
        krushername=OptStrawberryKrusher.value;
        krushercost=45;
        total+=krushercost;
    }
    if(OptVanillaKrusher.checked)
    {
        krushername=OptVanillaKrusher.value;
        krushercost=55;
        total+=krushercost;
    }
    document.getElementById("nameinbill").innerHTML=customername;
    document.getElementById("mobileinbill").innerHTML=customermobile;
    document.getElementById("dateinbill").innerHTML=date;
    document.getElementById("mealinbill").innerHTML=mealname;
    document.getElementById("snacksinbill").innerHTML=snacksname;
    document.getElementById("beveragesinbill").innerHTML=Beveragename;
    document.getElementById("krushersinbill").innerHTML=krushername;
    document.getElementById("totalbill").innerHTML="&#8377;"+total+"/-";
    
}