const dropdownItems = document.querySelectorAll('.dropdown-item');

dropdownItems.forEach(item => {
item.addEventListener('click', function() {
    document.getElementById('selectedOption').innerText = item.innerText;
});
});
