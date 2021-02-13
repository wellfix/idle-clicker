$(document).ready(function () {
    checkCookie();
    $('#cookie').click(function () { 
        cookies = cookies +1;
        $('#number').text(cookies);
        console.log(cookies);
    });
});

var cookies = 0;

function setCookie(cname, cvalue) {
    let date = new Date();
    date.setTime(date.getTime() + (10*365*24*60*60*1000));
    let expires = 'expires='+date.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    console.log('Cookies saved!');
}

function delCookie(cname) {
    let expires = '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = cname + expires;
    location.reload();
    console.log("Cookie deleted!");
    return false;
  }

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function checkCookie() {
    let cookie  = getCookie("cookie");
    if (cookie != "") {
        cookies = Number(cookie);
    }
    else {
        cookies = 0;
    }
    $('#number').text(cookies);
  }

const autoSave = setInterval(function() {
    setCookie('cookie', cookies.toString())
}, 60*1000);