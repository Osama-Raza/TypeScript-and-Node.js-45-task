//Task 1
// Installed Node.js , Typescript and Vs Code .


//Task 2 Personsl nessage
let personName = 'Eric'
console.log(`Hello ${personName} , would you like to learn Python today?`);

//Task 3 (upperCase , lowerCase , titleCase )
var perName = 'osama raza'
console.log('\nupperCase :' + perName.toUpperCase());
console.log('lowerCase :' + perName.toLowerCase());

// titleCase
function titleName (){
    var perName = 'osama raza'
let arr : string[] = []
let spl = perName.split(' ')
for (let i= 0; i < spl.length; i++){
    let titleCase = spl [i][0].toUpperCase() + spl[i].slice(1)
    arr.push(titleCase)
}
    let result = arr.join(' ')
    return result
}
let finalResult = titleName()
 console.log('titleCase ' + finalResult);

// Task 4 (famous quote 1)
 console.log('\nAlbert Einstein once said , "A person never made a mistake never tried  anything new."');

//Task 5 (famous quote 2)
let famousPerson = 'Quaid-e-Azam'
var message = "said ,'No power on earth can undo Pakistan'"
console.log(`\n${famousPerson} ${message}`);

//Task 6 (stripping Names)
let newName = '\t osama raza \n'
console.log('\nwith whitespace ' + newName);
console.log('without whitespace ' + newName.trim());

//Task 7 (Number 8)
let add = 2 + 6
console.log('\naddition 2 + 6 = ' + add);

let sub = 16 - 8
console.log('subtraction 16 - 8 = ' +sub);

let multiply = 2 * 4
console.log('multiply 2 * 4 = ' + multiply);

let division = 16 / 2
console.log('division 16 / 2 = ' +division ,'\n');

//Task 8 (consoling four line to show the answer is 8)
console.log(5 + 3);
console.log(16 - 8);
console.log(2 * 4);
console.log(16 / 2 , '\n');

//Task 9 (Favourite Number)
let fvrtNum = 12
let msg = 'My favourite number is ' + fvrtNum
console.log(msg , '\n') ;

//Task 10 (Adding comments )
// let myName = 'Osama' sinle line comment
/*let date = '18 
Feb' double  line comment */
console.log('Added single and double line comments' , '\n');

//Task 11 (Names)
// friend line in array.
var nameArr = ['Danial' , 'Faisal' , 'Aamir' , 'Bilal' , 'Shoaib' , 'Zohaib']
console.log(nameArr);
// acessing each name in array by index number
console.log(nameArr[0]);
console.log(nameArr[1]);
console.log(nameArr[2]);
console.log(nameArr[3]);
console.log(nameArr[4]);
console.log(nameArr[5] , '\n');

//Task 12 (Greetings)
var nameArr = ['Danial ' , 'Faisal ' , 'Aamir ' , 'Bilal ' , 'Shoaib ' , 'Zohaib ']
let greeting = '"Have a nice day".'
console.log(nameArr[0] + greeting);
console.log(nameArr[1] + greeting);
console.log(nameArr[2] + greeting);
console.log(nameArr[3] + greeting);
console.log(nameArr[4] + greeting);
console.log(nameArr[5] + greeting , '\n');

//Task 13 (Your own array)
let fvrtTranspotation = ['Audi ' , 'Civic ' , 'BR-V ']
fvrtTranspotation.map((cars) => {
console.log('I would like to own a ' + cars);
})

//Array in 1 line
let fvtcar = ['audi ' , 'civic ' , 'alto ' , 'honda'] 
let newCar = fvtcar.map((cars) =>{
    return cars
})
console.log('my fvrt cars are' + ' ' + newCar , '\n');

//Task 14 (Guest List)
var guest = ['Mom,' , 'Dad, ' , 'Sister,']
guest.map((invitation) => {
    console.log(invitation +' "You are invited for todays dinner."' ,'\n');
})

//Task 15  (Changing guest list)
var guest = ['Mom,' , 'Dad, ' , 'Sister,']
console.log(guest[2] + 'cannot attend today.');
let newGuest = guest.splice(2, 1  ,"brother, ") // using slice method to change index number at 2 which was sister to brother.
guest.map ((invite) => {
    console.log(invite + "You are invited for tonigths dinner." , '\n');
})

