import { suscribe } from './modules/request';

let url = 'http://cl.exct.net/subscribe.aspx?';

export function submitSuscribe() {
  let email = document.getElementById("email").value;
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let bDate = document.getElementById("bDate").value;
  let passport = document.getElementById("passport").value;

  url += 'lid=YOUR LIST ID HERE';
  url += '?eml=EmailAddr';
  url += '?mid=MemberID';

  suscribe(url).then(function(response) {
    console.log('works');
  }).catch(function(err) {
    console.log('error');
  });
}

export default function init() {
  document.getElementById("submit").addEventListener("click", function () {
    checkForm();
    form.submit();
  });
}

// isEmail (STRING s [, BOOLEAN emptyOK])
// whitespace characters
let whitespace = " \t\n\r";

//
// Email address must be of form a@b.c ... in other words:
// * there must be at least one character before the @
// * there must be at least one character before and after the .
// * the characters @ and . are both required
export function isValidEmail(s)
{
    if (isEmpty(s)) return false;

    // is s whitespace?
    if (isWhitespace(s)) return false;

    // there must be >= 1 character before @, so we
    // start looking at character position 1
    // (i.e. second character)
    var i = 1;
    var sLength = s.length;

    // look for @
    while ((i < sLength) && (s.charAt(i) != "@"))
    { i++
    }

    if ((i >= sLength) || (s.charAt(i) != "@")) return false;
    else i += 2;

    // look for .
    while ((i < sLength) && (s.charAt(i) != "."))
    { i++
    }

    // there must be at least one character after the .
    if ((i >= sLength - 1) || (s.charAt(i) != ".")) return false;
    else return true;
}

// Check whether string s is empty.
export function isEmpty(s)
{
    return ((s == null) || (s.length == 0))
}

// Returns true if string s is empty or
// whitespace characters only.
export function isWhitespace(s)
{
    var i;

    // Is s empty?
    if (isEmpty(s)) return true;

    // Search through string's characters one by one
    // until we find a non-whitespace character.
    // When we do, return false; if we don't, return true.
    for (i = 0; i < s.length; i++)
    {
        // Check that current character isn't whitespace.
        var c = s.charAt(i);

        if (whitespace.indexOf(c) == -1) return false;
    }
    // All characters are whitespace.
    return true;
}

export function initInfo() {
  document.subscribeForm.elements['ETSubscriberKey'].value = document.subscribeForm.elements['ETSubscriberKey'].value + document.subscribeForm.elements["Email Address"].value;
  if(document.subscribeForm.elements['lid'][0].checked) {
    document.subscribeForm.elements['Offer_1'].value = document.subscribeForm.elements['Offer_1'].value + ' True';
  } else {
    document.subscribeForm.elements['Offer_1'].value = document.subscribeForm.elements['Offer_1'].value + ' False';
  }
  if(document.subscribeForm.elements['lid'][1].checked) {
    document.subscribeForm.elements['Offer_2'].value = document.subscribeForm.elements['Offer_2'].value + ' True';
  } else {
    document.subscribeForm.elements['Offer_2'].value = document.subscribeForm.elements['Offer_2'].value + ' False';
  }
  if(document.subscribeForm.elements['lid'][2].checked) {
    document.subscribeForm.elements['Offer_3'].value = document.subscribeForm.elements['Offer_3'].value + ' True';
  } else {
    document.subscribeForm.elements['Offer_3'].value = document.subscribeForm.elements['Offer_3'].value + ' False';
  }
}

export function checkForm() {
    if (!isValidEmail(document.subscribeForm.elements['Email Address'].value)) {
        alert("Please enter a valid Email Address. (name@host.com)");
        document.subscribeForm.elements['Email Address'].focus();
        return false;
    } else {
        initInfo();
    }
}

init();

