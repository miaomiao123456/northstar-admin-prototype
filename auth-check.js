<script>
(function() {
    if (sessionStorage.getItem('northstar_auth') !== 'authenticated') {
        document.documentElement.innerHTML = '';
        window.location.href = 'index.html';
    }
})();
</script>
