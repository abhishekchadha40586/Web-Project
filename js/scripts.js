$(document).ready(function(){
            // $('#mycarousel').carousel( { interval: 2000 } );
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


// Login Modal using JS

        var modal = document.getElementById("loginModal");

// Get the button that opens the modal
        var btn = document.getElementById("loginButton");

// Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        var s = document.getElementById("cl2");
// When the user clicks on the button, open the modal
        btn.onclick = function() {
            $(modal).modal('show'); 
            // modal.style.display = "block";
        }

// When the user clicks on <span> (x), close the modal
        span.onclick = function() {
          $(modal).modal('hide'); 
        }
        s.onclick = function() {
          $(modal).modal('hide'); 
        }

// When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }