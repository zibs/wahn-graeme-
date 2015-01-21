

$(document).ready(function() {
  $('#button_next').click(function()  {
    
    // Store Current Image
    var current = $('img.show');
    
    // Store Next Image     
    if (current.next('img').length == 1)  {
      var next = current.next('img');
    }
    
    else  {
      var next = current.siblings('img').first();
    }
    
    // Hide Current Image
    current.hide().removeClass('show');
    
    // Fade in Next Image
    next.fadeIn().addClass('show');
    
  });
});
  
$(document).ready(function() {
  $('#button_prev').click(function()  {
    
    // Store Current Image
    var current = $('img.show');
    
    // Store Previous Image     
    if (current.prev('img').length == 1)  {
      var prev = current.prev('img');
    }
    
    else  {
      var prev = current.siblings('img').last();
    }
    
    // Hide Current Image
    current.hide().removeClass('show');
    
    // Fade in Previous Image
    prev.fadeIn().addClass('show');
    
  });
});