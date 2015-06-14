var visible=false;
var open=[false,false,false,false,false,false];
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
