// function Person(){
//     let name = 'Naveen';



//     function PersonName(){
//         console.log(name);
//     }
//     PersonName();
// }
// Person();


// ----------------------output =Naveen-------------------



// function Person() {
//     let naam = "Naveen";

//     function PrintName() {
//         console.log(naam);
//     }
//     return PrintName;
// }

// let fun = Person();

// fun();



// ------eg of closure----------------output =Naveen-------------------




// console.log("first")
// setTimeout(function () {
//     console.log("run after 4 sec ")
// }, 4000)
// console.log("end");

// ----------------------output =first , end , run after 4s-------------------


// console.log("start")

// setTimeout( function(){
//     console.log('run after 4 seconds')
// } , 4000 )


// setTimeout( function(){
//     console.log('run after 2 seconds')
// } , 2000 )

// console.log("end")


// ----------------------output =start , end ,2s ,4s-------------------


// console.log("start")

// setTimeout( function(){
//     console.log('run after 0 seconds')
// } , 0 )


// console.log("end")

// ----------------------output =start , end ,0s-------------------




// function x() {
//     for (var i = 0; i < 6; i++) {
//         function close(i) {
//             setTimeout(function () {
//                 console.log(i);
//             }, 1000 * i)
//         }
//         close(i);
//         console.log("interview");
//     }
// }
// x();

// ----------------------output =interview , 0,1,2,3,4,5------------------


// function step1(){
//     console.log("selecting image")
//     setTimeout(function(){
//         console.log("image selected");
//         return("image selected");
//     } , 4000)
// }

// function step2(image){
//     console.log('applying filter')
//     setTimeout(function(){
//         console.log(`applied the fiter to the ${image}`);
//         return "filtered image"
//     } , 2000)
// }

// function step3(filter){
//     console.log("selecting caption");
//     setTimeout(function(){
//         console.log(`caption added to the ${filter}`)
//         return 'final image'
//     } , 3000)
// }

// function step4(final){
//     console.log('uploading your image plz wait');
//     setTimeout(function(){
//         console.log(`uploaded your ${final}`)
//     } , 4000)
// }

// let image = step1();
// let filter = step2(image);
// let final = step3(filter);
// step4(final);



// ------------------------------------------------------------

// function step1(cb){
//     console.log("selecting the image")
//     setTimeout(function(){
//         console.log('image selected')
//         cb('selected image');
//     } , 4000)
// }
// function step2(image , cb){
//     console.log(`applying filter to the ${image}`)
//     setTimeout(function(){
//         console.log('filter applied successfully');
//         cb('filtered image')
//     } , 2000)
// }
// function step3(filter , cb){
//     console.log(`applying caption to the ${filter}`);
//     setTimeout(function(){
//         console.log('caption apllied successfuly');
//         cb('final image')
//     } , 3000)
// }
// function step4(final){
//     console.log(`uploading the ${final}`);
//     setTimeout(function(){
//         console.log('image uploaded successfully')
//     } , 4000)
// }

// step1(function(image){
//     step2(image , function(filter){
//         step3(filter , function(final){
//             step4(final);
//         });
//     })
// });

// ------------------------------------------------------------

// let promise= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let data = "hello world"
//         // resolve(data)
//         let err= "by world"
//         reject(err)
//     },3000)
// })

// // promise.then(function(data){
// //     console.log(data)
// // }) 
// promise.catch(function(err){
// console.log(err)
// })



// ------------------------------------------------------------

// let naveen = new Promise((resolve, reject) => {
//     console.log("wait for 3 sec ")
//     setTimeout(() => { 
//         resolve()
//     }, 3000)
// })
// .then(()=>{
//     console.log('work done')
// })


// ------------------------------------------------------------

// let naveen = new Promise((resolve, reject) => {
//     console.log('wait for 5 sec')
//     setTimeout(() => {
//         resolve()
//     }, 5000)
// })
//     .then(() => {
//         console.log('work done')
//     })
//     .then(() => {
//         return new Promise((resolve, reject) => {
//             console.log('again wait for 5 sec')
//             setTimeout(() => {
//                 resolve()
//             }, 5000)
//         },)
//     })
//     .then(() => {
//         console.log('work again done')
//     })


// ------------------------------------------------------------




// let abc = document.querySelector('p');
// let bcd = document.querySelector('h1');


// abc.classList.add("naveen");
// bcd.classList.add("negi");


// ------------------------------------------------------------


// function outer() {
//     let no = 0;
//     function inner() {
//         no++
//         console.log(no)
//     }
//     return inner
// }
// const value = outer()
// value()
// value()


// ------------------------------------------------------------

//    html

// <input id="input" type="text">
// <button id="button" type="submit">submit</button>
// <ul id="ul"></ul>


//   js

// let input = document.querySelector('#input')
// let button = document.querySelector('#button')
// let ul = document.querySelector('#ul')

// button.addEventListener('click', function () {
//     const value = input.value

//     const li = document.createElement('li')
//     li.innerText = value

//     ul.appendChild(li)

//     li.addEventListener('click', function () {
//         ul.removeChild(li)
//     })

// }
// )

// ------------------------------------------------------------


//  html

//                 <button id="Red">Red</button>
//    <button id="yellow">yellow</button>


//    js

// let button1 = document.querySelector('#Red')
// let button2 = document.querySelector('#Yellow')

// button1.addEventListener('click', function () {
//     document.body.style.backgroundColor = "red";

// })


// button2.addEventListener('click', function () {
//     document.body.style.backgroundColor = 'yellow';

// })



// ------------------------------------------------------------


// var details = ['naveen', 'negi', 'coder'];

// details.forEach(function (value, index) {
//     document.write(index +'  :  '+ value + '<br>')

// })


// ------------------------------------------------------------
let h1 = $('h1')

// let inp = $('#inp')


// h1.first().addClass('first second');

// // ---------------------------------


// console.log(h1.first().hasClass('first'));
// console.log(h1.first().hasClass('first second'));

// // ---------------------------------

// h1.first().toggleClass('first');






// $('button').click(function(){
//     console.log('clicked')
// })



// $('li').click(function(e){
//     console.log($(this).text())
// })

// // ---------------------------------



// $('button').on( 'click' , function(){
// console.log('hello')
// })


// // ---------------------------------

$('fadeIn').click(function(){
    $('#divv').fadeIn();
})

$('fadeOut').click(function(){})
$('#divv').fadeOut();


$('fadeToggle').click(function(){})
$('#divv').fadeToggle();






















































