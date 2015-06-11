var visible=false;
var open=[false,true,false,false,false,false];
var temp="null";
var index=0;

$("#home-link,#home-link-text").on("click",function()
{
  temp="#home";
  index=0;
  if(visible==false)
  {
    /*
    If the container is not visible, we slide it open and dispaly the Home card
    */
    $(temp.concat("-link-text")).css("color","#E91E36");
    $(".top").animate({top: '-400px'},750);
    $("#footer").animate({bottom: '-20px'},375,function()
    {
      $(".container").show(function()
      {
        visible=true;
        $(temp).fadeIn(300);
        open[index]=true;
      });
    });
  }
  else
  {
    if(open[index]==true)
    {
      $(temp).fadeOut(300,function()
      {
        open[index]=false;
        $(".container").hide(function()
        {
          visible=false;
        });
      });
      $(temp.concat("-link-text")).css("color","#FFFFFF");
      $(".top").animate({top:'0px'},750);
      $("#footer").animate({bottom:"0px"},375);
    }
  }
});


$("#proj-link,#proj-link-text").on("click",function()
{
  temp="#proj";
  index=1;
  if(visible==false)
  {
    /*
    If the container is not visible, we slide it open and dispaly the Home card
    */
    $(temp.concat("-link-text")).css("color","#E91E36");
    $(".top").animate({top: '-400px'},750);
    $("#footer").animate({bottom: '-20px'},375,function()
    {
      $(".container").show(function()
      {
        visible=true;
        $(temp).fadeIn(300);
        open[index]=true;
      });
    });
  }
  else
  {
    /*
    To open another container, we first need to close the open container
    */
    if(open[index]==true)
    {
      $(temp).fadeOut(300,function()
      {
        open[index]=false;
        $(".container").hide(function()
        {
          visible=false;
        });
      });
      $(temp.concat("-link-text")).css("color","#FFFFFF");
      $(".top").animate({top:'0px'},750);
      $("#footer").animate({bottom:"0px"},375);
    }
  }
});


$("#wom-link,#wom-link-text").on("click",function()
{
  temp="#wom";
  index=2;
  if(visible==false)
  {
    /*
    If the container is not visible, we slide it open and dispaly the Home card
    */
    $(temp.concat("-link-text")).css("color","#E91E36");
    $(".top").animate({top: '-400px'},750);
    $("#footer").animate({bottom: '-20px'},375,function()
    {
      $(".container").show(function()
      {
        visible=true;
        $(temp).fadeIn(300);
        open[index]=true;
      });
    });
  }
  else
  {
    /*
    To open another container, we first need to close the open container
    */
    if(open[index]==true)
    {
      $(temp).fadeOut(300,function()
      {
        open[index]=false;
        $(".container").hide(function()
        {
          visible=false;
        });
      });
      $(temp.concat("-link-text")).css("color","#FFFFFF");
      $(".top").animate({top:'0px'},750);
      $("#footer").animate({bottom:"0px"},375);
    }
  }
});


$("#pos-link,#pos-link-text").on("click",function()
{
  temp="#pos";
  index=3;
  if(visible==false)
  {
    /*
    If the container is not visible, we slide it open and dispaly the Home card
    */
    $(temp.concat("-link-text")).css("color","#E91E36");
    $(".top").animate({top: '-400px'},750);
    $("#footer").animate({bottom: '-20px'},375,function()
    {
      $(".container").show(function()
      {
        visible=true;
        $(temp).fadeIn(300);
        open[index]=true;
      });
    });
  }
  else
  {
    /*
    To open another container, we first need to close the open container
    */
    if(open[index]==true)
    {
      $(temp).fadeOut(300,function()
      {
        open[index]=false;
        $(".container").hide(function()
        {
          visible=false;
        });
      });
      $(temp.concat("-link-text")).css("color","#FFFFFF");
      $(".top").animate({top:'0px'},750);
      $("#footer").animate({bottom:"0px"},375);
    }
  }
});

$("#con-link,#con-link-text").on("click",function()
{
  temp="#con";
  index=5;
  if(visible==false)
  {
    /*
    If the container is not visible, we slide it open and dispaly the Home card
    */
    $(temp.concat("-link-text")).css("color","#E91E36");
    $(".top").animate({top: '-400px'},750);
    $("#footer").animate({bottom: '-20px'},375,function()
    {
      $(".container").show(function()
      {
        visible=true;
        $(temp).fadeIn(300);
        open[index]=true;
      });
    });
  }
  else
  {
    /*
    To open another container, we first need to close the open container
    */
    if(open[index]==true)
    {
      $(temp).fadeOut(300,function()
      {
        open[index]=false;
        $(".container").hide(function()
        {
          visible=false;
        });
      });
      $(temp.concat("-link-text")).css("color","#FFFFFF");
      $(".top").animate({top:'0px'},750);
      $("#footer").animate({bottom:"0px"},375);
    }
  }
});

