$(document).ready(function () {
    $('.extra').hide();
    $('.extra-link-button').click(function(){
        $('.extra').show();
        $('.extra-link-button-div').hide();
    });
    $('.less-link-button').click(function(){
        $('.extra').hide();
        $('.extra-link-button-div').show();
    });

  });
