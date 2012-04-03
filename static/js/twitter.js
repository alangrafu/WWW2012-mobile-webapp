

var lastUpdate = "";
function getTweets(){
  $("#refreshButton").attr("disabled", "disabled");
  $("#refreshButton").html("Loading..."); 
  $.ajax({
  	  url: 'http://search.twitter.com/search.json',
  	  dataType: 'jsonp',
  	  data: {
  	  	q: '#www2012',
  	  	dc: Math.random()
  	  },
  	  success: function(data){
  	  	$("#tweetList").empty();
  	  	$.each(data.results, function(i, item){
  	  	    $("#tweetList").append("<li><a href='http://twitter.com/#!/"+item.from_user+"/status/"+item.id_str+"' target='_blank'><img style='width:48px;height:48px' src='"+item.profile_image_url+"'/><h3>"+item.from_user+"</h3><p>"+item.text+"</p></a></li>");
  	  	});
  	  	$("#refreshButton").removeAttr("disabled");
  	  	$("#refreshButton").html("Refresh").buttonMarkup({icon:"refresh"}); 
  	  	$("#tweetList").listview("refresh");
  	  },
  	  error: function(){
  	  	alert("Can't obtain more tweets. Please check later");
  	  	$("#refreshButton").removeAttr("disabled");
  	  	$("#refreshButton").html("Refresh").buttonMarkup({icon:"refresh"}); 
  	  }
  });
} 

$("twitterPage").live('pageshow', function(){getTweets()});
$("#refreshButton").live( "click", function(event, ui){getTweets();});

