import { Dice, UserDice } from './Dice';
import { LootRating } from './shared/enums/enumLootRating';


export const UserDiceList: UserDice[] = [
    {id: 1, diceId: 1, name: 'Rolly', sides: 4, lootRating: LootRating.common},
    {id: 2, diceId: 1, name: 'Rolly', sides: 4, lootRating: LootRating.common},
    {id: 3, diceId: 2, name: 'Polly', sides: 4, lootRating: LootRating.common},
    {id: 4, diceId: 2, name: 'Polly', sides: 4, lootRating: LootRating.common}
];

export const AllDice: Dice[] = [
    {diceId: 1, name: 'Rolly', sides: 4, lootWeight: -1, lootRating: LootRating.common},
    {diceId: 2, name: 'Polly', sides: 4, lootWeight: -1, lootRating: LootRating.common},
    {diceId: 3, name: 'Holly', sides: 6, lootWeight: 40, lootRating: LootRating.uncommon},
    {diceId: 4, name: 'Jolly', sides: 6, lootWeight: 40, lootRating: LootRating.uncommon},
    {diceId: 5, name: 'Golly', sides: 8, lootWeight: 15, lootRating: LootRating.rare},
    {diceId: 6, name: 'Wolly', sides: 8, lootWeight: 15, lootRating: LootRating.rare},
    {diceId: 7, name: 'Nolly', sides: 10, lootWeight: 10, lootRating: LootRating.epic},
];
