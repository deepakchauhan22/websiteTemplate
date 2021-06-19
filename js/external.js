
$(document).ready(function(){            
 $("#loginButton").click(function(){
    $('#loginModal').modal('show');
     
 });    
 $("#reservebtn").click(function(){
    $('#reserveModal').modal('toggle');
     
 });          
 
//  $(document).ready(function(){
//   $("#rbtn").click(function(){
//     $("#reserveModal").modal();
//   });
// });

 $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
        });