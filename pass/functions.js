var $output, $user, $phrase, $domain, $length, $info, $help;

$(document).ready(function () {

    $user = $('#inputUser');
    $output = $('#outputPassword');
    $phrase = $('#inputPhrase');
    $domain = $('#inputDomain');
    $length = $('#inputLength');
    $info = $('#outputInfo');
    $help = $('#info');

    if (localStorage["inputLength"]) {
        $('#inputLength').val(localStorage["inputLength"]);
    }

    if (localStorage["inputPhrase"]) {
        $('#inputPhrase').val(localStorage["inputPhrase"]);
    }

    $('.stored').change(function () {
        localStorage[$(this).attr('id')] = $(this).val();
    });

    $('.deletecache').on('click', function () {
        localStorage.clear();
        $('.stored').val("");
        $('.notstored').val("");
        $('#outputPassword').hide();
        return false;
    });

    $("#modal-launcher").click(function (e) {
        $help.addClass("active");
        e.preventDefault();
    });

    $("#modal-footer").click(function (e) {
        $help.removeClass("active");
        e.preventDefault();
    });
    
    $('#showPassword').on('click', function (e) {

        var Phrase = clean($phrase.val());
        var User = $user.val().replace(/\s/g, '').toLowerCase();
        var Domain = $domain.val().replace(/\s/g, '').toLowerCase();
        var Len = $length.val().replace(/\s/g, '');

        if (!User) {
            $user.css('background-color', '#ff9');
            $info.html("Please enter a user name").show().delay(2000).fadeOut('slow');
        } else if (!Domain) {
            $domain.css('background-color', '#ff9');
            $info.html("Please enter a valid domain name (e.g., google)").show().delay(2000).fadeOut('slow');
        } else if ((!Len) || (isNaN(Len / 1) == true)) {
            $length.css('background-color', '#ff9');
            $info.html("Please enter a valid numerical length for your password").show().delay(2000).fadeOut('slow');
        } else if (!Phrase) {
            $phrase.css('background-color', '#ff9');
            $info.html("Please enter your secret passphrase").show().delay(2000).fadeOut('slow');
        } else {
            var hostPattern = /^([a-zA-Z0-9-]+)$/;
            if (hostPattern.test(Domain) == false) {
                $domain.css('background-color', '#FF9');
                $info.html("Please enter a valid domain name but without using any prefixes or suffixes. For instance, enter google and not google.com or www.google.com or accounts.google.com").show().delay(2000).fadeOut('slow');
            } else {
                generate_password(User, Domain, Phrase, Len);
            }
        }

        e.preventDefault();

    });

    $('input.userInput').on('keydown change', function (e) {
        var key = e.which;
        if (e.type == 'change' || key == 8 || key == 32 || (key > 45 && key < 91) || (key > 95 && key < 112) || (key > 185 && key < 223)) {
            $output.hide();
            $phrase.css('background-color', '#ECF0F1');
            $user.css('background-color', '#ECF0F1');
            $domain.css('background-color', '#ECF0F1');
            $length.css('background-color', '#ECF0F1');
        } else if (key == 13) {
            $(this).blur();
            $('#showPassword').trigger('click');
            e.preventDefault();
        }
    });


    $("input.typeahead").typeahead({
        name: "domain",
        local: ["Amazon", "Apple", "Box", "Digg", "Disqus", "DreamHost", "Dribbble", "Dropbox", "eBay", "EverNote", "Facebook", "Flipboard", "FourSquare", "GetPocket", "Github", "GoDaddy", "Google", "Hulu", "IFTTT", "IMDB", "Instagram", "Instapaper", "Kickstarter", "LinkedIn", "MailChimp", "Netflix", "NYTimes", "Outlook", "Pandora", "PayPal", "Pinboard", "Pinterest", "Quora", "Readability", "Reddit", "Skype", "SlideShare", "Stack Overflow", "StumbleUpon", "TED", "Tumblr", "Tweetdeck", "Twitter", "Vimeo", "Wikipedia", "WordPress", "WSJ", "Yahoo"
                   ]
    });
});

function clean(str) {
    var sentence = str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
    return sentence.replace(/\s/g, '');
}


function validate_b85_password(password) {
    return (
        password.search(/[0-9]/) >= 0 &&
        password.search(/[A-Z]/) >= 0 &&
        password.search(/[a-z]/) >= 0 &&
        password.search(/[\x21-\x2F\x3A-\x40\x5B-\x60]/) >= 0
    ) ? true : false;
}

function generate_password(User, Domain, Phrase, Len) {

    // Min Length: 4; Max Length: 30
    Len = (Len < 4) ? 4 : (Len > 30) ? 30 : Len;

    $output.val("Computing..").show();
    
    var salt = '$2a$10$' + hex_sha512(Domain + User + 'ed6abeb33d6191a6acdc7f55ea93e0e2').substr(0, 21) + '.';

    var key = Phrase + User + ":" + Domain;
    
    var bcrypt = new bCrypt();

    bcrypt.hashpw(key, salt, function (result) {

        var hashed = b85_hash(result.slice((result.length - 31), result.length)).substring(0, Len);

        while (!validate_b85_password(hashed)) {
            hashed = b85_hash(hashed).substring(0, Len);
        }

        $output.val(hashed).select();
    }, function () {
        $output.val(Math.random());
    });

    return undefined;
}

function b85_hash(s) {
    return ascii85($.map(b64_sha512(s).split(''), function (val) {
        return val.charCodeAt(0);
    }));
}

var c = function (input, length, result) {
    var i, j, n, b = [0, 0, 0, 0, 0];
    for (i = 0; i < length; i += 4) {
        n = ((input[i] * 256 + input[i + 1]) * 256 + input[i + 2]) * 256 + input[i + 3];
        if (!n) {
            result.push("z");
        } else {
            for (j = 0; j < 5; b[j++] = n % 85 + 33, n = Math.floor(n / 85));
        }
        result.push(String.fromCharCode(b[4], b[3], b[2], b[1], b[0]));
    }
};

var ascii85 = function (input) {
    // summary: encodes input data in ascii85 string
    // input: Array: an array of numbers (0-255) to encode
    var result = [],
        reminder = input.length % 4,
        length = input.length - reminder;
    c(input, length, result);
    if (reminder) {
        var t = input.slice(length);
        while (t.length < 4) {
            t.push(0);
        }
        c(t, 4, result);
        var x = result.pop();
        if (x == "z") {
            x = "!!!!!";
        }
        result.push(x.substr(0, reminder + 1));
    }
    return result.join(""); // String
};