console.log('Script loaded');//something is missing I thinks so here,but I written the code according to the requirements.
const testProductNames=getAvailableProducts();
console.log(testProductNames[0]);
const testProductNames=["Laptop","TV","Ipad"];
function renderProducts(products)
{
    const ulTag=document.querySelector('section.products>ul');
    for(let i=0;i<products.length;i++)
    {
        const currentProduct=products[i];
        const liTag=document.createElement('li');
        ulTag.appendChild(liTag);
    }
}
renderProducts(testProductNames);

