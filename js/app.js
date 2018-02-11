// This creates the "Reveal Spoiler" button (dollar sign just denotes that the variable contains jQuery selected elements)
const $button = $('<button>Reveal Spoiler</button>');
//This appends $button to index's spoiler class (we are using $button to create and insert a new element, the spoiler cover, into the webpage ... as a sidenote, this approach is consistent with UNOBTRUSIVE JAVASCRIPT ... that way, if JavaScript is down, the spoiler still shows ... the user just missed out on a neat feature)
$('.spoiler').append($button);

// When $button is is pressed OR when the mouse circles on to but leaves $button, a function triggers...
$('.spoiler').on('click mouseleave', 'button', function(){
  //Show the spoiler text
  $(this).prev().show(); /* THIS = a JS keyword that you can use instead of event.target! Basically, just means that THIS spoiler that was CLICKED, traverse to the element before it, and show that element. */
  //Hide the "Reveal Spoiler" button
  $(this).hide();
});
//Hide the spoiler text
$('.spoiler span').hide();