document.getElementById('add-border').addEventListener('click', function () {
    const friendContainer = document.getElementById('friend-container');

    friendContainer.style.border = '3px solid green'

});

function backgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (let friend of friends) {
        friend.style.backgroundColor = 'lightblue';
    }
};

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = `<h3 class="friend-name">new Friend-4</h3>
 <p>Suscipit, quis!</p>`;
    container.appendChild(friendDiv)
})



