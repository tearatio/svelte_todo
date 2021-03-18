import { writable } from 'svelte/store';

var store = writable([{name: 'test', quantity: 45, id: 122},
{name: 'test2', quantity: 1, id: 125}]);

export default store;



