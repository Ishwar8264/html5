const productsData = [
    {
        image: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'HeartSave PAD',
        features: [
            'semi-automatic operation',
            'Battery: 3 - up to 3 years Standby',
            'Electrodes: 36 months shelf life',
            'pediatric mode & pediatric button',
            'metronome',
            'voice prompts in one language'
        ]
    },
    {
        image: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'HeartSave AED',
        features: [
            'semi-automatic operation',
            'Battery: 6 - up to 6 years Standby',
            'Electrodes: 36 months shelf life',
            'pediatric mode & pediatric button',
            'metronome',
            'voice prompts in four languages'
        ]
    },
    {
        image: 'https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=600',
        title: 'HeartSave AS',
        features: [
            'fully-automatic operation',
            'Battery: 6 - up to 6 years Standby',
            'Electrodes: 36 months shelf life',
            'pediatric mode & pediatric button',
            'metronome',
            'voice prompts in four languages'
        ]
    }
];

const productsContainer = document.getElementById('products');

productsData.forEach((product, index) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <div class="product-info">
            <h2>${product.title}</h2>
            <ul>
                ${product.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <a href="#" class="button">Further information</a>
        </div>
    `;

    productsContainer.appendChild(productElement);
});
