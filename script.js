// ========================================
// SASTRA CAMPUS SNACKPASS
// script.js
// ========================================

// =========================
// CART VARIABLES
// =========================

let cart = [];
let total = 0;

// =========================
// ADD ITEM TO CART
// =========================

function addToCart(itemName, price) {

    cart.push({
        name: itemName,
        price: price
    });

    total += price;

    updateCart();

}

// =========================
// REMOVE ITEM FROM CART
// =========================

function removeItem(index) {

    total -= cart[index].price;

    cart.splice(index, 1);

    updateCart();

}

// =========================
// UPDATE CART
// =========================

function updateCart() {

    const cartItems = document.getElementById("cartItems");
    const totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>No items added to your cart.</p>";

    } else {

        cart.forEach((item, index) => {

            cartItems.innerHTML += `

            <div class="cart-row">

                <span>${item.name}</span>

                <span>₹${item.price}</span>

                <button class="remove-btn"
                onclick="removeItem(${index})">

                Remove

                </button>

            </div>

            `;

        });

    }

    totalPrice.innerText = total;

}

// =========================
// CATEGORY FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");

const foodCards = document.querySelectorAll(".food-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.dataset.category;

        foodCards.forEach(card => {

            if (category === "all") {

                card.style.display = "block";

            } else {

                if (card.classList.contains(category)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            }

        });

    });

});

// =========================
// CONFIRM ORDER
// =========================

const confirmButton = document.getElementById("confirmOrder");

confirmButton.addEventListener("click", () => {

    if (cart.length === 0) {

        alert("Please add at least one item before confirming.");

        return;

    }

    const token =
        "SASTRA-" +
        Math.floor(Math.random() * 9000 + 1000);

    document.getElementById("tokenBox").innerHTML = `

    <h3 style="color:green;">
        ✅ Order Confirmed
    </h3>

    <p>

        Thank you for ordering from

        <strong>SASTRA Campus SnackPass</strong>

    </p>

    <h2>

        Pickup Token

    </h2>

    <h1 style="color:#ff6b35;">

        ${token}

    </h1>

    <p>

        Please collect your order at the counter.

    </p>

    `;

    cart = [];

    total = 0;

    updateCart();

});

// =========================
// SEARCH FUNCTION (Optional)
// =========================

const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        foodCards.forEach(card => {

            let title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

// =========================
// WELCOME MESSAGE
// =========================

window.onload = function () {

    console.log("Welcome to SASTRA Campus SnackPass");

    updateCart();

};

// =========================
// END OF FILE
// =========================