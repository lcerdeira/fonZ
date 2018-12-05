/*ridimensionamento caratteri e pagina e cambio stile per Piastrine
Jerry Masslo di mondoquarto.org settembre 2005 -
riadattato e ampliato per pitrinu luglio 2008;
ampliato per glop marzo 2009
-----
preso cerca caratteri per fonZ - esogeomedismo 2018
 */


function createCookie(name,value,days) { 
if (days) { 
var date = new Date(); 
date.setTime(date.getTime()+(days*24*60*60*1000)); 
var expires = '; expires='+date.toGMTString(); 
} 
else expires = ''; 
document.cookie = name+'='+value+expires+'; path=/';
return true;
} 
function readCookie(name) { 
var nameEQ = name + '='; 
var ca = document.cookie.split(';'); 
ritorno=false;
for(var i=0;i < ca.length;i++) { 
var c = ca[i]; 
while (c.charAt(0)==' ') c = c.substring(1,c.length); 
if (c.indexOf(nameEQ) == 0)ritorno=c.substring(nameEQ.length,c.length); 
} 
return ritorno; 
} 


function deleteCookie(name){ 
    if(readCookie(name)){ 
        createCookie(name, ''); 
}
}


vicino=0;
lontano=0;
boro=0;

function gnamBiscotti(){
if (readCookie('famiglia')) deleteCookie('famiglia');
if (readCookie('presenti')) deleteCookie('presenti');
if (readCookie('smaccatore')) deleteCookie('smaccatore');

}


function progressivo (){
bar();
//cancella cookie per evitare disturbi quando si
//si cambiano gli script
deleteCookie('famiglia');
deleteCookie('presenti');
deleteCookie('smaccatore');
deleteCookie('posLi');
createCookie('presenti','',365);
ciccio=document.getElementById('caratterizza');
/*ciccio.style="background:rgba(54, 16, 46, 0.8);";*/
ciccio.className="dietro";
ciccio.innerHTML="";
piddu=document.getElementById('cisc');
piddu.innerHTML="";

spenna=document.createElement('br');
ciccio.appendChild(spenna);
spanna=document.createElement('li');
ciccio.appendChild(spanna);
spanna.innerHTML="<p class='versione'>fonZ  Betazero 5</p>";
tasto=document.getElementById('risc');
tasto.innerHTML="";
biscia=window.setInterval("tipo()",80)
foz=document.getElementById('infonz');
foz.innerHTML="<a title='ferma la ricerca caratteri' href='javascript:ferma()'><strong>STOP</strong></a>"
foz=document.getElementById('nasc');
foz.innerHTML="<a onclick='chioso()' href='javascript:void(0)' title='esegui sullo sfondo'>nascondi</a>";
coccio=document.getElementById('chiudi');
coccio.style.visibility='hidden';
cacio=document.getElementById('tasti');
cacio.style.visibility='hidden';
}

function lentamente (){
ferma();	
biscia=window.setInterval("tipo()",350)
progressivo ();
}

function ferma(){
window.clearInterval(biscia);
ciccio=document.getElementById('caratterizza');
cerca=ciccio.lastChild;
ciccio.removeChild(cerca);
disponibili();
riscaratt();
/*piddu=document.getElementById('risc');
turi=document.getElementById('cisc');
turi.innerHTML="<a href='javascript:progressivo()'>aggiorna</a>";
piddu.innerHTML="<a href='javascript:riscaratt()'>caratteri</a>";*/
/*coccio=document.getElementById('chiudi');
coccio.style.display='block';
cacio=document.getElementById('caratteri');
cacio.style.display='block';*/
//barra progresso
cecio=document.getElementById('progbar');
cecio.innerHTML='';
vicino=0;
lontano=0;
boro=0;


}

function dopoAggiorna (){
piddu=document.getElementById('risc');
turi=document.getElementById('cisc');
turi.innerHTML="<a href='javascript:progressivo()'>aggiorna</a>";
piddu.innerHTML="<a href='javascript:riscaratt()'>caratteri</a>";
}


