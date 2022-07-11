window.addEventListener('DOMContentLoaded', () => {
    console.log('ficne');
    const heart = document.querySelector('.heart');
    const boots = document.querySelector('.boots');
    const socker1 = document.querySelector('.cur1');
    const socker2 = document.querySelector('.cur2');
    const size = document.querySelector('.button');
    const size1 = document.querySelector('.button2');
    const roll = document.querySelector('.SIZE');
    const SizeScroll = document.querySelector('.und7нer_button');
    const SizeScroll1 = document.querySelector('.under_button1');
    const card = document.querySelector('.card');
    const addToCard = document.querySelector('.button1');
    const addToCard1 = document.querySelector('.button3');
    const sizes = document.querySelectorAll('.size_t');
    const sizes1 = document.querySelectorAll('.size_z');
    heart.addEventListener('click', () => {
        if (heart.classList.contains('heart_red')) {
            console.log("yep");
            heart.innerHTML = '<i class="far fa-heart"></i> ';
            heart.classList.remove('heart_red');
            heart.classList.add('fade')
        } else {
            console.log("fuck");
            heart.innerHTML = ' <i class="fas fa-heart"></i> ';
            heart.classList.add('heart_red');
            heart.classList.add('fade');
        }
    });
    socker1.addEventListener('click', () => {
        boots.innerHTML = "  <img src='img/img.jpg' alt='boots'> ";
    });
    socker2.addEventListener('click', () => {
        boots.innerHTML = "  <img src='img/img1.jpg' alt='boots'> ";
    });

    function showSizeScroll(e) {
        e.classList.remove("hide");
        e.classList.add("show");
        e.classList.add("fade");
    }

    function hideSizeScroll(e) {
        e.classList.remove("show");
        e.classList.remove("fade");
        e.classList.add("hide");
    }
    hideSizeScroll(SizeScroll);
    size.addEventListener('click', () => {
        if (SizeScroll.classList.contains("hide")) {
            showSizeScroll(SizeScroll);
        } else {
            hideSizeScroll(SizeScroll);
        }
    });
    hideSizeScroll(SizeScroll1);
    size1.addEventListener('click', () => {
        if (SizeScroll1.classList.contains("hide")) {
            showSizeScroll(SizeScroll1);
        } else {
            hideSizeScroll(SizeScroll1);
        }
    });
    let ar = 0;
    addToCard.addEventListener('click', () => {
        ar++;
        card.innerHTML = `<i class='fas fa-shopping-basket'></i><a href='CLG'>Card(${ar})</a>`;
    });
    addToCard1.addEventListener('click', () => {
        ar++;
        card.innerHTML = `<i class='fas fa-shopping-basket'></i><a href='CLG'>Card(${ar})</a>`;
    });
//     let str = "stringify";
// // 'strin', символы от 0 до 5 (не включая 5)
// alert( str.slice(0, 5) );
    // sizes.forEach((e) => {
    //     e.addEventListener('click', ()=>{
    //         size.innerHTML = `${e.textContent}<span class="arrow"><i class="fas fa-chevron-down"></i></span>`;
    //     });
    // });
    function size_choice(a,b){
        a.forEach((e) => {
            e.addEventListener('click', ()=>{
                b.innerHTML = `${e.textContent}<span class="arrow"><i class="fas fa-chevron-down"></i></span>`;
            });
        });
    }
    size_choice(sizes, size);
    size_choice(sizes1, size1);
    
});