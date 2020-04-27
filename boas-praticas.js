var variavelGlobal = ""; // Nunca fazer uma declaração de uma variavel dessa forma pois ela estara disponivel em todos os scripts

(function() {
    var escopoLocal,
    escopoGlobal,
    foo,
    obj,
    array; // Forma correta de declarar uma variavel, ela esta dentro de uma função auto-executavel.

    escopoLocal = "foo"; // Sempre utilizar strings com aspas duplas
    console.log(escopoLocal);

    obj = {
        foo: 'bar', // Alguns compiladores nao entendem um objeto json com aspas simples
        bar: "foo",
        foobar: "oi" // Sempre quando for um objeto json e tiver muitas propriedades, quebre as linhas para que fique com uma melhor leitura
    }; 

    // Quebre as linhas tambem para Arrays com muitos valores
    array = [
        1,
        2,
        3
    ];

})();