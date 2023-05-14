var i=0;
var suv=["suv1","suv2","suv3","suv4","suv5","suv6"];
var hb=["hb1","hb2","hb3","hb4","hb5"];
var sedan=["sedan1","sedan2","sedan3","sedan4","sedan5","sedan6"];
var box=document.getElementById("container");
var close=document.getElementById("close");
var img;
var newWidth=window.innerWidth;
var newHeight=window.innerHeight;

const hyundaiVenue={
   name:"Hyundai Venue", price: "7.53 lakhs",feature1 : "2 air bags",feature2: "front wheel drive",feature3:"17.5 milleage",type:"manual",
    decs:"Hyundai Creta is a 5 seater SUV available in a price range of Rs. 10.44 - 18.24 Lakh*. It is available in 27 variants, 3 engine options that are BS6 compliant"  
}

const hyundaiKona={
   name:"Hyundai Kona", price: "9 - 18 lakhs",feature1 : "6 air bags",feature2: "16-inch alloy wheels",feature3:"200mm ground clearance", type:"automatic",
    decs:"Hyundai Creta is a 5 seater SUV available in a price range of Rs. 10.44 - 18.24 Lakh*. It is available in 27 variants, 3 engine options that are BS6 compliant"  
}

const audiQ3={
   name:"Audi Q3", price: "44 lakhs",feature1 : "6 air bags",feature2: "All wheel drive",feature3:"0-100 7.3seconds", type:"automatic",
    decs:"Audi Q3 is a SUV car available from Rs. 44.89 - 50.39 Lakh in India. Q3 is available in 5 colours and 2 versions"  
}

const jeepCompass={
   name:"Jeep Compass", price: "20 lakhs",feature1 : "2 Airbags",feature2: "Four wheel drive",feature3:"168 bhp @ 3750 rpm -Engine Power  ", type:"Manual 6-gear",
    decs:"Jeep Compass Engine. Jeep has equipped the Compass with a 163PS 1.4-litre turbo-petrol and a 172PS 2.0-litre diesel engine, with a 6-speed manual as standard."
}

const toyotaLandCruiser={
   name:"Toyota LandCruiser", price: "1.50 Cr lakhs",feature1 : "7-seater",feature2: "Four wheel drive",feature3:"0-60 12.7 seconds ", type:"Automatic",
    decs:"The Toyota Land Cruiser is a rugged, go-anywhere four-wheel drive SUV with a spacious cabin and a durable diesel engine with plenty of pulling power."
}

const toyotaRAV4={
   name:"Toyota RAV4", price: "27.5 lakhs",feature1 : "4-seater",feature2: "Four wheel drive",feature3:"184 bhp @ 5000 rpm -Engine Power ", type:"Automatic",
    decs:"The Toyota Land Cruiser is a rugged, go-anywhere four-wheel drive SUV with a spacious cabin and a durable diesel engine with plenty of pulling power."
}

const fordFiesta={
   name:"Ford Fiesta", price: "8.63 lakhs",feature1 : "Four wheel drive",feature2: "Four wheel drive",feature3:"430 liters boot space", type:"Manual",
    decs:"The Fiesta is powered by a 1.5 litre diesel engine with produces 91bhp along with a peak torque of 2015Nm. The engine is mated to a 5-speed manual gearbox "
}

const volkswagongti={
   name:"Volkswagon GTI", price: "20.7 lakhs",feature1 : "279liters boot space",feature2: "0-100 18.64 seconds",feature3:"16.34-mileage", type:"Automatic",
    decs:"Despite a few interior hiccups the 2023 Volkswagen Golf GTI remains our top-ranked sport compact car, masterfully blending performance with practicality."
}

const renaultKwid={
   name:"Renault Kwid", price: "4.64 lakhs",feature1 : "2-Airbags",feature2: "Four wheel drive",feature3:"20.7-mileage", type:"Manual",
    decs:"Renault Kwid price starts at ₹ 4.64 Lakh and goes upto ₹ 6.09 Lakh (Avg. ex-showroom). Kwid comes in 10 variants. Kwid top model price in petrol is ₹ 6.09 Lakh. Whereas the price of Kwid automatic version starts from ₹ 5.79 Lakh"
}

const hyundaii30n={
   name:"Hyundai i30n", price: "10 lakhs",feature1 : "2-Airbags",feature2: "120 bhp",feature3:"11-mileage", type:"Manual",
    decs:"Balancing exquisite power and racetrack-ready driving dynamics with comfort-oriented daily commuting - the new i30 N truly is a race car for every day."
}

const tataAltroz={
   name:"Tata Altroz", price: "6.30 lakhs",feature1 : "108bhp Engine power",feature2: "345 liters Boot space",feature3:"23-mileage", type:"Manual/Automatic",
    decs:"The Altroz is Tata's premium hatchback that sits above the Tiago in the brand's model range. It is available with a 1.2-litre naturally."
}

const bmw5={
   name:"BMW 5 series", price: "64 lakhs",feature1 : "remote parking",feature2: "Adaptive susupension",feature3:"17.42-mileage", type:"Automatic",
    decs:"The BMW 5 series is here with the power to take you farther. Faster. Best-in-class acceleration that sets you apart from the rest."
}

const mercedesEClass={
   name:"Mercedes E-class", price: "67 lakhs",feature1 : "Rear wheel drive",feature2: "0-100 in 7seconds",feature3:"16.1-mileage", type:"Automatic",
    decs:"The new E-Class debuts with comprehensive changes on exterior styling and design, significant interior updates along with the integration of latest technology"
}

