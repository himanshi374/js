const name = "Himanshi"
const repoCount = 50
    //console.log(name + repoCount + " Value")
    console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

    const gameName = new String('Himanshi-soni-com') 

    console.log(gameName[3]);
    console.log(gameName.__proto__);
    console.log(gameName.length);
    console.log(gameName.toUpperCase());
    console.log(gameName.charAt(5));



   const newString = gameName.substring(0,5)
   console.log(newString);


   const anotherString = gameName.slice(-12,4)
   console.log(anotherString);


   const newStringOne = "    Himanshi     "
   console.log(newStringOne);
   console.log(newStringOne.trim());

   const url = "https://himanshi.com/himanshi%20soni"
   console.log(url.replace('%20','-'));

   console.log(url.includes('himanshi'));

   console.log(gameName.split('-'));
