const cartBtn = document.getElementById('cart-btn');
const numberOFItemsInCart = cartBtn.children[1];
const addToCartBtns = [...document.getElementsByClassName('add-to-cart-btn')];
let idArr =  [...localStorage.getItem('cart')];

// when we delete items from arr their ',' can left in arr,
// to include only ids in arr we should do this
idArr = idArr.filter(e => e != ',');git
addCountToCartBUtton();

addToCartBtns.forEach(btn => {
    // add colors to the buttons by condition
    if (idArr.includes(btn.dataset.id)) {
        btn.classList.add('btn-success');
    } else {
        btn.classList.add('btn-primary');
    }

    // add event listeners to the buttons
    btn.addEventListener('click', function (e) {
        const idOfBtn = this.dataset.id;
        if (idArr.includes(idOfBtn)) {
            // delete existed id
            idArr.splice(idArr.indexOf(idOfBtn), 1);
            //change the button's color
            this.classList.replace('btn-success', 'btn-primary');
            addCountToCartBUtton();
        } else {
            // add not existed id
            idArr.push(idOfBtn);
            //change the button's color
            this.classList.replace('btn-primary', 'btn-success');
            addCountToCartBUtton();
        }
        const cartInfo = localStorage.setItem('cart', idArr);
    })
});

// adding number to the cart button
function addCountToCartBUtton(params) {
    numberOFItemsInCart.textContent = idArr.length;
}