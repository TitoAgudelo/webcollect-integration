import { suscribe } from './modules/request';

let url = 'http://cl.exct.net/subscribe.aspx?';

function submitSuscribe() {
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
  submitSuscribe();
}