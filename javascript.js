document.addEventListener('DOMContentLoaded', function() {
    var seeMoreButtons = document.querySelectorAll('.see-more-btn');
    seeMoreButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var info = this.parentElement.querySelector('.tv-show-info, .movie-info, .game-info');
            if (info.style.display === 'none') {
                info.style.display = 'block';
                this.textContent = 'See Less';
            } else {
                info.style.display = 'none';
                this.textContent = 'See More';
            }
        });
    });
});
