$(document).ready(function() {
  if (sessionStorage.getItem("user") != null) {
  	$( ".user-section" ).replaceWith( "<div class='offset-ms-3 offset-md-6 offset-lg-6 col-xs-12 col-sm-6 col-md-3 col-lg-3'>Bienvenido "+sessionStorage.getItem("user") +"</div>");
  	$(".login-button").html("Logout");
  	
  }
});

$( "#video1" ).click(function() {
	$("#videoclip").attr("src","video1.mp4");
});

$( "#video2" ).click(function() {
	$("#videoclip").attr("src","video2.mp4");
});


$( "#video3" ).click(function() {
	$("#videoclip").attr("src","video3.mp4");
});


$( ".login-button" ).click(function() {
	if (sessionStorage.getItem("user") != null) {
		sessionStorage.removeItem('user');
		location.reload();
	}else{
		if($(".name-user").val()==""){
			alert("Ingrese usuario")
		}else{
			sessionStorage.setItem('user', $(".name-user").val());
			location.reload();
		}	
	}
});