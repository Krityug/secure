var $inputs = $("input");

$inputs.on('focus', function() {
  var $self =  $(this);
  $self.prev().addClass('active');
});

$inputs.on('focusout', function() {
  var $self =  $(this);
  $self.val() == "" ? $self.prev().removeClass('active') : "";
});