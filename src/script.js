tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                
                'charcoal': '#121212',
            }
        }
    }
}

$('.btn').on('click', function () {
  const target = $(this).data('target');

  if ($(this).hasClass('active')) return;

  $('.btn').removeClass('active');
  $(this).addClass('active');

  $('.box:visible')
    .stop(true, true)
    .slideUp(250)
    .promise()
    .done(() => {
      $(target).stop(true, true).slideDown(300);
    });
});
$('.close-btn').on('click', function () {
    $('.btn').removeClass('active');
    $('.box:visible').slideUp(250);
})