function tipo() {
fine=Simpatici.length;
//barra del progresso
bere=document.getElementById('progbar');
burro=Math.floor(fine/14);
biro=(vicino/burro);
birra=Math.floor(biro);

if (birra==biro) {
bere.getElementsByTagName('li')[boro].style='background:deepskyblue';
boro=boro+1;
}
//si riscrive
/*cerca=ciccio.lastChild;
ciccio.removeChild(cerca);*/
ciccio=document.getElementById('caratterizza');
piizza=document.createElement('li');
ciccio.appendChild(piizza);
piizza.innerHTML="<a style='font-family:"+Simpatici[vicino]+", sans-serif'>tanto va la gatta al lardo</a><a style='font-family:sans-serif'>tanto va la gatta al lardo</a>";

leopardi=piizza.getElementsByTagName('a')[0].offsetWidth;
manzoni=piizza.getElementsByTagName('a')[1].offsetWidth;
ciccio.insertBefore(piizza, ciccio.childNodes[0]);

//andare a capo quando scrive per aggiorna
finelinea=Math.floor(vicino/6);
carrello=document.createElement('br');
if (vicino/6==finelinea) {
ciccio.insertBefore(carrello, piizza);
}

if (leopardi==manzoni) {
piizza.innerHTML="<strike>"+Simpatici[vicino]+"</strike>";
}

else {
/*carrello=document.createElement('br');*/
piizza.innerHTML="<strong style='font-family:"+Simpatici[vicino]+"'>"+Simpatici[vicino]+"</strong>";
/*ciccio.insertBefore(carrello, piizza);*/



primaLettera=Math.floor(vicino/18);
secondaLettera=vicino-primaLettera*18;
primaLetteraAA=griglia[primaLettera];
secondaLetteraAA=griglia[secondaLettera];
zong=readCookie('presenti');
createCookie ('presenti',zong+primaLetteraAA+secondaLetteraAA,365);
lontano=lontano+1;
}
scrolla=ciccio.offsetHeight;
scrocca=ciccio.offsetWidth;

if (scrolla<scrocca) {ciccio.style="border-top-left-radius:22em; border-bottom-left-radius:22em;"};
if (scrolla>=scrocca) {ciccio.style="border-top-left-radius:2em; border-bottom-left-radius:2em;"};
//non necessario con firefox
/*if (ciccio.offsetHeight<542) {ciccio.style="border-top-left-radius:22em; border-bottom-left-radius:22em"};
if (ciccio.offsetHeight>542) {ciccio.style="border-top-left-radius:2em; border-bottom-left-radius:2em"};
*/

vicino=vicino+1;
if (vicino==fine) {
/*alert(scrolla);*/
ferma();
/*tasto=document.getElementById('risc');
tasto.innerHTML="<a href='javascript:riscaratt()'>caratteri</a>";*/
}
}

function MissCiccia() {
ciccio=document.getElementById('caratterizza');
senti=ciccio.offsetHeight;
alert(senti);
}

function bar() {
barra=document.getElementById('progbar');
for (k=0; k<16; k++) {
birra=document.createElement('li');
barra.appendChild(birra)[k];
}
}



	

griglia=new Array ('A','B','C','D','E','F','G','H','I','L','M','N','O','P','Q','R','S','T')
grigliata="ABCDEFGHILMNOPQRST";
viciniori=0;


function tastaTasto() {
ciuska=readCookie('presenti')? readCookie('presenti'):'AA';
tasto=document.getElementById('risc');
tosto=document.getElementById('cisc');
if(ciuska!='AA' && ciuska!='AB' && ciuska!='AC') {
tasto.innerHTML="<a href='javascript:riscaratt()'>caratteri</a>";
tosto.innerHTML="<a href='javascript:progressivo()'>aggiorna</a>";
}
}
function costipa(stipa) {
document.getElementsByTagName('body')[0].style.fontFamily=Simpatici[stipa];
createCookie ('famiglia',Simpatici[stipa],365);
createCookie ('smaccatore',[stipa],365);
disponibili();
}
function disponibili() {
quanti=readCookie('presenti').length/2;
info=document.getElementById('infonz');
quale=readCookie('famiglia');
quale=(readCookie('famiglia')? readCookie('famiglia'):'sans serif');
info.innerHTML='<sub>disponibili&nbsp;</sub><br><span style="font-family:'+quale+'">'+quanti+'</span>';
nasci=document.getElementById('nasc');
nasci.innerHTML="<sub>attuale&nbsp;</sub><br><span style='font-family:"+quale+"';>"+quale+"</span>";
}



function classa(questino){
questozzo=questino.className;
/*alert(questozzo);*/
createCookie ('posLi',[questozzo],365);
locazione=document.getElementById('caratterizza');
ammassa=locazione.getElementsByTagName('a');
for(k=0;k<ammassa.length; k++) {
ammassa[k].className=""+[k]+"";
}
questino.className="attuale";
/*createCookie ('smaccatore',questino,365);
alert(questino);*/
}

function classaPost(chi){
locazione=document.getElementById('caratterizza');
ammassa=locazione.getElementsByTagName('a');
for(k=0;k<ammassa.length; k++) {
ammassa[k].className='';}
//manca classa attuale
}



