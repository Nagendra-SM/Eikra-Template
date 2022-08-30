window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

 // Section 3 Popup video button

function toggleVideo() {
    // get the clock
    var popup_vid = document.getElementById('videoPopup');

    // get the current value of the clock's display property
    var displaySetting = popup_vid.style.display;

    // also get the clock button, so we can change what it says
    var popup_vidbtn = document.getElementById('play-btn');

    // now toggle the clock and the button text, depending on current state
    if (displaySetting == 'block') {
      // clock is visible. hide it
      popup_vid.style.display = 'none';
      // change button text
      // clockButton.innerHTML = 'Show clock';
    }
    else {
      // clock is hidden. show it
      popup_vid.style.display = 'block';
    }
  }

  // Section 3 Popup close video button
  
function toggleClose() {
    // get the Video
    var popup_btn = document.getElementById('videoPopup');

    // get the current value of the video display property
    var displaySetting = popup_btn.style.display;

    // also get the video button, so we can change what it says
    var close_btn = document.getElementById('close-btn');

    // now toggle the video and the button text, depending on current state
    if (displaySetting == 'block') {
      // video is visible. hide it
      popup_btn.style.display = 'none';
    }
    else {
      // Video is hidden. show it
      popup_btn.style.display = 'block';
    }
  }
// search box
  function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
  }


  // counter

  const counters = document.querySelectorAll('.counter');
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// testimonials
 
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination:true,
        autoPlay:false
    });
});