/*
If container is aleady open and the Home card is already displayed, we do nothing.
If another card is displayed, we close the container first, then open it and display the Home card.
*/

//
// var x=0;
// for(var i=0;i<6;i++)
// {
//   if(open[i]==true)
//   {
//     x=i;
//     break;
//   }
// }
//
// var temp="abc";
// if(x==0) temp="#home";
// else if(x==1) temp="#proj";
// else if(x==2) temp="#wom";
// else if(x==3) temp="#pos";
// else if(x==4) temp="#blog";
// else if(x==5) temp="#con";
//
//
// $(temp).fadeOut(300,function()
// {
//   $(".container").hide(function()
//   {
//     visible=false;
//   });
// });
// $(temp.concat("-link-text")).css("color","#FFFFFF");
// $(".top").animate({top:'0px'},750);
// $("#footer").animate({bottom:"0px"},375);
//
// open[x]=false;
// if(x!=0)
// {
//   $("#home-link-text").css("color","#E91E36");
//   $(".top").animate({top: '-400px'},750);
//   $("#footer").animate({bottom: '-20px'},375,function()
//   {
//     $(".container").show(function()
//     {
//       visible=true;
//       $("#home").fadeIn(300);
//       open[0]=true;
//     });
//   });
// }
//
// $("#proj-link").on("click",function()
// {
//   if(visible==false)
//   {
//     /*
//     If the container is not visible, we slide it open and dispaly the Home card
//     */
//     $("#proj-link-text").css("color","#E91E36");
//     $(".top").animate({top: '-400px'},750);
//     $("#footer").animate({bottom: '-20px'},375,function()
//     {
//       $(".container").show(function()
//       {
//         visible=true;
//         $("#proj").fadeIn(300);
//         open[1]=true;
//       });
//     });
//   }
//   else
//   {
//     /*
//     If container is aleady open and the Home card is already displayed, we do nothing.
//     If another card is displayed, we close the container first, then open it and display the Home card.
//     */
//     var x=0;
//     for(var i=0;i<6;i++)
//     {
//       if(open[i]==true)
//       {
//         x=i;
//         break;
//       }
//     }
//
//     var temp="abc";
//     if(x==0) temp="#home";
//     else if(x==1) temp="#proj";
//     else if(x==2) temp="#wom";
//     else if(x==3) temp="#pos";
//     else if(x==4) temp="#blog";
//     else if(x==5) temp="#con";
//
//
//     $(temp).fadeOut(300,function()
//     {
//       $(".container").hide(function()
//       {
//         visible=false;
//       });
//     });
//     $(temp.concat("-link-text")).css("color","#FFFFFF");
//     $(".top").animate({top:'0px'},750);
//     $("#footer").animate({bottom:"0px"},375);
//
//     open[x]=false;
//     if(x!=1)
//     {
//       $("#proj-link-text").css("color","#E91E36");
//       $(".top").animate({top: '-400px'},750);
//       $("#footer").animate({bottom: '-20px'},375,function()
//       {
//         $(".container").show(function()
//         {
//           visible=true;
//           $("#proj").fadeIn(300);
//           open[1]=true;
//         });
//       });
//     }
//   }
// });

//
// $('#proj').fadeOut(300);
// $('#wom').fadeOut(300);
// $('#pos').fadeOut(300);
// $('#blog').fadeOut(300);
// $('#con').fadeOut(300);
// $('#home-link').on("click",function()
// {
//   //if container is visible
//   if(visible==true)
//   {
//     if(open[0]==false)
//     {
//       //setting all menu colours to white
//       $('#proj-link').css("color","#FFFFFF");
//       $('#wom-link').css("color","#FFFFFF");
//       $('#pos-link').css("color","#FFFFFF");
//       $('#blog-link').css("color","#FFFFFF");
//       $('#con-link').css("color","#FFFFFF");
//       open[0]=true;
//
//       $('#container').hide("slide",{direction:"up"},100,function()
//       {
//         visible=false;
//         $('#home-link').css("color","#E91E63",function()
//         {
//           $('#home-link-text').css("font-weight","bolder");
//           //hide all other windows and show only home
//           $('#proj').hide();
//           $('#wom').hide();
//           $('#pos').hide();
//           $('#blog').hide();
//           $('#con').hide();
//           $('#home').show(function()
//           {
//             $('#container').show("slide",{direction:"down"},100);
//             visible=true;
//           });
//         });
//       });
//     }
//   }
//   else
//   {
//   //  alert("pressed");
//     $('#home-link-text').css("color","#E91E63",function()
//     {
//       // $('#home-link-text').css("font-weight","bold");
//       //hide all other windows and show only home
//       // $('#proj').hide();
//       // $('#wom').hide();
//       // $('#pos').hide();
//       // $('#blog').hide();
//       // $('#con').hide();
//       // $('#home').show(function()
//       // {
//       //  alert("here now");
//       // $('#submitcontainer').show("slide",{direction:"down"},200);
//         $("#container").show("slide",{direction:"down"},100);
//         visible=true;
//       //});
//     });
//   }
// });

