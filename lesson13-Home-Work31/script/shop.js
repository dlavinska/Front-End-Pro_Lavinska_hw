const products = {
    phones: [
        {
            name: "Apple iphone 12",
            image: "images/apple12.jpg",
            description: `Screen (6.1, OLED (Super Retina XDR), 2532x1170) / Apple A14 Bionic/
                        dual main camera: 12 MP + 12 MP, front camera: 12 MP /
                        128 GB of built-in memory / 3G / LTE / 5G / GPS / Nano-SIM, eSIM / iOS 14`,
            price: 29999,
        },
        {
            name: "Samsung Galaxy A73 5G 6/128Gb Gray",
            image: "images/samsung-galaxy-A73.jpg",
            description: `Screen (6.7, Super AMOLED Plus, 2400x1080) 
                        / Qualcomm Snapdragon 778G (4 x 2.4 GHz + 4 x 1.8 GHz) 
                        / main quad camera: 108 MP + 12 MP + 5 MP + 5 MP, front 32 MP 
                        / RAM 6 GB /
                        128 GB of built-in memory + microSD (up to 1 TB) /
                        3G / LTE / 5G / GPS / A-GPS /
                        GLONASS / BDS / support for 2 SIM cards (Nano-SIM) /
                        Android 12 / 5000 mAh`,
            price: 17999,            
        },
        {
            name: "Apple iPhone 11 128GB White (MHDJ3)",
            image: "images/apple11.jpg",
            description: `Screen (6.1", IPS (Liquid Retina HD), 1792x828)
                        / Apple A13 Bionic / main dual camera: 12 MP + 12 MP,
                        front camera: 12 MP / RAM 4 GB / 128 GB built-in memory /
                        3G / LTE / GPS / GLONASS / Nano-SIM / iOS 13 / 3046 mAh`,
            price: 25499,            
        },    
    ],
    tablets: [
        {
            name: "Apple iPad 10.2, 2021 Wi-Fi 64 GB Silver",
            image: "images/apple-ipad-10.2.jpg",
            description: `Screen 10.2" IPS (2160x1620) MultiTouch
                        / Apple A13 Bionic (2.65 GHz) / 64 GB of built-in memory /
                        Wi-Fi / Bluetooth 4.2 / main camera 8 MP, front — 12 MP /
                        iPadOS 15 / 487 g / silver`,
            price: 16999, 
        },
        {
            name: "Samsung Galaxy Tab A7 Lite",
            image: "images/samsung-tablet.jpg",
            description: `Screen 8.7" (1340x800) MultiTouch/
                        MediaTek Helio P22T (2.3 GHz)/RAM 4 GB/64 GB built-in memory + microSD/3G/4G/Wi-Fi/Bluetooth 5.0/
                        main camera 8 MP, front — 2 MP/ GPS/GLONASS/Android 11/371g/grey`,
            price: 8299, 
        },
        {
            name: "Lenovo Tab M10 HD (2nd Gen) Wi-Fi 3/32GB Iron Grey (ZA6W0250UA)",
            image: "images/lenovo-tab.jpg",
            description: `Screen 10.1" (1280x800) MultiTouch /
                        MediaTek Helio P22T (2.3 GHz) / RAM 3 GB /
                        32 GB internal memory + microSD / Wi-Fi / Bluetooth 5.0 /
                        main camera 8 MP, front - 5 MP / GPS / GLONASS /
                        Android 10 / 420 g / grey`,
            price: 6499, 
        },        
    ],
    laptops: [
        {
            name: "ASUS TUF Gaming A15 FA506ICB-HN119 (90NR0667-M00KT0) Graphite Black",
            image: "images/asus-laptop.jpg",
            description: `Screen 15.6" IPS (1920x1080) 
                        Full HD 144Hz, matte / AMD Ryzen 5 4600H (3.0 - 4.0 GHz) /
                        RAM 16 GB / SSD 512 GB /
                        nVidia GeForce RTX 3050, 4 GB / without OD / LAN / Wi-Fi / Bluetooth / webcam /
                        no OS / 2.3 kg / black`,
            price: 35999, 
        },
        {
            name: "Apple MacBook Air 13, M1 256GB 2020 (MGN93) Silver",
            image: "images/apple-macbook.jpg",
            description: `Screen 13.3" Retina (2560x1600) WQXGA, glossy / 
                        Apple M1 / RAM 8 GB / SSD 256 GB /
                        Apple M1 Graphics / Wi-Fi / Bluetooth / macOS Big Sur / 1.29 kg / silver`,
            price: 44499, 
        },
        {
            name: "Acer Aspire 3 A315-58G-548E (NX.ADUEU.01N) Pure Silver",
            image: "images/acer-laptop.jpg",
            description: `Screen 15.6" IPS (1920x1080) Full HD,
                        matte / Intel Core i5-1135G7 (2.4 - 4.2 GHz) / RAM 8 GB
                        / SSD 512 GB / nVidia GeForce MX350, 2 GB / without OD /
                        LAN / Wi-Fi / Bluetooth / web camera / without OS / 1.7 kg / silver`,
            price: 23999, 
        },        
    ],
}

const categories = document.querySelector(".categories");
const listProducts = document.querySelector(".list-products");
const productInfo = document.querySelector(".product-info-box");
const productImg = document.querySelector(".img-product");
const productDescr = document.querySelector(".product-description");
const productPrice = document.querySelector(".product-price");
const buyButton = document.querySelector(".buy-button");
const message = document.querySelector(".message");
const popUpBg = document.querySelector(".pop-up-bg");
const popUpBtn = document.querySelector(".btn-pop-up");

function showElement(element) {
    element.classList.add("show");
    element.classList.remove("hide");
}

function hideElement(element) {
    element.classList.remove("show");
    element.classList.add("hide");
}

categories.addEventListener("click", (e) => {
    const target = e.target;

    if (target === e.currentTarget) {
        return target;
    }

    hideElement(productInfo);
    showElement(listProducts);

    for (prop in products) {
        const productArray = products[prop];
        const productArrayName = prop;

        if (productArrayName === target.dataset.filter) {
            if (listProducts.children.length > 0) {
                while (listProducts.firstChild) {
                    listProducts.removeChild(listProducts.firstChild);
                }
            }

            productArray.filter((el) => {
                const li = document.createElement("li");

                li.className = "list-item";
                li.innerHTML = el.name;

                return listProducts.append(li);
            });
        }
    }
});

listProducts.addEventListener("click", (e) => {
    const target = e.target;

    if (target === e.currentTarget) {
        return target;
    }

    showElement(productInfo);

    for (prop in products) {
        const productArray = products[prop];
        productArray.filter((el) => {

            if (target.innerText === el.name) {
                productImg.src = el.image;
                productDescr.innerText = `Description: ${el.description}`;
                productPrice.innerText = `Price: ${el.price} ₴`;
            }
        });
    }
});

function showMessage() {
    showElement(message);
    showElement(popUpBg);
}

function hideMessage() {
    hideElement(message);
    hideElement(popUpBg);
}

buyButton.addEventListener("click", () => {
    showMessage();
    hideElement(productInfo);
    hideElement(listProducts);

    setTimeout(() => {
        hideMessage();
    }, 3000);
});

popUpBtn.addEventListener("click", hideMessage);