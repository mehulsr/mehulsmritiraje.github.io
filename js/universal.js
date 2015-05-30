$('#home-link').on('click',function(){
  $('#home').show();
  $('#proj').hide();
  $('#pub').hide();
  $('#pos').hide();
  $('#wom').hide();
  $('#blog').hide();
  $('#con').hide();
});

$('#proj-link').on('click',function(){
  $('#home').hide();
  $('#proj').show();
  $('#pub').hide();
  $('#pos').hide();
  $('#wom').hide();
  $('#blog').hide();
  $('#con').hide();
});

$('#pub-link').on('click',function(){
  $('#home').hide();
  $('#proj').hide();
  $('#pub').show();
  $('#pos').hide();
  $('#wom').hide();
  $('#blog').hide();
  $('#con').hide();
});

$('#pos-link').on('click',function(){
  $('#home').hide();
  $('#proj').hide();
  $('#pub').hide();
  $('#pos').show();
  $('#wom').hide();
  $('#blog').hide();
  $('#con').hide();
});

$('#wom-link').on('click',function(){
  $('#home').hide();
  $('#proj').hide();
  $('#pub').hide();
  $('#pos').hide();
  $('#wom').show();
  $('#blog').hide();
  $('#con').hide();
});

$('#blog-link').on('click',function(){
  $('#home').hide();
  $('#proj').hide();
  $('#pub').hide();
  $('#pos').hide();
  $('#wom').hide();
  $('#blog').show();
  $('#con').hide();
});

$('#con-link').on('click',function(){
  $('#home').hide();
  $('#proj').hide();
  $('#pub').hide();
  $('#pos').hide();
  $('#wom').hide();
  $('#blog').hide();
  $('#con').show();
  console.log("Contact pressed");
});

// $('#submit').click(function() {
//   alert("hello");
//     $('html, body').animate({
//         scrollTop: $('#home').offset().top
//     }, 1000);
// });

$('#submit').click(function() {

  $("#footer").get(0).scrollIntoView();
});