// Task 16 (More guests)
var guests = ['Mom,' , 'Dad, ' , 'brother ']
guests.map((items) => {
    console.log(`${items} Great news we have arranged a big table`);
})

//new guest in beginning of list by using unshift method
guests.unshift ('Ahmed')
console.log(guests);

// new guest in middle of list by using slice method
guests.splice(3 , 0 , "Bilal")
console.log(guests);

//new guest in end of list by using push method
guests.push ('Raza')
console.log(guests);
guests.map((items) =>{
    console.log(`${items} ,'you  are invited for todays dinner'. \n`);
})

//Task 17 
var guests = [ 'Ahmed', 'Mom,', 'Dad', 'Bilal, ', 'brother ', 'Raza' ]

// sorry msg those who cannot attend party
var msgs = guests.map((inform) =>{
    return inform
})


console.log(msgs +  'we can invite only two members for todays dinner');
// 2 members who can attend party
let invitedList = guests.slice(1,3)
console.log(invitedList);

//those members who caannot attend party
guests.map((list) => {    
    console.log(guests.pop() +  ' sorry the program has cancelled');
})
console.log( guests.shift() + ' sorry the program has cancelled');

// invitation to two members for party
invitedList.map ((members) =>{
    console.log(members + '"You are sill invited for today party".');
})

// showing empty list
let emptyList =( guests.splice(0 ,2))
console.log('Empty list' , guests , '\n');



//Task 18 (Seeing the World)
let places = ['Saudia ' , 'Turkey ' , 'UAE ' , 'Switzerland ' ,'Australia ' ]
// printing original array
console.log('printing original array' , places);
//array in alphabetical order
let arranged = [...places].sort()
console.log('array in alphabetical order' , arranged);
// printing original array
console.log('printing original array' , places);
// printing reverse array
let reverseArray = arranged.reverse()
console.log('printing reverse array' , reverseArray);
// printing original array
console.log('printing original array ' , places);
//Reverse the order of your list
let revList =places.reverse()
console.log('Reverse the order of your list' ,places);
//Reverse the order of your list again
revList.reverse()
console.log('Reverse the order of your list again' ,places);
//Sort your array so it’s stored in alphabetical orde
places.sort ()
console.log('Sort your array so it’s stored in alphabetical order' ,places);
//Sort to change your array so it’s stored in reverse alphabetical order
places.sort().reverse()
console.log('Sort to change your array so it’s stored in reverse alphabetical order' ,places , '\n');

//Task 19 (number of people you are inviting to dinner.)
console.log(`We are inviting ${guest.length} guest. \n`);

//Task 20 (list of languages)
let lang = ['Arabic'  , 'Urdu' , 'English' , 'Chinese']
for (let i = 0; i < lang.length; i++){
    console.log(lang[i] , '\n');   
}

//Task 21 (TypeScript Object)
let obj ={
    myName : "Osama",
    courseName : "Gen AI",
    firstQuarter : "Typescript" ,
    teacherName : "Sir Faisal"
}
console.log(obj);

//Task 22 (Error in data type)
// var wrongData : string[] = [1,2,3,4,5]
// console.log(wrongData);

// updating previos array
var correctData : number[] = [1,2,3,4,5,6,7]
console.log(correctData );


//Task 23 (Conditional Tests)

//true condition 1
let car = 'Subaru';
console.log("Is car == 'Subaru'? I predict True.")
console.log(car == 'Subaru')
// true condition 2
console.log("Is car == 'subaru'? I predict True.")
console.log(car !== 'toyota')
// true condition 3
console.log( "Is car == 'subaru'? I predict True.")
console.log(car.length == 6)
// true condition 4
console.log("Is car == 'subaru'? I predict True.")
console.log(car.toLowerCase() == 'subaru')
// true condition 5
console.log( "Is car == 'SUBARU'? I predict True.")
console.log(car.toUpperCase() == 'SUBARU')
//false condition 1
console.log("Is car == 'subaru'? I predict False.")
console.log(car == 'subaru')
// false condition 2
console.log( "Is car == 'SUBARU'? I predict False.")
console.log(car == 'SUBARU')
// false condition 3
console.log("Is car == 'subaru'? I predict False.")
console.log(car !== 'Subaru')
// false condition 4
console.log( "Is car == 'subaru'? I predict False.")
console.log(car == 'civic')
// false condition 5
console.log( "Is car == 'subaru'? I predict False.")
console.log(car.length !== 6 ,'\n')

