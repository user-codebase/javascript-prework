function playGame(playerInput){
    
    clearMessages();
    
    function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    }else if(argMoveId == 2){
        return 'papier';
    }else if(argMoveId == 3){
        return 'nożyce';
    }else{
        return 'nieznany ruch';
    }
    }

    function displayResult(argComputerMove, argPlayerMove){
        if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        }else if(argPlayerMove == 'kamień' && argComputerMove == 'papier'){
            printMessage('Komputer wygrywa!');
        }else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Komputer wygrywa!');
        }else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        }else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        }else if(argPlayerMove == 'papier' && argComputerMove == 'nożyce'){
            printMessage('Komputer wygrywa!');
        }else if(argPlayerMove == 'papier' && argComputerMove == 'papier'){
            printMessage('Remis!');
        }else if(argPlayerMove == 'kamień' && argComputerMove == 'kamień'){
            printMessage('Remis!');
        }else if(argPlayerMove == 'nożyce' && argComputerMove == 'nożyce'){
            printMessage('Remis!');
        }else if(argPlayerMove == 'nieznany ruch'){
            printMessage('Użytkownik nie podał odpowiedniej liczby, więc nie można określić ruchu. Nie ma możliwości określć kto wygrał rozgrywkę.');
        }else{
            printMessage('Brak odpowiednich danych, aby określić kto wygrał rozgrywkę.');
        }
    }



    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);
    /*
    if(randomNumber == 1){
        computerMove = 'kamień';
    }else if(randomNumber == 2){
        computerMove = 'papier';
    }else if(randomNumber == 3){
        computerMove = 'nożyce';
    }
    */


    printMessage('Mój ruch to: ' + computerMove);


    // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);
    /*
    if(playerInput == '1'){
        playerMove = 'kamień';
    }else if(playerInput == '2'){
        playerMove = 'papier';
    }else if(playerInput == '3'){
        playerMove = 'nożyce';
    }
    */

    printMessage('Twój ruch to: ' + playerMove);
    displayResult(computerMove, playerMove);
    /*
    if(computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }else if(playerMove == 'kamień' && computerMove == 'papier'){
        printMessage('Komputer wygrywa!');
    }else if(computerMove == 'kamień' && playerMove == 'nożyce'){
        printMessage('Komputer wygrywa!');
    }else if(playerMove == 'kamień' && computerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }else if(computerMove == 'papier' && playerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }else if(playerMove == 'papier' && computerMove == 'nożyce'){
        printMessage('Komputer wygrywa!');
    }else if(playerMove == 'papier' && computerMove == 'papier'){
        printMessage('Remis!');
    }else if(playerMove == 'kamień' && computerMove == 'kamień'){
        printMessage('Remis!');
    }else if(playerMove == 'nożyce' && computerMove == 'nożyce'){
        printMessage('Remis!');
    }else if(playerMove == 'nieznany ruch'){
        printMessage('Użytkownik nie podał odpowiedniej liczby, więc nie można określić ruchu. Nie ma możliwości określć kto wygrał rozgrywkę.');
    }else{
        printMessage('Brak odpowiednich danych, aby określić kto wygrał rozgrywkę.');
    }
    */
}

document.getElementById("rock").addEventListener("click", function(){
    playGame(1);
});

document.getElementById("paper").addEventListener("click", function(){
    playGame(2);
});

document.getElementById("scissors").addEventListener("click", function(){
    playGame(3);
})