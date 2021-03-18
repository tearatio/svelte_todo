<script>
import store from './items-store.js'


var name = '';
var quantity = '';
var subList = [];
var subItem = {name: '', quantity: '', id: ''};

function submitHandler() {
  if (name.length !== 0 && quantity !== 0) {
    subItem.name = name;
    subItem.quantity = quantity;
    subItem.id = Math.random()*1000;
    name = '';
    quantity = '';
      store.update((its) => {
      return [...its, {name: subItem.name, quantity: subItem.quantity, id: subItem.id}]
    })
  }
  
  
  }

</script>
<div>
  <h1>Список продуктов</h1>
  <hr />
  <h2>Введите новый продукт</h2>
</div>
<div>
  <form on:submit|preventDefault="{submitHandler}">
    <input type="text" placeholder="Напиши название нового продукта" bind:value="{name}">
    <input type="number" placeholder="Укажи количество" bind:value="{quantity}">
    <button>Submit</button>
  </form>
 
</div>     
