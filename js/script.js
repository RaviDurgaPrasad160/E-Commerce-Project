/* Custom JS */

// nav collapse
const navItems = document.querySelectorAll('.nav-item');
const navMenu = document.querySelector('#navMenu');
navItems.forEach(li => {
    li.addEventListener('click', () => {
        let ww = window.innerWidth;
        if(ww < 992){
            let bsToggle = new bootstrap.Collapse(navMenu);
            bsToggle.hide();
        }
    })
})

// Owl Carousel
$(document).ready(function(){
    $('#slide-show .owl-carousel').owlCarousel({
        items: 1,
        dots: true,
        autoplay: true,
        loop: true,
        autoplayHoverPause: true
    });

    // Top-Sale Owl Carousel
    $('#top-sale .owl-carousel').owlCarousel({
        dots: false,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });

    // isotope
    let grid = $('#special-price .grid').isotope({
        //options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    // filter items on button click
    $('#filters').on('click', 'button', function(){
        let filterValue = $(this).attr('data-filter');
        grid.isotope({filter: filterValue});
        removeActiveFilter();
        $(this).addClass('active-filter');
    })

});

// remove active-filter class
function removeActiveFilter() {
    const buttons = document.querySelectorAll('#filters button');
    buttons.forEach(btn => {
        btn.classList.remove('active-filter');
    });
}

$(document).ready(function(){
    // New-Phones Owl Carousel
    $('#new-phones .owl-carousel').owlCarousel({
        dots: false,
        nav: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 5
            }
        }
    });

    // qty
    let qtyUp = $('.qty .qty-up');
    let qtyDown = $('.qty .qty-down');
    let limitQty = 10;

    qtyUp.click(function(e){
        // alert('You clicked PLUS')
        let parentEl = $(this).parent();
        let qtyInput = parentEl.find('input');
        let qtyVal = parseInt(qtyInput.val());
        if(qtyVal < limitQty){
            let udVal = qtyVal + 1;
            qtyInput.val(udVal);
        }
    })
    qtyDown.click(function(e){
        // alert('You clicked MINUS')
        let parentEl = $(this).parent();
        let qtyInput = parentEl.find('input');
        let qtyVal = parseInt(qtyInput.val());
        if(qtyVal > 1){
            let udVal = qtyVal - 1;
            qtyInput.val(udVal);
        }
    })

})