basic.forever(function () {
    for (let columna = 0; columna <= 4; columna++) {
        for (let fila = 0; fila <= 4; fila++) {
            led.plot(fila, columna)
            basic.pause(100)
            led.unplot(fila, columna)
        }
    }
})