function riscaratt() {
ciccio=document.getElementById('caratterizza');
ciccio.innerHTML="";
ciccio.className="fronte";
liscia=window.setInterval("tipo2()",15);
disponibili();
coccio=document.getElementById('chiudi');
coccio.style.visibility='hidden';
cacio=document.getElementById('tasti');
cacio.style.visibility='hidden';

}

function fermaRiscaratt(){
/*attualmente=readCookie('smaccatore');
classaPost(attualmente);*/
disponibili();
window.clearInterval(liscia);
viciniori=0;
piddu=document.getElementById('risc');
turi=document.getElementById('cisc');
turi.innerHTML="<a href='javascript:progressivo()'>aggiorna</a>";
piddu.innerHTML="<a href='javascript:riscaratt()'>caratteri</a>";
coccio=document.getElementById('chiudi');
coccio.style.visibility='visible';
cacio=document.getElementById('tasti');
cacio.style.visibility='visible';
ciccio=document.getElementById('caratterizza');
atto=readCookie('posLi');
/*alert(atto);*/
if (readCookie('posLi')) {
etto=ciccio.getElementsByTagName('a')[atto];
etto.className="attuale";
/*alert(posLi);*/
}
}

function tipo2() {
finiori=readCookie('presenti').length/2;
ciccio=document.getElementById('caratterizza');
piizza=document.createElement('li');
ciccio.appendChild(piizza);
prim=viciniori*2;
seco=prim+1;
glus=readCookie('presenti').charAt(prim);
glos=grigliata.indexOf(glus);
glas=readCookie('presenti').charAt(seco);
gles=grigliata.indexOf(glas);
pos=glos*18+gles;
piizza.innerHTML="<a onclick='classa(this)' href='javascript:costipa("+[pos]+")' style='font-family:"+Simpatici[pos]+"' class='"+[viciniori]+"'>"+Simpatici[pos]+"</a>";

viciniori=viciniori+1;
/*acconcia=ciccio.document.getElementsByTagName('ul')[0];*/
if (ciccio.offsetHeight<506) {ciccio.style="border-top-left-radius:22em; border-bottom-left-radius:22em";
/*acconcia.style='margin:4em;background:silver'*/
};

if (ciccio.offsetHeight>506) {ciccio.style="border-top-left-radius:2em; border-bottom-left-radius:2em";
/*acconcia.style='margin:1em; background:grey';*/
}
scrolla=ciccio.offsetHeight;
if (viciniori==finiori) {
/*alert(scrolla);	*/
	fermaRiscaratt();
coccio=document.getElementById('chiudi');
coccio.style.visibility='visible';
cacio=document.getElementById('tasti');
cacio.style.visibility='visible';
}
}


function spiega(){
ciccio=document.getElementById('spiega');
ciccio.style.display="block"
}
function chiudiSpiega(questo){
ciccio=document.getElementById('spiega');
ciccio.style.display="none"
}

function chiudiStili (){
sulloSfondo();
}

function sulloSfondo () {
document.getElementById('opzioni').style.visibility="hidden";
document.getElementById('stilante').style.visibility="visible";
}



function configura() {
document.getElementById('opzioni').style.display="block";
document.getElementById('opzioni').style.visibility="visible";
document.getElementById('stilante').style.display="none";

}


function chioso(){
document.getElementById('opzioni').style.display="none";
document.getElementById('stilante').style.display="block";
}
/*function sulloSfondo() {
document.write('<ul id="stili"><li class="chiudi" onclick="chiudiStili()"><a href="javascript:void(0)" title="chiudi">nascondi ricerca</a></li></ul><br class="clear">');
}*/


function ricorda() {
if(tipetto=readCookie('famiglia')){
document.getElementsByTagName('body')[0].style.fontFamily=tipetto;
}
}
function nojs() {
solleva=document.getElementById('nojs'); 
solleva.style.display='none';
}


function miniStil() {
fonz=document.getElementById(stilante);
fonz.style.display='none';
}

//scorre liscio da tutorial archiviato


/*credito a http://web.archive.org/web/20140213105950/http://itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
*/
//dimezzata velocità da step /distance 25 a 50

    function currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset) return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop) return document.body.scrollTop;
        return 0;
    }
    function elmYPosition(eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        } return y;
    }

    function smoothScroll(eID) {
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 100);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance /50);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
    }

//fine scorre


window.onload = function() {
tastaTasto();
tipetto=(readCookie('famiglia')? readCookie('famiglia'):0);
ricorda();
//si toglie fantasy AD nei caratteri generici
carStandardi=(readCookie('presenti')? readCookie('presenti'):'AAABAC');
}