//
// var state=true;
//
// $('#home-link').on('click',function(){
//   $('#home').show(); $('#home-link').css("color","#FFA000");
//   $('#proj').hide(); $('#proj-link').css("color","#000000");
//   $('#pub').hide(); $('#oub-link').css("color","#000000");
//   $('#pos').hide(); $('#pos-link').css("color","#000000");
//   $('#wom').hide(); $('#wom-link').css("color","#000000");
//   $('#blog').hide(); $('#blog-link').css("color","#000000");
//   $('#con').hide(); $('#con-link').css("color","#000000");
// });
//
// $('#proj-link').on('click',function(){
//   $('#home').hide(); $('#home-link').css("color","#000000");
//   $('#proj').show(); $('#proj-link').css("color","#FFA000");
//   $('#pub').hide(); $('#pub-link').css("color","#000000");
//   $('#pos').hide(); $('#pos-link').css("color","#000000");
//   $('#wom').hide(); $('#wom-link').css("color","#000000");
//   $('#blog').hide(); $('#blog-link').css("color","#000000");
//   $('#con').hide(); $('#con-link').css("color","#000000");
// });
//
// $('#pub-link').on('click',function(){
//   $('#home').hide(); $('#home-link').css("color","#000000");
//   $('#proj').hide(); $('#proj-link').css("color","#000000");
//   $('#pub').show(); $('#pub-link').css("color","#FFA000");
//   $('#pos').hide(); $('#pos-link').css("color","#000000");
//   $('#wom').hide(); $('#wom-link').css("color","#000000");
//   $('#blog').hide(); $('#blog-link').css("color","#000000");
//   $('#con').hide(); $('#con-link').css("color","#000000");
// });
//
// $('#pos-link').on('click',function(){
//   $('#home').hide(); $('#home-link').css("color","#000000");
//   $('#proj').hide(); $('#proj-link').css("color","#000000");
//   $('#pub').hide(); $('#pub-link').css("color","#000000");
//   $('#pos').show(); $('#pos-link').css("color","#FFA000");
//   $('#wom').hide(); $('#wom-link').css("color","#000000");
//   $('#blog').hide(); $('#blog-link').css("color","#000000");
//   $('#con').hide(); $('#con-link').css("color","#000000");
// });
//
// $('#wom-link').on('click',function(){
//   $('#home').hide(); $('#home-link').css("color","#000000");
//   $('#proj').hide(); $('#proj-link').css("color","#000000");
//   $('#pub').hide(); $('#pub-link').css("color","#000000");
//   $('#pos').hide(); $('#pos-link').css("color","#000000");
//   $('#wom').show(); $('#wom-link').css("color","#FFA000");
//   $('#blog').hide(); $('#blog-link').css("color","#000000");
//   $('#con').hide(); $('#con-link').css("color","#000000");
// });
//
// $('#blog-link').on('click',function(){
//   // $('#home').hide(); $('#home-link').css("color","#000000");
//   // $('#proj').hide(); $('#proj-link').css("color","#000000");
//   // $('#pub').hide(); $('#pub-link').css("color","#000000");
//   // $('#pos').hide(); $('#pos-link').css("color","#000000");
//   // $('#wom').hide(); $('#wom-link').css("color","#000000");
//   // $('#blog').show(); $('#blog-link').css("color","#FFA000");
//   // $('#con').hide(); $('#con-link').css("color","#000000");
//   $('#container').hide(function()
//   {
//     $("#blog-link").attr("href", "www.google.com");
//   });
// });
//
// $('#con-link').on('click',function(){
//   $('#home').hide(); $('#home-link').css("color","#000000");
//   $('#proj').hide(); $('#proj-link').css("color","#000000");
//   $('#pub').hide(); $('#pub-link').css("color","#000000");
//   $('#pos').hide(); $('#pos-link').css("color","#000000");
//   $('#wom').hide(); $('#wom-link').css("color","#000000");
//   $('#blog').hide(); $('#blog-link').css("color","#000000");
//   $('#con').show(); $('#con-link').css("color","#FFA000");
// });
//
// // $('#submit').click(function() {
// //   alert("hello");
// //     $('html, body').animate({
// //         scrollTop: $('#home').offset().top
// //     }, 1000);
// // });
//
// $('#submit').click(function() {
//   if(state)
//   {
//     state=false;
//     $(".container").get(0).scrollIntoView();
//     $('#submit').css("transform", "rotate(180deg)",100);
//   }
//   else
//   {
//     state=true;
//     $("#front").get(0).scrollIntoView();
//     $('#submit').css("transform", "rotate(360deg)");
//   }
// });