const jaguarXF ={
   name:"Jagaur XF", price: "71 lakhs",feature1 : "2-Airbags",feature2: "Four wheel drive",feature3:"14.4-mileage", type:"Automatic",
    decs:"Jaguar XF Variants. Jaguar offers the facelifted XF in a fully loaded R-Dynamic trim. Jaguar XF Features. The facelifted Jaguar XF features an 11.4-inch screen"
}

const hondaAccord={
   name:"Honda Accord", price: "21.1 lakhs",feature1 : "8-Airbags",feature2: "Front wheel drive",feature3:"19.94-mileage", type:"Automatic",
    decs:"The lineup starts with a 192-hp turbocharged 1.5-liter four-cylinder,The Accord's interior is surprisingly spacious, and rear-seat passengers will be happier in an Accord than in almost any other mid-size sedan"
}

const audiA3={
   name:"Audi A3", price: "29 lakhs",feature1 : "8-Airbags",feature2: "Front wheel drive",feature3:"16.7-mileage", type:"Automatic",
    decs:"The 2023 Audi A3 packs a lot of premium content into its compact four-door body, and it also features spry handling and strong performance"
}

const bmwM2={
   name:"BMW M2", price: "81 lakhs",feature1 : "8-Airbags",feature2: "Front wheel drive",feature3:"10.6-mileage", type:"Automatic",
    decs:"The all-new BMW M2 Competition gets an inline 6, 3-litre, twin-turbocharged engine that makes a whopping 405 bhp of peak power and 550 Nm of rear torque"
}

window.onload = function(){

    // document.getElementById(suv[4]).style.display="none";
    // document.getElementById(suv[5]).style.display="none";

    // document.getElementById(hb[4]).style.display="none";

    // document.getElementById(sedan[4]).style.display="none";
    // document.getElementById(sedan[5]).style.display="none";

    if(newWidth <1074  )
   {
        document.getElementById(suv[3]).style.display="none";
        document.getElementById(suv[4]).style.display="none";
        document.getElementById(suv[5]).style.display="none";

        document.getElementById(hb[3]).style.display="none";
        document.getElementById(hb[4]).style.display="none";

        document.getElementById(sedan[3]).style.display="none";
        document.getElementById(sedan[4]).style.display="none";
        document.getElementById(sedan[5]).style.display="none";
    }
    else
    {
        document.getElementById(suv[3]).style.display="flex";
        document.getElementById(suv[4]).style.display="none";
        document.getElementById(suv[5]).style.display="none";

        document.getElementById(hb[3]).style.display="flex";
        document.getElementById(hb[4]).style.display="none";

        document.getElementById(sedan[3]).style.display="flex";
        document.getElementById(sedan[4]).style.display="none";
        document.getElementById(sedan[5]).style.display="none";
    }
}

window.onresize= function(){
    if(newWidth>=1074)
    {
        location.reload();
    }
}

window.addEventListener('resize', function(event){
   
    newWidth = window.innerWidth;
    newHeight = window.innerHeight; 
    if(newWidth <1074  )
   {
        document.getElementById(suv[3]).style.display="none";
        document.getElementById(suv[4]).style.display="none";
        document.getElementById(suv[5]).style.display="none";

        document.getElementById(hb[3]).style.display="none";
        document.getElementById(hb[4]).style.display="none";

        document.getElementById(sedan[3]).style.display="none";
        document.getElementById(sedan[4]).style.display="none";
        document.getElementById(sedan[5]).style.display="none";
    }
    else
    {
        document.getElementById(suv[3]).style.display="flex";
        document.getElementById(suv[4]).style.display="none";
        document.getElementById(suv[5]).style.display="none";

        document.getElementById(hb[3]).style.display="flex";
        document.getElementById(hb[4]).style.display="none";

        document.getElementById(sedan[3]).style.display="flex";
        document.getElementById(sedan[4]).style.display="none";
        document.getElementById(sedan[5]).style.display="none";
    }
});



function carFront(j)
{ 
    if(newWidth <1074  )
    {
        if(i<3)
        {
            document.getElementById(j[i]).style.display="none";
            document.getElementById(j[i+3]).style.display="flex";
            i++;
        }
    }
    else
    {

        if(i<2)
        {
            document.getElementById(j[i]).style.display="none";
            document.getElementById(j[i+4]).style.display="flex";
            i++;
        }
    }
   
}

function carBack(j)
{
    if(newWidth <1074  )
    {
        if(i>0)
        {
            i--;
            document.getElementById(j[i]).style.display="flex";
            document.getElementById(j[i+3]).style.display="none"; 
        }
    }
    else
    {
        if(i>0)
        {
            i--;
            document.getElementById(j[i]).style.display="flex";
            document.getElementById(j[i+4]).style.display="none"; 
        }
       
    }
   
}
function carFrontH(j)
{ 
    if(i<1)
    {
        document.getElementById(j[i]).style.display="none";
        document.getElementById(j[i+4]).style.display="";
        i++;
    }
}

function carBackH(j)
{
    if(i>0)
    {
        i--;
        document.getElementById(j[i]).style.display="";
        document.getElementById(j[i+4]).style.display="none"; 
    }
}

function openBox(type,num,name)
{
  console.table(name.name)
    document.body.style.margin="0px";
    img=type+'_'+num+'.png';
    document.getElementById("boximg").src=`images/${img}`;
    document.getElementById("carname").innerHTML=name.name;
    document.getElementById("cardes").innerHTML=`<p>${name.decs}</p> <ul><li>${name.type}</li><li>${name.feature1}</li> <li>${name.feature2}</li><li>${name.feature3}</li></ul>`;
    box.style.display="block";
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}


close.onclick = function() {
    box.style.display="none";
    document.body.style.margin="0px 16px";
    window.onscroll = function() {}
}


