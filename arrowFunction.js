// var number = () => {
//     return 10;
// }

// let number = (a, b) => a + b;

// console.log(number(10, 5));

var javascript = {
    name :'JavaScript',
    libraries: ['react', 'vue', 'angular'],
    printLibraries: function() {
        this.libraries.forEach((a) => {
            console.log(`${this.name} love ${a}`);
        })
    }
}

javascript.printLibraries();


function persone(name) {
    this.name = name;
}

var sakib = new persone('sakib');