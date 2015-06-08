var state=true;

$('#home-link').on('click',function(){
  $('#home').show(); $('#home-link').css("color","#FFA000");
  $('#proj').hide(); $('#proj-link').css("color","#000000");
  $('#pub').hide(); $('#oub-link').css("color","#000000");
  $('#pos').hide(); $('#pos-link').css("color","#000000");
  $('#wom').hide(); $('#wom-link').css("color","#000000");
  $('#blog').hide(); $('#blog-link').css("color","#000000");
  $('#con').hide(); $('#con-link').css("color","#000000");
});

$('#proj-link').on('click',function(){
  $('#home').hide(); $('#home-link').css("color","#000000");
  $('#proj').show(); $('#proj-link').css("color","#FFA000");
  $('#pub').hide(); $('#pub-link').css("color","#000000");
  $('#pos').hide(); $('#pos-link').css("color","#000000");
  $('#wom').hide(); $('#wom-link').css("color","#000000");
  $('#blog').hide(); $('#blog-link').css("color","#000000");
  $('#con').hide(); $('#con-link').css("color","#000000");
});

$('#pub-link').on('click',function(){
  $('#home').hide(); $('#home-link').css("color","#000000");
  $('#proj').hide(); $('#proj-link').css("color","#000000");
  $('#pub').show(); $('#pub-link').css("color","#FFA000");
  $('#pos').hide(); $('#pos-link').css("color","#000000");
  $('#wom').hide(); $('#wom-link').css("color","#000000");
  $('#blog').hide(); $('#blog-link').css("color","#000000");
  $('#con').hide(); $('#con-link').css("color","#000000");
});

$('#pos-link').on('click',function(){
  $('#home').hide(); $('#home-link').css("color","#000000");
  $('#proj').hide(); $('#proj-link').css("color","#000000");
  $('#pub').hide(); $('#pub-link').css("color","#000000");
  $('#pos').show(); $('#pos-link').css("color","#FFA000");
  $('#wom').hide(); $('#wom-link').css("color","#000000");
  $('#blog').hide(); $('#blog-link').css("color","#000000");
  $('#con').hide(); $('#con-link').css("color","#000000");
});

$('#wom-link').on('click',function(){
  $('#home').hide(); $('#home-link').css("color","#000000");
  $('#proj').hide(); $('#proj-link').css("color","#000000");
  $('#pub').hide(); $('#pub-link').css("color","#000000");
  $('#pos').hide(); $('#pos-link').css("color","#000000");
  $('#wom').show(); $('#wom-link').css("color","#FFA000");
  $('#blog').hide(); $('#blog-link').css("color","#000000");
  $('#con').hide(); $('#con-link').css("color","#000000");
});

$('#blog-link').on('click',function(){
  $('#home').hide(); $('#home-link').css("color","#000000");
  $('#proj').hide(); $('#proj-link').css("color","#000000");
  $('#pub').hide(); $('#pub-link').css("color","#000000");
  $('#pos').hide(); $('#pos-link').css("color","#000000");
  $('#wom').hide(); $('#wom-link').css("color","#000000");
  $('#blog').show(); $('#blog-link').css("color","#FFA000");
  $('#con').hide(); $('#con-link').css("color","#000000");
});

$('#con-link').on('click',function(){
  $('#home').hide(); $('#home-link').css("color","#000000");
  $('#proj').hide(); $('#proj-link').css("color","#000000");
  $('#pub').hide(); $('#pub-link').css("color","#000000");
  $('#pos').hide(); $('#pos-link').css("color","#000000");
  $('#wom').hide(); $('#wom-link').css("color","#000000");
  $('#blog').hide(); $('#blog-link').css("color","#000000");
  $('#con').show(); $('#con-link').css("color","#FFA000");
});

// $('#submit').click(function() {
//   alert("hello");
//     $('html, body').animate({
//         scrollTop: $('#home').offset().top
//     }, 1000);
// });

$('#submit').click(function() {
  if(state)
  {
    state=false;
    $(".container").get(0).scrollIntoView();
    $('#submit').css("transform", "rotate(180deg)",100);
  }
  else
  {
    state=true;
    $("#front").get(0).scrollIntoView();
    $('#submit').css("transform", "rotate(360deg)");
  }
});