//Task 24 (More Conditional Tests)

//Tests for equality

 var subject1 = 'typescript'   
var subjectStudying = 'typescript'
var compare = subject1 == subjectStudying
console.log(compare);// both string are equal so output is true.

//Tests for inequality
var subject1 = 'typescript & python'   
var subjectStudying = 'typescript'
var compare = subject1 == subjectStudying
console.log(compare);// both string are not equal so output is false.
// Tests using the lower case function
var subject1 = 'TYPESCRIPT'   
var subjectStudying = 'typescript'
var compare = subject1.toLowerCase() == subjectStudying
console.log(compare , ' comparing two string in lower and upper case');

// Numerical test
let num1 = 20
let num2 = 25 
console.log(num1 == num2 , ' comparing two non equal numbers');
console.log(num1 < num2 , ' less than');
console.log(num1 > num2 , ' greater than');
console.log(num1 <= num2 , ' less than or equal to');
console.log(num1 >= num2 , ' greater than or equal to');

// Tests using "Or" operator
// Name of week n an array.
let day = ['saturday' , 'monday' , 'tuesday' , 'wednesday' , 'thusday', 'friday' ,'sunday']
// comparing with 'Or' logical operator for weekend.
    if (day[0] == 'saturday' || day[6] == 'sunday'){
    console.log('it is weekend');
    }else {
        console.log('It is weekday');    
    }
//Tests using "And" operator
let userName = 'Osama Raza'
let password = 2345
if(userName == 'Osama Raza' && password == 2345){
    console.log('You are login');   
}else {
    console.log('Enter correct username or password');}

// Test whether an item is in a array
let mobiles  = ['samsung' , 'apple' , 'nokia']
// item in an array
 console.log(mobiles.includes('samsung'));//true
 // item is not in an array
 console.log(mobiles.includes ('vivo') , '\n'); // false
 
//Task 25 (Alien Colors #1)
//alien’s color is green
var alienColor = 'green'
if (alienColor == 'green') {
    console.log('Color is green , cogratulations you scored 5 points , \n');    
} 
// The version that fails will have no output
var alienColor = 'green'
if (alienColor !== 'green'){
    console.log('No output' , '\n');    
}
   
//Task 26 (Alien Colors #2)
var aliensColor = 'red'
// If the alien’s color is green
if (aliensColor == 'green') {
    console.log('Alien’s color is green , "You earned 5 points"');
}else if (aliensColor !== "green"){
    console.log('the alien’s color is not green, "You earned 10 points"');}

//If the alien’s color is not green
var aliensColor = 'green';
if (aliensColor !== 'green') {
    console.log('If the alien’s color is not green , "You earned 5 points"');
}else {
    console.log('You earned 10 points' , '\n');
}

//Task 27 (Alien Colors #3)

// If the alien is green
var aliensColor = 'green'
if (aliensColor == 'green') {
        console.log('Alien color is green. You earned 5 points');
     }else if (aliensColor == 'yellow') {
         console.log('You earned 10 points');
     }else if (aliensColor == 'red') {
        console.log('You earned 15 points');
     }

   //  If the alien is yellow
   var aliensColor = 'yellow'
if (aliensColor == 'green') {
        console.log('You earned 5 points');
     }else if (aliensColor == 'yellow') {
         console.log('Alien color is yellow. You earned 10 points');
     }else if (aliensColor == 'red') {
        console.log('You earned 15 points');
     }

     //  If the alien is red
   var aliensColor = 'red'
   if (aliensColor == 'green') {
           console.log('You earned 5 points');
        }else if (aliensColor == 'yellow') {
            console.log('You earned 10 points');
        }else if (aliensColor == 'red') {
           console.log('Alien color is red. You earned 15 points , \n');
        }

