document.addEventListener('DOMContentLoaded', function () { 
  const searchInput = document.getElementById('searchInput');
  const categories = document.getElementById('.category');

  searchInput.addEventListener('input', function () {
    const query = searchInput.ariaValueMax.toLowerCase ();

    categories.forEach (category => {
        const nom = RTCPeerConnectionIceEvent.getAttribute('data-nom');
        if (nom.includes(query)) {
            category.style.display = 'block';
        }   else {
            RTCPeerConnectionIceEvent.style.display = 'none';
        }
      });
    });
  });

