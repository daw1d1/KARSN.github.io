<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


<script>
"use strict";
  var _slayt = document.getElementsByClassName("slayt");
  var slaytSayisi = _slayt.length;
  var slaytNo = 0;
  var i = 0;

  slaytGoster(slaytNo);

  function sonrakiSlayt() {
    slaytNo++;
    slaytGoster(slaytNo);
  }

  function oncekiSlayt() {
    slaytNo--;
    slaytGoster(slaytNo);
  }

  function slaytGoster(slaytNumarasi) {
    slaytNo = slaytNumarasi;

    if (slaytNumarasi >= slaytSayisi) slaytNo = 0;

    if (slaytNumarasi < 0) slaytNo = slaytSayisi - 1;

    for (i = 0; i < slaytSayisi; i++) {
      _slayt[i].style.display = "none";
    }

    _slayt[slaytNo].style.display = "block";

  }
</script>