//Task 28 (Stages of Life)
let age = 65
if (age < 2){
    console.log('person is a baby.');
}else if (age < 4){
    console.log('the person is a toddler');
}else if ( age < 13){
    console.log('the person is a kid');    
}else if ( age < 20){
    console.log('the person is a tenager');
}else if (age < 65){
    console.log('the person is a adult');
}else {
    console.log('the person is a old \n');
}

//Task 29 (Favorite Fruit)
//check for certain fruits in your array with check for certain fruits in your array.
let favoriteFruit = ['apple' , 'banana' , 'orange']
if (favoriteFruit[1] == 'banana'){
console.log(favoriteFruit[1] ,' is in list');
} if (favoriteFruit.includes('orange')){
    console.log( 'orange is in list');  
} if (favoriteFruit.includes('apple')){
    console.log( 'apple is in list');  
}

//Make a array of your three favorite fruits and call it favorite_fruits.
let favoriteFruits = ['apple' , 'banana' , 'orange']
console.log(favoriteFruits[0] , 'is my fruit.');
console.log(favoriteFruits[1] , 'is my fruit.');
console.log(favoriteFruits[2] , 'is my fruit.');
//if block should print a statement, such as You really like bananas!
let fruits = ['apple' , 'banana' , 'orange' , 'mango' , 'kiwi']
if (fruits.includes('apple')){
    console.log('I really like apple');
}
if (fruits.includes('banana')){
    console.log('I really like banana');
}
if (fruits.includes('orange')){
    console.log('I really like orange');
}
if (fruits.includes('mango')){
    console.log('I really like mango');
}
if (fruits.includes('kiwi')){
    console.log('I really like kiwi');
}

//Task 30  (Hello Admin)
// list of an admin in an array.
var userNames = ['Admin','Raza' , 'Bilal' , 'Ali' , 'Ahmed' , 'Shahid']
function logIn() {
// making loop to call each admin and members to greet them.
for (let i = 0; i < userNames.length; i++){
    if (userNames[i]=== 'Admin') {
        console.log('Hello admin, would you like to see a status report?');       
    } else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again. \n`);    
    }   
}
}
logIn()

//Task 31 (No Users)
// empty array
var usersName = []
if (usersName.length == 0){
    console.log(' We need to find some users! , \n');
    }

//Task 32 (Checking Usernames)
let currntUsers = ['Ali' , 'Asad' , 'Ahmed', 'Ahad' , 'Atif']
// two users are included in previous array in uppercase and lowercase.
let newUsers = ['ali' , 'ASAD' , 'Bilal' , 'Osaf' ,'Rashid']
 for (let i = 0; i < newUsers.length; i++){
    if(newUsers[i].toLowerCase() === currntUsers[i].toLowerCase()){
        console.log(newUsers[i] , 'name has taken');
    }else {
        console.log(newUsers[i] , 'is available \n');      
    }  
 }

//Task 33 (Ordinal Numbers)
let numb = [1,2,3,4,5,6,7,8,9]
for (let i = 0; i < numb.length; i++){
    if(numb[i] == 1){
        console.log(numb[i]+'st');        
    }else if (numb[i] == 2){
        console.log(numb[i] + 'nd');       
    }else if (numb[i] == 3){
        console.log(numb[i] + 'rd')
}else{
    console.log(numb[i] + 'th' , '\n');   
}
}

//Task 34 (pizza)
// print pizza flavors in each line
let pizzas = ['Cheese Pizza' , 'Afghani tikka' , 'Fajita']
for (let i = 0 ; i < pizzas.length; i++){
    console.log(pizzas[i]);
    
}
// print a line for each pizza
for (let i = 0 ; i < pizzas.length; i++){
    console.log('I like' ,pizzas[i]);  
}
// Print additional line
console.log('I really love pizza \n');

//Task 35 (Animals)
// print a line for each animal
let animals = ['dog' , 'cat' ,'parrot']
for (let animal of animals){
    console.log(animal);   
}
// print a message for each animal
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet`);   
}
// Print additional line regarding favourite pet
console.log(animals[0] ,  'would make a great pet!' , '\n');

//Task 36 (T-Shirts)
// making function with parameters to print size and message on t-shirt.
function makeTshirt (sizes : string , messages : string){    
    console.log(`I ordered ${sizes} size t-shirt having message ${messages}`);
}
makeTshirt('medium' , '"I love typeScript" , \n' )

