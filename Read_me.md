# Memory Game - front end developer project nr.2

## About Memory game

This is a game where you match cards. Deck has 16 cards and you have to find eight pairs. Your goal is to do it with less moves and in less time.

## How to play

* Click two cards to flip them and see if they match.
* If they don't, they flip back. If they do, they stay flipped and change color.
* After you find eight pairs, modal is displayed showing how many moves did you make, what was your time and shows how many stars did you get for your effort.
* If you did it in 14 moves you get three stars. If you did it in less then seventeen moves you will get two stars. Above that it's only one star.
* Game starts when you reload browser. Also, after you finish it, on the modal you can you click play again to try your luck again.

## Developer info

Game shuffles cards every time you start - there is no start button/function at the beggining.
Both css and html were added after downloading udacity starting code. First thing I changed were classes of opened card and matched cards.
There are event listeners when you click cards, when you click restart and there is a play again button in modal.
Game is responsive and in all screen widths there will be four cards in the row.

## Fixed bugs
There was a bug when you click the same card it would change to match.
Also there was a bug that was adding open class to matched card if you click it (check "if" condition part of function for flipping cards)
