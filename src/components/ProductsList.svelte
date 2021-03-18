<script>
    import store from './items-store.js'
    var productList = [];
    
    store.subscribe(its => {
       productList = its;
    });

    function deleteHandler(index) {
        productList = productList.splice(index, 1);
        store.subscribe(its => {
       productList = its;
    });
        }
           
</script>


<div>
    <ul> {#each productList as product, index}
        <li> {product.name} {product.quantity} 
            <button on:click="{() => deleteHandler(index)}">Delete item</button> 
        </li>
    {/each}
    
    </ul>
</div>