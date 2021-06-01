<template>
  <div class="cart-component">
    <div class="order-info">
      <CartItemDetail v-if="getCartList().length > 0" :product="product" />
    </div>
    <div>
      <p>Total Money:{{ count_total_cart }} VNĐ</p>
      <div class="cart-item">
        <table class="table table-cart-list">
          <thead class="thead-dark">
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Image</th>
              <th scope="col">ProductName</th>
              <th scope="col">Price</th>
              <th scope="col">Count</th>
              <th scope="col">Total Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody v-if="getCartList().length > 0">
            <CartItem
              v-for="(product, index) in getCartList()"
              :key="index"
              :product="product"
              :index="index"
              :transmit_Product="transmit_Product"
            />

            <tr>
              <td></td>
              <td></td>
              <td>Total Money</td>
              <td colspan="2">{{ count_total_cart }} VNĐ</td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
          <tbody v-else style="margin:auto">
            <div class="alert alert-warning container" role="alert">
              <p style="margin:auto">You did not have any cart</p>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItemDetail from "./CartItemDetail";
import CartItem from "./CartItem";
export default {
  components: {
    CartItemDetail,
    CartItem,
  },
  data() {
    return {
      product: this.getCartList()[0],
    };
  },
  computed: {
    ...mapGetters(["count_total_cart"]),
  },
  methods: {
    ...mapGetters(["getCartList"]),
    transmit_Product(product) {
      this.product = product;
    },
  },
};
</script>

<style>
.cart-component {
  display: flex;
}

.order-info {
  width: 30%;
  margin: 1%;
}

.cart-item {
  margin: 1%;
  background: lightsteelblue;
  height: 500px;
  overflow: scroll;
}
</style>
