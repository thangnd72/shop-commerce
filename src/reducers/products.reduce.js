const productInitialState = [
    {
        id: 1,
        name: "Fashion 1",
        image: 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_01_31/IMG_8682.jpg',
        description: 'Jacket for Person',
        price: 500,
        inventory: 10
    },
    {
        id: 2,
        name: "Fashion 1",
        image: 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_01_31/IMG_8682.jpg',
        description: 'Jacket for Person',
        price: 500,
        inventory: 10
    },
    {
        id: 3,
        name: "Fashion 2",
        image: 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_01_31/IMG_8682.jpg',
        description: 'Jacket for Person',
        price: 200,
        inventory: 10
    },
    {
        id: 4,
        name: "Fashion 3",
        image: 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_01_31/IMG_8682.jpg',
        description: 'Jacket for Person',
        price: 1000,
        inventory: 10
    },
    {
        id: 5,
        name: "Fashion 3",
        image: 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_01_31/IMG_8682.jpg',
        description: 'Jacket for Person',
        price: 1000,
        inventory: 10
    },
    {
        id: 6,
        name: "Fashion 3",
        image: 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_01_31/IMG_8682.jpg',
        description: 'Jacket for Person',
        price: 1000,
        inventory: 10
    },
    {
        id: 7,
        name: "Fashion 3",
        image: 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_01_31/IMG_8682.jpg',
        description: 'Jacket for Person',
        price: 1000,
        inventory: 10
    },
    {
        id: 8,
        name: "Fashion 3",
        image: 'https://znews-photo.zadn.vn/w660/Uploaded/wyhktpu/2018_01_31/IMG_8682.jpg',
        description: 'Jacket for Person',
        price: 1000,
        inventory: 10
    }
];

const productReducer = (state = productInitialState, action) => {
    switch (action.type) {
        default: return [...state]
    }
}
export default productReducer