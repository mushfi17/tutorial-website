let searchBtn = document.querySelector('.searchBtn');

let closeBtn = document.querySelector('.closeBtn');

let searchBox = document.querySelector('.searchBox');

let navigation = document.querySelector('.navigation');

let menuToggle = document.querySelector('.menuToggle');

let header = document.querySelector('header');

searchBtn.onclick = function(){
    searchBox.classList.add('active');
    closeBtn.classList.add('active');
    searchBtn.classList.add('active');
}
closeBtn.onclick = function(){
    searchBox.classList.remove('active');
    closeBtn.classList.remove('active');
    searchBtn.classList.remove('active');
}

menuToggle.onclick = function(){
    header.classList.toggle('open');
    
}


//


////$(document).ready(function(){

    //$('.counter').each(function(){

       // $(this).prop('Counter',0).animate({
             
            ////Counter : $(this).text()
        //},{
            //duration : 3500,
           // easing : 'swing',
            //step : function(now){
               // $(this).text(Math.ceil(now) + '+');
            //}
        //})
    //})
//})
//