<template>
  <div class="container mt-10">
   <div class="row">
     <div v-for="product in products" :key="product.id" class="col">
       
       <div class="card shadow-sm">
            <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

            <div class="card-body">
              <p class="card-text">{{ product.title }}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <button 
                  @click="addToCart(product)"
                  type="button" class="btn btn-sm btn-outline-secondary">Adicionar</button>
                  <button 
                  v-if="!!showQty(product.id)"
                  @click="removeFromCart(product)"
                  type="button" class="btn btn-sm btn-outline-secondary">Remover</button>
                </div>
                <small v-if="!!showQty(product.id)" class="text-muted">{{ showQty(product.id) }}</small>
              </div>
            </div>
          </div>
     </div>
     
     <pre>
       {{ $store.state.cart }}
     </pre>
   </div>
    <br><br><br><br>
    {{ fullName }}<br>
    
    <label for="">Primeiro Nome</label> <br>
    <input type="text" v-model='firstName' class="form-control">

    <label for="">Sobrenome</label> <br>
    <input type="text" v-model='lastName' class="form-control">

    <button @click.prevent.stop="saveName" class="btn btn-primary">Save </button>
  </div>
</template>
<script>
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      products: [
        {id: 1, title: 'Produto 1'},
        {id: 2, title: 'Barbie Butherfly'},
        {id: 3, title: 'Produto 3'},
      ]
    }
  },
  computed: {
    ...mapGetters(['fullName']),
    ...mapState({
      user: state => state.user,
      cart: state => state.cart
    }),
    firstName: {
      get () {
        return this.user.first_name
      },
      set (value) {
        this.SAVE_FIRTS_NAME(value)
      },
    },
    lastName: {
      get () {
        return this.user.last_name
      },
      set (value) {
        this.SAVE_LAST_NAME(value)
      },
    }
  },
  methods: {
    ...mapMutations(['ADD_PRODUCT', 'REMOVE_PRODUCT','SAVE_FIRTS_NAME','SAVE_LAST_NAME']),
    //cart
    addToCart(product) {
      this.ADD_PRODUCT(product)
    },
    removeFromCart(product){
      this.REMOVE_PRODUCT(product)
    },
    showQty(id) {
      return this.cart.find(o => o.id === id)?.qty || 0 
    },
    //user
    saveName() {
      this.SAVE_FIRTS_NAME(this.myName);
    }
  }
  }
</script>
