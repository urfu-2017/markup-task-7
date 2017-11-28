var avatars = document.querySelector('.people').querySelectorAll('.person__avatar');

avatars[0].addEventListener('click', setAsCurrent.bind(avatars[0], '#73c5f6'));
avatars[1].addEventListener('click', setAsCurrent.bind(avatars[1], '#ff8384'));
avatars[2].addEventListener('click', setAsCurrent.bind(avatars[2], '#ffe15d'));

function setAsCurrent(color) {
    avatars.forEach(function (avatar) {
        avatar.classList.remove('selected-person');
    });
    this.classList.add('selected-person');
    document.querySelectorAll('.container').forEach(function (container) {
        container.style.backgroundColor = color;
    });
}
