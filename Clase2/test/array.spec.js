//const { expect } = require("chai")
let chai = require('chai');
let expect = chai.expect;

describe('MyArray', function () {
    let unaCosa = 10;

    it('tiene length como un array regular', function () {

        // Arrange
        let MyArray = []; // objeto similar a u array

        // Act
        MyArray.push(1); // hago actuar el objeto

        // Assert
        expect(MyArray.length).to.eq(1); //pongo a prueba el funcionamiento del objeto 
    })

    it('tienne acceso a los elementos como un array regular', function () {

        // Arrange
        let MyArray = [];


        // Act
        MyArray.push("una cosa");


        // Assert
        expect(MyArray[0]).to.eq("una cosa");

    }
    )

    // DESCRIBE DENTRO DE OTRO DESCRIBE
    describe('tiee un metodo push', function () {
        it('que existe', function(){
            //Arrange
            let MyArray = [];
            unaCosa;
            expect(true).to.eq(true);
        })
        
        it('pruebo algo mal', function(){
            
        })
    
    
    })
})


