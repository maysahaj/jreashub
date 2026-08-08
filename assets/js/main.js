$(document).ready(function(){
    var scrollTop =0;
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop();
        if (scrollTop > 100){
            $('.navbar').addClass ('scrollNavbar');
			$('.backTop').addClass ('visible');
			
        }else if (scrollTop < 100){
            $('.navbar').removeClass('scrollNavbar');
			$('.backTop').removeClass ('visible');
        };
    });
	$('.backTop').click (function(){
		$('body , html').animate({
			scrollTop:0
		},800);
	});
});

$('.owl-carousel').owlCarousel({
    loop: true,
        margin: 15,
        nav: false,       /* Hides next/prev arrows */
        dots: true,      /* Enables pagination dots */
        dotsEach: true,  /* Ensures a dot is generated for every slide/page */
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1024: {
            items: 3
          }
        }
      });
    

  const dropdown = document.getElementById('myDropdown');
  
  dropdown.addEventListener('change', function(event) {
    const selectedValue = event.target.value;
    console.log('User selected:', selectedValue);
  });
