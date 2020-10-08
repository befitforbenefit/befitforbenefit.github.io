function _(id){
return document.getElementById(id)}

const vids2=[], dwnlds2=[];
const vids=vids1.concat(vids2);
const dwnlds=dwnlds1.concat(dwnlds2);

_("tagLine").innerText=data.tagLine;
_("tagDesc").innerHTML=data.tagDesc;
_("contactDesc").innerHTML=data.contactDesc;

document.querySelectorAll(".nav-item").forEach((link)=>{

link.addEventListener("click", ()=>{
_("navbarBtn").click();
})


})



function showDwnlds(){
let output="";
dwnlds.forEach((dwnld, index)=>{
let dwnldAd=index%3;
if(dwnldAd==0){
output+=`<div class="col-sm-6 col-md-4">
<div class="card shadow-sm">

<div class="ratio ratio-16x9 rounded-top">
<img data-src="https://dummyimage.com/334x188" data-sizes="auto" class="lazyload img-fluid rounded-top" alt="advertisement">
</div>
<p class="my-0 p-2 text-truncate">Advertisement</p>

</div>
</div>`}

output+=`<div class="col-sm-6 col-md-4">
<div class="card shadow-sm">
<div class="img-box position-relative">
<img data-src="${dwnld.img}" data-sizes="auto" alt="${dwnld.txt}" class="lazyload img-fluid rounded-top" onclick="imgOpen(this)" />
<a href="${dwnld.link}" download="${dwnld.txt}" rel="noopener noreferer" class="btn btn-success btn-sm position-absolute right-0 bottom-0 mr-2 mb-2 shake" style="">Download</a>
</div>
<p class="my-0 p-2 text-truncate">${dwnld.txt}</p>
</div>
</div>`
})
_("dwnldsBox").innerHTML=output}
showDwnlds();



function showVids(){
let output="";
vids.forEach((vid, index)=>{
let vidAd=index%3;
if(vidAd==0){
output+=`<div class="col-sm-6 col-md-4">
<div class="card shadow-sm">

<div class="ratio ratio-16x9 rounded-top">
<img data-src="https://dummyimage.com/334x188" data-sizes="auto" class="lazyload img-fluid rounded-top" alt="advertisement">
</div>
<p class="my-0 p-2 text-truncate">Advertisement</p>

</div>
</div>`
}
output+=`<div class="col-sm-6 col-md-4">
<div class="card shadow-sm">

<div class="ratio ratio-16x9 bg-dark rounded-top">
<iframe data-src="https://www.youtube.com/embed/${vid.id}?rel=0" title="${vid.txt}" allowfullscreen class="lazyload rounded-top"></iframe>
</div>
<p class="my-0 p-2 text-truncate">${vid.txt}</p>

</div>
</div>`

})
_("vidsBox").innerHTML=output}
showVids();












function imgOpen(el){
let modal=new bootstrap.Modal(_("imgModal"));
_("imgModalSrc").src=el.src;
_("imgModalAlt").innerText=el.alt;
modal.toggle()}

function numberWithCommas(x){return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}

function updateViews(){
fetch('https://api.countapi.xyz/update/befitforbenefit/home/?amount=1').then(res=>res.json())
.then(res=>{
_("pageViews").innerText=numberWithCommas(res.value)
})}
updateViews();

const date=new Date();
const year=date.getFullYear();
_("copyYear").innerText=year;

let deferredPrompt;
const liteApp = _("liteApp");

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  liteApp.classList.remove("d-none");

  liteApp.addEventListener('click', (e) => {
    liteApp.classList.add("d-none");
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then( (choiceResult) =>{
    if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the A2HS prompt');
    } else {
    console.log('User dismissed the A2HS prompt');
    }
    deferredPrompt = null;
    });
  });
});