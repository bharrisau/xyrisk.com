$(function() {
	'use strict';

  var parseAPPID = "0Vm5d79VL61j1xgPEac9Wh8KMLLU6anQpyB28Jcy";
  var parseJSID = "Vz1gH5FfRL6be4o1aQ9DHAIob5z3w38rT1RD0DsD";

  Parse.initialize(parseAPPID, parseJSID);
  var CommentObject = Parse.Object.extend("CommentObject");
	// Main contact form
    $('#contact').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: {
                required: "Please enter your email address"
            },
            message: {
                required: "Please enter your message",
                minlength: "Your message must consist of at least 2 characters"
            }
        },
        submitHandler: function(form, event) {
          event.preventDefault();

          var data = {};
          data.name = $("#name").val();
          data.email = $("#email").val();
          data.phone = $("#phone").val();
          data.message = $("#message").val();

          var comment = new CommentObject();
          comment.save(data, {
            success: function() {
                $('#contact :input').attr('disabled', 'disabled');
                $('#contact').fadeTo( "slow", 0.15, function() {
                    $(this).find(':input').attr('disabled', 'disabled');
                    $(this).find('label').css('cursor','default');
                    $('#success').fadeIn();
                });
            },
            error: function() {
                $('#contact').fadeTo( "slow", 0.15, function() {
                    $('#error').fadeIn();
                });
            }
          });
        }
    });
});
