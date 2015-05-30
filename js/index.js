// document.addEventListener("deviceready", onDeviceReady, false);

var url='https://iwdmehul.firebaseio.com/';  //change this url
var myDataRef;
var count=0;
var display_main1=true;
var display_main2=true;




/********* FIREBASE ENTRIES *********/

/* @Author:Mehul Smriti Raje
 * This function submits a new motivation to the database
 * when the submit button is clicked.
 */
$('#my-button').click(function () {
      var name = $('#submitname').val();
      var coun = $('#submitcountry').val();
      var mot = $('#submitstory').val();

      console.log("Submitting motivation");
      if(mot!=null&&mot!='')
      {
        myDataRef.once('value',function(snap){
          count=snap.numChildren();
          console.log('Num='+count);

          console.log(url+count+'/');
          new Firebase(url+count+'/').set({Name: name,Country:coun,Motivation:mot});  //this worked when i removed the constraint in the database
        });
        //new Firebase(url+(count+1)+'/').set({Name: name,Country:coun,Motivation:mot});  //can use push function here
        $('#submitname').val('');
        $('#submitcountry').val('');
        $('#submitstory').val('');
        alert("Luminary submitted!");
        $('#navicon').click();
      }
      else
        alert("Please enter motivation");
  });


 /* @Author:Mehul Smriti Raje
  * This function sets a new motivation for the day when the <p>
  * tag is clicked.
  */
$(document).ready(function (){
  myDataRef = new Firebase(url);
  console.log("Fetching motivation");
  myDataRef.once('value',function(snap){
    count=snap.numChildren();
    console.log('Num='+count);

    var index=(Math.floor(Math.random()*100000)%10)%count;
    console.log(index);
    new Firebase(url+index+'/').once('value', function(snap)
    {
      var values=snap.val();
      $('#motivation').html(values.Motivation+'<br/><br/>by '+values.Name+', '+values.Country);
    });

  });
});




/******* NAVIGATION CONTROLS    ******/

//Submit action
$('#submit').click(function(){
  console.log("Fav Button pressed");

  if(display_main1==false)
  {
    $('#settingscontainer').hide("slide",{direction:"right"},100,function(){
      display_main1=true;
    });
  }
  if(display_main2==true)
  {
    // $('#settingscontainer').hide();
    console.log("Fav Button pressed");
    $('#submit').animate({bottom:"-20%"}, 200);
    display_main2=false;
    $('#maincontainer').hide("slide",{direction:"up"},100,function(){
      $('#submitcontainer').show("slide",{direction:"down"},200);
        $('#navicon').show(function(){
        });
    });
  }
});


//Back Button Action
$('#navicon').click(function(){
// var nav = function(){
  console.log("Navigation Icon Pressed");
  if(display_main1==false)
  {
    $('#settingscontainer').hide("slide",{direction:"right"},100,function(){
      $('#maincontainer').show("slide",{direction:"left"},200);
      display_main1=true;
      $('#navicon').hide(function(){
        // $('#submitcontainer').hide();
      });
    });
  }
  if(display_main2==false)
  {
    $('#submitcontainer').hide("slide",{direction:"down"},100,function(){
      $('#maincontainer').show("slide",{direction:"up"},200,function()
      {
        display_main2=true;
        $('#navicon').hide(function(){
        });
        $('#submit').animate({bottom: "5%"}, 200);
      });
    });
  }
});

//Settings action
$('#settings').click(function(){
  if(display_main2==false)
  {
    $('#submitcontainer').hide("slide",{direction:"down"},100,function(){
        display_main2=true;
        $('#submit').animate({bottom: "5%"}, 200);
    });
  }
  if(display_main1==true)
  {
    $('#maincontainer').hide("slide",{direction:"left"},100,function(){
      $('#settingscontainer').show("slide",{direction:"right"},200);
      display_main1=false;
      $('#submitcontainer').hide();
      $('#navicon').show(function(){
        // $('#submitcontainer').hide();
      });
    });
  }
});



/******* AND THE REST - TRANSITIONS, ETC. ********/
$('#rest').click(function(){
  $('#front').css("transform", "rotateY(180deg)");
  $('#back').css("transform", 'rotateY(0deg)').delay(250).show(function(){
    $('#front').hide();
  });
});

$('#flip-back').on('click', function(){
  $('#back').css("transform", "rotateY(180deg)").hide(function(){
    $('#front').css("transform", 'rotateY(0deg)').delay(250).show();
     $('#back').hide();
  });
});

$('#gplusstuff').click(function(){
  alert("To be added later");
  cordova.plugins.notification.local.on('click', function (notification) {
  showToast('clicked: ' + notification.id);   // the app needs to be opened when this is clicked
  }, this);
});

$('#twitterstuff').click(function(){
  alert("To be added later");
});

