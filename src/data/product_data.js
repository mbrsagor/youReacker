const data = [
    {
        id: 1,
        name: 'MacBook Ari 2020',
        config: '8-GB 256-SSD i5',
        colors: 'White',
        category: ['Computing', 'Laptop', 'MacBook'],
        price: [3434, 4545, 343, 0],
    }
];

export const featchData = id => {
    return data.find(_data => _data.id === id)
};

export default data;
