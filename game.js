
const symbolTypes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ','ク', 'ケ', 'コ', 'サ', 'シ', 'ス','セ', 'ソ', 'タ', 'チ', 'ツ', 'テ','ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ','ヒ','フ','ヘ','ホ','マ','ミ','ム','メ','モ','ヤ','ユ','ヨ','ラ','リ','ル','レ','ロ','ワ','ン','1','2','3','4','5','6','7','8','9','0'];


const c = document.getElementById("MainCanvas");
let ctx = c.getContext("2d");
ctx.font = "8px Arial";
ctx.fillStyle = "green";

let symbols = [];
let addCountDown = 5;

const getSymbolType = () => {
    return symbolTypes[[Math.floor(Math.random()*symbolTypes.length)]]
}

const addSymbol = () => {
    let symbol = {
        type: getSymbolType(),
        speed: 1,
        red: 'f',
        green: 'f',
        blue: 'f',
        x: Math.floor(Math.random()*c.width),
        y: 0,
        parent: true,
        count: 8
    };
    symbols.push(symbol);
}

const decColor = (symbol) => {
    if(symbol.count > 0) {
        symbol.count--;
        return;
    }
    else {
        symbol.count = 1;
    }
    if(symbol.red === 'f') {
        symbol.red = 'e'
        symbol.blue = 'e'
    }
    else if( symbol.red === 'e') {

        symbol.red = 'd'
        symbol.blue = 'd'
    }
    else if( symbol.red === 'd') {

        symbol.red = 'c'
        symbol.blue = 'c'
    }
    else if( symbol.red === 'c') {

        symbol.red = 'b'
        symbol.blue = 'b'
    }
    else if( symbol.red === 'b') {

        symbol.red = 'a'
        symbol.blue = 'a'
    }
    else if( symbol.red === 'a') {

        symbol.red = '9'
        symbol.blue = '9'
    }
    else if( symbol.red === '9') {

        symbol.red = '8'
        symbol.blue = '8'
    }
    else if( symbol.red === '8') {

        symbol.red = '7'
        symbol.blue = '7'
    }
    else if( symbol.red === '7') {

        symbol.red = '6'
        symbol.blue = '6'
    }
    else if( symbol.red === '6') {

        symbol.red = '5'
        symbol.blue = '5'
    }
    else if( symbol.red === '5') {

        symbol.red = '4'
        symbol.blue = '4'
    }
    else if( symbol.red === '4') {

        symbol.red = '3'
        symbol.blue = '3'
    }
    else if( symbol.red === '3') {

        symbol.red = '2'
        symbol.blue = '2'
    }
    else if( symbol.red === '2') {
        symbol.red = '1'
        symbol.blue = '1'

    }
    else if( symbol.red === '1') {
        symbol.red = '0'
        symbol.blue = '0'

    }
    else if( symbol.green === 'f') {
        symbol.green = 'e'

    }
    else if( symbol.green === 'e') {
        symbol.green = 'd'
    }
    else if( symbol.green === 'd') {
        symbol.green = 'c';
    }
    else if( symbol.green === 'c') {
        symbol.green = 'b'
    }
    else if( symbol.green === 'b') {
        symbol.green = 'a'
    }
    else if( symbol.green === 'a') {
        symbol.green = '9'
    }
    else if( symbol.green === '9') {
        symbol.green = '8'
    }
    else if( symbol.green === '8') {
        symbol.green = '7'
    }
    else if( symbol.green === '7') {
        symbol.green = '6'
    }
    else if( symbol.green === '6') {
        symbol.green = '5'
    }
    else if( symbol.green === '5') {
        symbol.green = '4'
    }
    else if( symbol.green === '4') {
        symbol.green = '3'
    }
    else if( symbol.green === '3') {
        symbol.green = '2'
    }
    else if( symbol.green === '2') {
        symbol.green = '1'
    }
    else if( symbol.green === '1') {
        symbol.green = '0'
    }
}

const drawSymbols = () => {
    symbols = symbols.filter(symbol => symbol.y < c.height + 45 && symbol.green !== '0');
    symbols.forEach((symbol) => {
        
        ctx.strokeStyle = "#" + symbol.red + symbol.green + symbol.blue;
        ctx.strokeText(symbol.type, symbol.x, symbol.y);
        symbol.y = symbol.y + symbol.speed;

        if(symbol.parent) {
            if (symbol.count > 0) {
                symbol.count--
            }
            else {
                symbol.count = 8;
                symbols.push({
                    type: symbol.type,
                    speed: 0,
                    red: 'f',
                    green: 'f',
                    blue: 'f',
                    x: symbol.x,
                    y: symbol.y,
                    parent: false,
                    count: 1
                })
                if(Math.floor(Math.random() * 100) > 30) {
                    symbol.type = getSymbolType();
                }
            }
        }
        else {
            decColor(symbol)
        }
    } );
}


const clearScreen = () => {
    ctx.clearRect(0, 0, c.width, c.height);
}

const step = () => {
    console.log(symbols.length)
    clearScreen();
    drawSymbols();
    if(addCountDown > 0) {
        addCountDown--;
    }
    else {
        addCountDown = 5;
        addSymbol();
    }
}


addSymbol();

setInterval(step, 50);