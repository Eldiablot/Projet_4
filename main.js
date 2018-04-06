let monBouton = document.getElementById("bouton");
let block = document.getElementById("corps_page")

monBouton.onclick = function () {

   if (corps_page.style.display = "none")
   { 
        monBouton.style.display = "none";
        corps_page.style.display = "block";
    } else {
        block.display = "block";
    }
}


let maPageWeb = document.querySelector('html')

maPageWeb.onclick = function () {
   setTimeout(function(){alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 10000);
}
let monImage = FIREFOX.querySelector('img');

monImage.onclick = function() {
    let maSrc = monImage.getAttribute('src');
    if(maSrc === 'images/firefox-icon.png') {
      monImage.setAttribute ('src','images/firefox2.png');
    } else {
      monImage.setAttribute ('src','images/firefox-icon.png');
    }
}

<script>
  (function() {
    var cx = '002987498994089218550:6irzm1z-jkc';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
</script>
<gcse:search></gcse:search>