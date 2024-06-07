
const cartItems = [
    {
        id: 1,
        name: "Skintific Moisturizer",
        price: 99000,
        image: "cart-item-1.jpg",
        quantity: 0
    },
    {
        id: 2,
        name: "Skintific Facial Wash",
        price: 85000,
        image: "produk2.png",
        quantity: 0
    },
    {
        id: 3,
        name: "Skintific Mask",
        price: 99000,
        image: "skin.jpg",
        quantity: 0
    },
    {
        id: 4,
        name: "Skintific Acne Serum",
        price: 98500,
        image: "gmbr1.png",
        quantity: 0
    },
    {
        id: 5,
        name: "Wardah Essence Toner",
        price: 99900,
        image: "produk3.png",
        quantity: 0
    },
    {
        id: 6,
        name: "Avoskin Serum",
        price: 90000,
        image: "produk4.png",
        quantity: 0
    },
    {
        id: 7,
        name: "Lacoco Serum",
        price: 95750,
        image: "lacoco.jpg",
        quantity: 0
    },
    {
        id: 8,
        name: "Wardah Moisturizer",
        price: 96750,
        image: "wardah.jpg",
        quantity: 0
    },
    {
        id: 9,
        name: "Scarlett Facial Wash",
        price: 69000,
        image: "fotoproduk4.jpg",
        quantity: 0
    },
    {
        id: 10,
        name: "Scarlett Essence Toner",
        price: 70000,
        image: "fotoproduk5.jpg",
        quantity: 0
    },
    {
        id: 11,
        name: "Scarlett Acne Serum",
        price: 70000,
        image: "fotoproduk6.jpg",
        quantity: 0
    },
    {
        id: 12,
        name: "Scarleet Moisturizer",
        price: 69000,
        image: "fotoproduk7.jpg",
        quantity: 0
    },
    {
        id: 13,
        name: "Scarleet Sun Screen",
        price: 69000,
        image: "fotoproduk8.jpg",
        quantity: 0
    },
    {
        id: 14,
        name: "The Originote Facial Cleanser",
        price: 60000,
        image: "fotoproduk9.jpg",
        quantity: 0
    },
    {
        id: 15,
        name: "The Originote Essence Toner",
        price: 65000,
        image: "fotoproduk10.jpg",
        quantity: 0
    }
];

function displayCartItems() {
    const cartList = document.querySelector(".cart-list");
    let totalPrice = 0;

    cartList.innerHTML = "";

    cartItems.forEach(item => {
        const cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");

        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        cartItemDiv.appendChild(itemImage);

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;
        cartItemDiv.appendChild(itemName);

        const itemPrice = document.createElement("div");
        itemPrice.textContent = `Rp. ${item.price.toLocaleString()}`;
        cartItemDiv.appendChild(itemPrice);

        const quantityElement = document.createElement("div");
        quantityElement.textContent = `Quantity: ${item.quantity}`;
        cartItemDiv.appendChild(quantityElement);
    
        const increaseButton = document.createElement("button");
        increaseButton.textContent = "+";
        increaseButton.addEventListener("click", () => {
            item.quantity++;
            displayCartItems(); 
        });
        cartItemDiv.appendChild(increaseButton);

        const decreaseButton = document.createElement("button");
        decreaseButton.textContent = "-";
        decreaseButton.addEventListener("click", () => {
            if (item.quantity > 0) {
                item.quantity--;
                displayCartItems(); 
            }
        });
        cartItemDiv.appendChild(decreaseButton);

        cartList.appendChild(cartItemDiv);

        totalPrice += item.price * item.quantity; 

        
        quantityElement.textContent = `Quantity: ${item.quantity}`;
    });

    const totalPriceElement = document.getElementById("total-price");
    totalPriceElement.textContent = `Rp. ${totalPrice.toLocaleString()}`;
}


// Fungsi proses checkout
function checkout() {
    // menghitung total harga
    let totalPrice = 0;
    cartItems.forEach(item => {
        totalPrice += item.price * item.quantity;
    });

    // pesan konfirmasi untuk checkout
    const confirmation = confirm(`Total: Rp. ${totalPrice.toLocaleString()}\n\nAnda yakin akan melanjutkan pembelian?`);

    if (confirmation) {
       
        alert("Checkout Berhasil!");
    } else {
        alert("Checkout Gagal.");
    }
}

// memanggil fungsi displayCartItems 
document.addEventListener("DOMContentLoaded", () => {
    displayCartItems();
});


