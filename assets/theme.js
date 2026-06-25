document.addEventListener('DOMContentLoaded', function(){
  var navToggle = document.getElementById('navToggle');
  var primaryNav = document.getElementById('primaryNav');
  if(navToggle && primaryNav){
    navToggle.addEventListener('click', function(){
      var expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      primaryNav.style.display = expanded ? 'none' : 'block';
    });
  }
});
