

// 1
// let fullName = 'Rafig Mammadzada Natig'
// const splitmethod = fullName.split('')
// console.log(splitmethod);

//2,3
// let fullName = 'Rafig Mammadzada Natig'
// let newfullname = fullName.split(' ')
// console.log(newfullname);
// let newfullname1 = [ `${newfullname [1]},${newfullname [0]},${newfullname [2]}` ]
// console.log(newfullname1);
// let newfullname2 = newfullname1.join('')
// console.log(newfullname2);

//4

let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// let arr1 =arr.filter((item,index) => item === 5)
// console.log(arr1.length);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin

// let sum = 0 
// arr.map((item,index) => sum = sum + item)
// console.log(sum);

// let arr1 = arr.reduce((acc,curr) => acc + curr ,0)
// console.log(arr1);
//6) arrayda tekrar olunan reqemleri artan sira ile duzun

// console.log(arr.sort());

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)

// let maxnumber = Math.max(...arr)
// console.log(maxnumber);
// let maxnumberrepeat = arr.filter(item => item == maxnumber)
// console.log(maxnumberrepeat);

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
// let firstname = 'Rafig'
// let namenumber = firstname.split('')
// console.log(namenumber.length);
// let YesorNo = arr.includes(namenumber.length);                //internetden yardim aldim xatrlamadim incudes metodunu kecmemisik mence
// console.log(YesorNo);

//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin.

// let first = arr.indexOf(arr.find((item,index) => item % 3 === 2))
// console.log(first);


//10) arraydaki en boyuk reqemin ilk indexini tapin
// let first = arr.indexOf(arr.find((item,index) => item === Math.max(...arr) ))
// console.log(first);

//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
// let first = arr.indexOf(arr.filter((item,index) => item === 4))
// console.log(first);                   // bunu hec bilmedim internetdeki metodlari bele basa dusmedim

///

// let first = arr.filter((item,index) => item > 2)
// console.log(first);
// console.log(arr.length - first.length);



// 7 reqeminin indexleri cemini tapin.

// let first = arr.indexOf(arr.filter((item,index) => item === 7))
// console.log(first);
  
// bu indexlerin tapilmasi zad hec dersde yadma gelmir internetdeki methodlar cox advanced seviyyededi asagi seviyye tapa bilmedim basa dusmey ucun



let arr2 = [
    {
        name: 'test',
        key: 1
    },
    {
        name: 'task',
        key: 2
    },
    {
        name: 'tanqo',
        key: 3
    },
    {
        name: 'like',
        key: 4
    },
    {
        name: 'task',
        key: 5
    },
    {
        name: 'trust',
        key: 6
    },
    {
        name: 'test',
        key: 7
    },
    {
        name: 'last',
        key: 8
    },
    {
   name: 'tanqo',
        key: 9
    },
    {
        name: 'elephant',
        key: 10
    },
    {
        name: 'love',
        key: 11
    },
    {
        name: 'small',
        key: 12
    },
    {
        name: 'little',
        key: 13
    },
]

// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin

// function nameT(arr2) {
//     return arr2.filter((item,index)  => item.name.startsWith('t') )
// }
// const result = nameT(arr2)
// console.log(result);

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin

// function nameT(arr2) {
//     return arr2.filter((item,index)  => item.name.startsWith('t') && item.name.endsWith('t'))

// }
// const result = nameT(arr2)
// console.log(result.length);
//
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin


// function nameT(arr2) {
//     return arr2.filter((item,index)  => item.name.startsWith('t') && item.name.endsWith('t'))
// }
// const result = nameT(arr2)
// const sumOfKeys = result.reduce((sum, item) => sum + item.key, 0);
// console.log(sumOfKeys);

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
// function newname(arr2) {
//     return arr2.filter(item => item.name.endsWith('e'))
// }
// const newarr = newname(arr2);
// console.log(newarr);
// const newarr1 = newarr.map(item => ({name: item.name ? 'SuperDev' : item.name}));               //burdada yardim aldim
// console.log(newarr1);

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin

//// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
//
// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.


