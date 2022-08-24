
const symbolTypes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ','ク', 'ケ', 'コ', 'サ', 'シ', 'ス','セ', 'ソ', 'タ', 'チ', 'ツ', 'テ','ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ','ヒ','フ','ヘ','ホ','マ','ミ','ム','メ','モ','ヤ','ユ','ヨ','ラ','リ','ル','レ','ロ','ワ','ン','1','2','3','4','5','6','7','8','9','0'];


const c = document.getElementById("MainCanvas");
let ctx = c.getContext("2d");
ctx.font = "8px Arial";
ctx.fillStyle = "green";

let symbols = [];

const getSymbolType = () => {
    return symbolTypes[[Math.floor(Math.random()*symbolTypes.length)]]
}

const addSymbol = () => {
    console.log("Adding symbol");
    let symbol = {
        type: getSymbolType(),
        x: Math.floor(Math.random()*c.width),
        y: 0
    };
    symbols.push(symbol);
}

const drawSymbols = () => {
    symbols.forEach((symbol) => {
        
        ctx.fillStyle = "green";
        ctx.fillText(symbol.type, symbol.x, symbol.y);
        console.log(symbol.type);
        symbol.y = symbol.y + 1;
    } );
}


const clearScreen = () => {
    console.log("Clear")
    ctx.clearRect(0, 0, c.width, c.height);
}

const step = () => {
    clearScreen();
    drawSymbols();
    addSymbol();
}


addSymbol();

setInterval(step, 100);