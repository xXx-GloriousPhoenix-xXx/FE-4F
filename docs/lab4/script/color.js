const item3 = {
    item: document.getElementById('item-3'),
    state: false
}
const item4 = {
    item: document.querySelector('.interest h3:first-child'),
    state: false
}

const col1 = 'var(--primarycol)';
const col2 = 'var(--secondarycol)';
const col3 = 'white';

const swapColor = (item) => {
    if (!item.state) {
        item.item.style.color = col1;
        item.item.style.backgroundColor = col2;
        item.state = true;
    }
    else {
        item.item.style.color = col2;
        item.item.style.backgroundColor = col3;
        item.state = false;
    }
}

item3.item.addEventListener('click', () => swapColor(item3));
item4.item.addEventListener('click', () => swapColor(item4));