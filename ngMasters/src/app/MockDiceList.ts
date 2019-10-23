import { Dice, UserDice } from './Dice';

export const UserDiceList: UserDice[] = [
    {id: 1, diceId: 1, name: 'Rolly', sides: 6},
    {id: 2, diceId: 2, name: 'Polly', sides: 6}
];

export const AllDice: Dice[] = [
    {diceId: 1, name: 'Rolly', sides: 6},
    {diceId: 2, name: 'Polly', sides: 6},
    {diceId: 3, name: 'Holly', sides: 8},
    {diceId: 4, name: 'Jolly', sides: 8},
    {diceId: 5, name: 'Golly', sides: 10},
];
