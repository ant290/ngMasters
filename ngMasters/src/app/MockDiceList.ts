import { Dice, UserDice } from './Dice';

export const UserDiceList: UserDice[] = [
    {id: 1, diceId: 1, name: 'Rolly', sides: 4},
    {id: 2, diceId: 1, name: 'Rolly', sides: 4},
    {id: 3, diceId: 2, name: 'Polly', sides: 4},
    {id: 4, diceId: 2, name: 'Polly', sides: 4}
];

export const AllDice: Dice[] = [
    {diceId: 1, name: 'Rolly', sides: 4},
    {diceId: 2, name: 'Polly', sides: 4},
    {diceId: 3, name: 'Holly', sides: 6},
    {diceId: 4, name: 'Jolly', sides: 6},
    {diceId: 5, name: 'Golly', sides: 8},
    {diceId: 6, name: 'Wolly', sides: 8},
    {diceId: 7, name: 'Nolly', sides: 10},
];
