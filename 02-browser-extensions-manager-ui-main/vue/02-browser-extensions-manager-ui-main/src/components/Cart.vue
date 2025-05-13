<template>
  <div>
    <div class="cart">
        <div class="left">
            <h2>Desserts</h2>
            <div class="cards">
                <div class="card" v-for="(item) in feature" :key="item.id">
                    <div class="pic"  :style="{ backgroundImage: `url(${strIconPath(item.image.desktop)})` }">
                        <button @click="selectItems(item)">Add to Cart</button>
                    </div>
                    
                    <div class="content">
                        <p>{{item.category}}</p>
                        <p>{{item.name}}</p>
                        <p>${{item.price}}</p>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="right">
            <h3>Your Cart {{ totalCount }}</h3>
            <template v-if="selected.length <= 0">
                <div :style="{ height:`100px`, backgroundRepeat: `no-repeat` , backgroundImage: `url(${strIconPath('./assets/images/illustration-empty-cart.svg')})` }"></div>
                <p>Your added items will appear here.</p>
            </template>
            <template v-else>
                <div class="selected" v-for="(item) in selected" :key="item.id">
                    <p>{{item.name}}</p>
                    <p>{{item.count}}x / ${{ item.price }} / ${{ item.sumPrice }}</p>
                </div>
                <p>Order Total {{ totalCount }}</p>
                <button @click="isCartOpen=!isCartOpen">Confirm Order</button>
            </template>
        </div>
    </div>
    <div class="control" :class="{isCartOpen:isCartOpen}"  @click=" isCartOpen = !isCartOpen ">
        <div class="panel" @click.stop>
            <p>Order Confirmed</p>
            <div class="selected" v-for="(item) in selected" :key="item.id">
                <p>{{item.name}}</p>
                <p>{{item.count}}x / ${{ item.price }} / ${{ item.sumPrice }}</p>
            </div>
            <p>Order Total {{ totalPrice }}</p>
            <button>Start Now Order</button>
        </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const isCartOpen = ref(false);

const selected = ref([]);

const feature = ref([
    {
       "id": 1,
       "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "id": 2,
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "id": 3,
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "id": 4,
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "id": 5,
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "id": 6,
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "id": 7,
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "id": 8,
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "id": 9,
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
]);

function strIconPath(path) {
  const fullPath = new URL("."+`${path}`, import.meta.url).href;
  return fullPath;
}

function selectItems(item) {
    let aa = selected.value.find(x => x.name == item.name);
    console.log(aa);
    if (aa == undefined) {
        selected.value.push(
            {
                name: item.name,
                price: item.price,
                sumPrice: item.price,
                count: 1
            }
        );
    } else {
        aa.count += 1;
        aa.sumPrice = aa.price * aa.count;
    }
}

const totalPrice = computed(() => {
    return selected.value.reduce((sum, item) => sum + item.sumPrice, 0);
});
const totalCount = computed(() => {
    return selected.value.reduce((sum, item) => sum + item.count, 0);
});

watch(isCartOpen, (newVal) => {
  document.body.style.overflow = newVal ? 'hidden' : '';
});

</script>

<style lang="sass" scoped>
*
    // border: 1px solid black
    margin-top: 20px
p 
    padding: 0
    color: black
    width: 100%
h2,h3
    text-align: left
    color: var(--h24-color)
img
    width: 100%
    height: auto
    display: block
    vertical-align: top
    border: 1px solid red
.cart
    display: flex
    flex-direction: row
    width: 100%
    padding: 0px
    align-items: flex-start
    .left
        width: 100%
    .right 
        background-color: #fff
        @media (min-width: 580px) 
            width: 300px
            margin-left: 20px
    @media (max-width: 700px) 
        display: inline-block
        .right
            width: 100%
            margin-left: 0px
.cards
    display: grid
    width: 100%
    grid-template-columns: repeat(auto-fill, minmax(150px,1fr))
    gap: 20px
    .card
        display: flex
        flex-direction: column
        align-content: flex-start
        padding: 0
        margin: 0
        // border: 1px solid red
        // position: relative
        .pic
            margin: 0
            width: 100%           /* 或你需要的寬度 */
            height: 100px         /* 或你需要的高度 */
            background-size: cover /* 填滿不留白 */
            background-position: center
            background-repeat: no-repeat
            position: relative
            button
                position: absolute
                left: 50%
                top: 60%
                transform: translateX(-50%)
        .content
            margin-top: 30px  
            p
                margin: 0
.control
    margin: 0
    width: 100%
    height: 100%
    position: fixed
    color: #eee
    background-color: rgba(0, 0, 0, 0.6)
    display: flex
    justify-content: center
    align-items: center
    left: 0
    top: 0 
    padding: 5vw
    box-sizing: border-box
    opacity: 0
    pointer-events: none
    &.isCartOpen
        opacity: 1
        pointer-events: initial
    .panel
        background-color: #fff
        width: 100%
        height: 100%
        border-radius: 10px
</style>