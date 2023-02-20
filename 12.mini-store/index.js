const items = [
  {
    id : 0,
    name : 'camisa amarela',
    img : 'https://www.politecnicabr.com.br/wp-content/uploads/2021/06/MOCKUP-EDIFICACOES-FRENTE-PNG-2.jpg',
    amount : 0
  },

  {
    id : 1,
    name : 'camisa azul',
    img : 'https://www.politecnicabr.com.br/wp-content/uploads/2021/06/MOCKUP-EDIFICACOES-FRENTE-PNG-1-1.jpg',
    amount : 0
  },
  
  {
    id : 2,
    name : 'short jeans',
    img : 'https://media.istockphoto.com/id/508457006/pt/foto/cal%C3%A7%C3%B5es-de-ganga.jpg?s=612x612&w=0&k=20&c=iMl1Px4Zgly9kldj4mvjz9XvkUzriDD66jDGijSVSrU=',
    amount : 0
  },

  {
    id : 3,
    name : 'short verde',
    img : 'https://lojaform.com.br/wp-content/uploads/2022/10/3-5.jpg',
    amount : 0
  },

  {
    id : 4,
    name : 'sapato all star',
    img : 'https://t4.ftcdn.net/jpg/03/91/86/81/360_F_391868107_vno2PstFshyQ4HHMiatFtXLAMECiKr46.jpg',
    amount : 0
  }
]

initializeStore = () => 
{
  var containerProducts = document.getElementById('products-wrapper');

  //função para percorrer todos os items do array
  items.map((val) => {
    containerProducts.innerHTML += `
      <div class="product-single">
        <div class="product-img" style="background-image:url('` + val.img + `')"></div>
        <p>` + val.name + `</p>
        <button key="` + val.id + `" href="#">Adicionar ao carrinho</button>
      </div>
    `;
  })
}
initializeStore();

updateCart = () =>
{
  var containerCart = document.getElementById('cart-wrapper');
  containerCart.innerHTML = "";

  //função para percorrer todos os items do array
  items.map((val) => {
    if (val.amount > 0) 
    {
      containerCart.innerHTML += `
        <div class="cart-single">
          <p>` + val.name + `</p><span> quantidade: ` + val.amount + `</span>
        </div>
      `;
    }
  })
}

var links = document.getElementsByTagName('button');

for(var i = 0; i < links.length; i++)
{
  links[i].addEventListener('click', function()
  {
    let key = this.getAttribute('key');
    items[key].amount++;
    updateCart();
    return false;
  })
} 