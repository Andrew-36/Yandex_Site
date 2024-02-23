let item = document.querySelectorAll('.slider-item');
let section_slider_line = document.querySelector('.section-slider-line');
let left_btn = document.querySelector('.section-title-btn-left');
let right_btn = document.querySelector('.section-title-btn-right');
let count = 0;

function rollSlider(){
    section_slider_line.style.transform = 'translate(-' + count*420 + 'px)';
}

left_btn.addEventListener('click',()=>{
    count--;
    if(count < 0){
        count = item.length-3;     
    }
    rollSlider();
});

right_btn.addEventListener('click',()=>{
    count++;
    if(count >= item.length-2){
        count = 0;
    }
    
    rollSlider();
});

/*==================================================*/
let box = document.querySelectorAll('.box');
let main_tree_box = document.querySelector('.main-tree-box');
let main_left_btn = document.querySelector('.main-btn-left');
let main_right_btn = document.querySelector('.main-btn-right');
let counter = 0;

function RollSlider(){
    main_tree_box.style.transform = 'translate(-' + counter*394 + 'px)';
}

main_left_btn.addEventListener('click',()=>{
    counter--;
    if(counter < 0){
        counter = item.length-1;     
    }
    RollSlider();
});

main_right_btn.addEventListener('click',()=>{
    counter++;
    if(counter >= item.length){
        counter = 0;
    }
    
    RollSlider();
});