//Task 37 (Large Shirts)
function makeShirt (size :string = 'Large' , message :string = "'I love typescript'")  {
console.log(`Size: ${size} Message: ${message} `);

}
makeShirt ()
makeShirt("Medium")
makeShirt ('Small' , '"Learning typescript by Sir Faisal." \n')

//Task 38 (Cities)
function describeCity (city: string , country : string = 'Pakistan') {
console.log(`${city} is in ${country}`);

}
describeCity ('Karachi' )//Default country
describeCity ('Multan')//Default country
describeCity ('Mumbai' , 'India  \n' ) // not a default country

//Task 39 (city names)
function cityName (city : string ,country : string ):string{
    return `${city},  ${country}`
}
let cityNames = cityName('Lahore' , 'Pakistan')
console.log(cityNames);
let cityName_2 = cityName('Istambol' , 'Turkey')
console.log(cityName_2);

let cityName_3 = cityName('Makka' , 'Saudia')
console.log(cityName_3);

//Task 40 (Album)
function makeAlbum (artist : string , title : string , track? : any  ){
let dictionries = {
     artist,
     title,
};
// if track is not defined it will not console
if (track !== undefined){
    dictionries.track = track
}
return dictionries
}
let album1= makeAlbum('Backstreetboys' , 'I want it that way')
let album2= makeAlbum('Artist-2' , 'Title-2')
let album3= makeAlbum('Artist-3' , 'Title-3' ,5)
console.log(album1);
console.log(album2);
console.log(album3 , '\n');



//Task 41 (magician)
// list of magicians in an array.

var magicians = ['Simo Aalto' , 'David Abbot' , 'David Acer' , 'Allan Ackerman' , 'Curtis Adams']

//making function to print each magician name.
function showMagician(){
    for (let i=0; i < magicians.length; i++) {
        console.log(magicians[i]);        
    }
}
showMagician()


//Task 42 (Great Magicians)

// original array
var magicians = ['Simo Aalto' , 'David Abbot' , 'David Acer' , 'Allan Ackerman' , 'Curtis Adams']
// function to add word (The great) using loop with each magician name.
function makeGreat (magicianNames : string[]){
    for (let i = 0; i< magicianNames.length; i++ ) {
        magicianNames[i]  +=  ' The great' ;   
    }
}
// function to show magician name.
function showMagicians(){
    for (let magician of magicians) {
        console.log(magician , '\n') ;        
    }
}

makeGreat(magicians)
showMagicians()

//Task 43 (Unchanged Magicians)

// array of magician names.
var magicians:string[] = ['Simo Aalto' , 'David Abbot' , 'David Acer' , 'Allan Ackerman' , 'Curtis Adams']
function makeGreat2(names : string[]){
    for(let i = 0 ; i < names.length; i++){
     names[i] += ' The great'
     console.log(names[i]);
     
    }    
}

function showMagician2(magiciansNames : string[]){
    for (let i = 0 ; i < magiciansNames.length; i++)
    console.log(magicians[i]);
    
}

showMagician2(magicians)// Magician names.
makeGreat2(magicians) //Name with the great.

//Task 44 (sandwich)
// making function having 1 parameter which  will return multiple numbers of arguments by using (...items).
function sandwich (...items : string[]){
console.log('\nPerson wants on his sanndwich');
for (let i=0; i<items.length;i++){
    console.log('>' ,items[i]);
}
} // calling three different functions in array that what a user wants in his sandwich.
sandwich('ketchup' , 'cheese' , 'tomato')
sandwich('chicken' , 'egg' , 'extra cheese')
sandwich('salad' , 'mayo' , 'beef')

//Task 45 (cars)
// making function having parameters of manufactures , modelname and addition features.
function carInfo (manufacturer: string ,  modelName: string, ...option: [string , any][]){
    // object of car manufacture and model name.
let cars : any = {
    manufacturer: manufacturer,
    modelName: modelName,  

}
// loop which will reture additional feature of car in  pair of key and value.
for (let [key , value] of option){
    cars[key] = value
}
return cars
}
let newCars: string = carInfo ('Honda' , 'Civic' ,['Color' , 'Red'] , ['Feature' , 'Sunroof'])
console.log(newCars);
