import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

export const storeProduct = [
    {
        productImg : "./images/Tofu.jpg",
        mealPrice: 50,
        mealName: "Stinky Tofu (chòudòufu)",
        ImportantDetails: " Tofu is brined in a mixture of fermented milk, vegetables, meat and aromatics",
        isSelected: false,   
        uuid : uuidv4(),
        removalUuid : uuidv4()
    },
    {
        productImg : "./images/Mein.jpg",
        mealPrice: 70,
        mealName: "Chow Mein",
        ImportantDetails: "stir-fried noodles with vegetables, with meat or tofu",
        isSelected: false,   
        uuid : uuidv4(),
        removalUuid : uuidv4()
    }
]