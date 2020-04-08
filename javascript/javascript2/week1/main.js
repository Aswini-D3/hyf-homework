onsole.log('Script loaded');


function getAvailableProducts()
{
    const productNames=['Flat screen', 'Mobile phone', 'Wallet'];
    renderProducts(productNames);
    
}



function renderProducts(products) 
{

    const sectionTag = document.getElementsByClassName('products');

    const ulTag = document.querySelector('ul');


    for ( let i = 0; i < products.length ; i++) 
    {
        const liTag = document.createElement('li');
        liTag.innerHTML = products[i];
    }
    ulTag.appendChild(liTag);
} 
console.log(getAvailableProducts());
