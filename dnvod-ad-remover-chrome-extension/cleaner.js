$(document).ready(() => {
  adSelectors.map(selector => {
    $(selector).remove();
  });

  // remove corner popup ad
  $('#msg_content')
    .parent()
    .remove();
});