$('.nativetimepicker').click(function(event) {
        var currentField = $(this);
        var time = currentField.val();
        var myNewTime = new Date();

        myNewTime.setHours(time.substr(0, 2));
        myNewTime.setMinutes(time.substr(3, 2));

        // Same handling for iPhone and Android
        plugins.datePicker.show({
            date : myNewTime,
            mode : 'time', // date or time or blank for both
            allowOldDates : true
        }, function(returnDate) {
          // returnDate is generated by .toLocaleString() in Java so it will be relative to the current time zone
            var newDate = new Date(returnDate);
            currentField.val(newDate.toString("HH:mm"));

            currentField.blur();
        });
    });

/*
var check=[true,true,true,true,true,true];
var expandCard = function(ele){
  var num=ele.id+"";
  num=parseInt(num[1]-1);
  console.log(num);
  if(check[num]==true)
  {
    check[num]=false;
    $('#c'+(num+1)).show("slide",{direction:"down"},200);
    $('#c'+(num+1)).scrollTop();
  }
  else
  {
    check[num]=true;
    $('#c'+(num+1)).hide("slide",{direction:"down"},200);
  }
}
*/


/*@Author: Mehul Smriti Raje
* This piece of code sends a notification every 24 hours
* to come back and check the motivation for the day.
* Time of notification is taken from the the time-picker dialog
* -----Time from time-picker is yet to be taken -------
*/
document.addEventListener('deviceready', function () {
  cordova.plugins.notification.local.schedule({
    id: 1,
    text: 'See your motivation for the day!',
    icon: "icon.png",
    //sound: isAndroid ? 'file://sound.mp3' : 'file://beep.caf',
    every: 5,//'day',   --set for every five minutes
    firstAt: tomorrow_at_8_45_am,//next_monday,  //fetch data from time-picker here
    //data: { key:'value' }
  });
    cordova.plugins.notification.local.on('click', function (notification) {
    showToast('clicked: ' + notification.id);   // the app needs to be opened when this is clicked
    }, this);

    cordova.plugins.notification.local.hasPermission(function (granted) {
    // console.log('Permission has been granted: ' + granted);
  });
});


//function to display the time-setter if the radio button is selected
/*var time=document.getElementById('notif');
  time.addEventListener('selected',function(){
    var x=document.getElementById('time-setter');
    x.show();
});

$('#notif').change(function(){
  console.log("heu");
  if($('#notif').checked)
  {
    $('#time-setter').show();
  }
  else
  {
    $('#time-setter').hide();
  }
  $('#notif').checked=!$('#notif').checked;
});
*/

var toggle = document.querySelector("paper-toggle-button");
toggle.addEventListener('change', function () {
  if (this.checked) {
    $('#time-setter').show("slide",{direction:"down"},100);
  } else {
    $('#time-setter').hide("slide",{direction:"up"},100);
  }
});

/*
document.addEventListener('deviceready', function() {
  try {
    FB.init({appId: "APP_ID", nativeInterface: CDV.FB, useCachedDialogs: false});
  } catch (e) {
    alert(e);
  }
} , false);
*/

// Initialize the Facebook SDK
document.addEventListener('deviceready', function() {
  console.log("Initialising FB environment");
  facebookConnectPlugin.init({
    appId: '399044053602145',
    //nativeInterface: CDV.FB,
    //useCachedDialogs: false
  });
});



$('#fbstuff').click(function(){
  console.log("Trying FB stuff now");
  var fbLoginSuccess = function (userData) {
    alert("UserInfo: " + JSON.stringify(userData));
      facebookConnectPlugin.getLoginStatus(
        function (status) {
          alert("current status: " + JSON.stringify(status));

          var options = { method:"feed" };
          facebookConnectPlugin.showDialog(options,
            function (result) {
                alert("Posted. " + JSON.stringify(result));				},
            function (e) {
            alert("Failed: " + e);
          });
        }
      );
    };
    //facebookConnectPlugin.logout(Function success, Function failure);
});


function onFacebookLoginButtonClick(){
FB.getLoginStatus(function(r) {
    if (r.status === 'connected') {
        processFacebook();
    } else {
        FB.login(function(response) {
            if (response.authResponse) {
                processFacebook();
            } else {
                // user is not logged in
            }
        }, {
            scope: 'email'
        });
    }
});
}

function processFacebook() {
FB.api('/me', function(response) {
    if (response.error) {
        alert('Unexpected Facebook Login Error: ' + JSON.stringify(response.error));
    } else {
        console.log(response);
        var login_data = '';
        for (var key in response) {
            if (key == 'id' || key == 'name' || key == 'email' || key == 'gender')
                login_data += key + '=' + encodeURIComponent(response[key]) + '&amp;';
        }
        // do further processing as per your application
    }
});
}


/*  var tabs = document.querySelector('paper-tabs');
tabs.addEventListener('core-select', function() {
console.log("Selected: " + tabs.selected);
});
*/
