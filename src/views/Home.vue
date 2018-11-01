<template>
  <div class="home">
    <div class="container">
      <div class="row grid-center">
        <div class="col-xs-12">
          <div class="grid-example-block ">
            <!-- Swiper Slider -->
            <swiper :options="swiperOption">
              <!-- slides -->
              <swiper-slide>
                <a href="" title="link">
                  <img src="../assets/image/slide_1.jpg" alt="image">
                </a>
              </swiper-slide>
              <swiper-slide>
                <a href="" title="link">
                  <img src="../assets/image/slide_2.jpg" alt="image">
                </a>
              </swiper-slide>
              <swiper-slide>
                <a href="" title="link">
                  <img src="../assets/image/slide_3.jpg" alt="image">
                </a>
              </swiper-slide>
              <swiper-slide>
                <a href="" title="link">
                  <img src="../assets/image/slide_1.jpg" alt="image">
                </a>
              </swiper-slide>
              <swiper-slide>
                <a href="" title="link">
                  <img src="../assets/image/slide_2.jpg" alt="image">
                </a>
              </swiper-slide>
              <swiper-slide>
                <a href="" title="link">
                  <img src="../assets/image/slide_3.jpg" alt="image">
                </a>
                </swiper-slide>
              <swiper-slide>
                <a href="" title="link">
                  <img src="../assets/image/slide_1.jpg" alt="image">
                </a>
              </swiper-slide>
              <!-- Optional controls -->
              <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
      <!-- <div class="row grid-center">
        <div class="col-xs-12">
          <div class="grid-example-block">
            <div class="wrapper-button-home-block text-center">
              <div class="button button--round button-default" @click.prevent ="galaryButtonPlus()">+</div>
              <div class="button button--round button-default" @click.prevent ="galaryButtonMinus()">-</div>
            </div>
          </div>
        </div>
      </div> -->
      <div class="row grid-center">
        <div class="col-xs-12">
          <div class="grid-example-block ">
            <div class="ui-card ui-card--shadow-always">
              <p class="ui-title-1 center">Home</p>
              <p>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore ab deleniti quasi voluptatibus. Beatae quidem numquam perspiciatis cupiditate, totam expedita nostrum autem, eligendi, atque aperiam quod alias odit reprehenderit!</span>
              <span>Reprehenderit asperiores recusandae commodi eius, facere nisi laudantium, earum ipsum quos corporis natus alias, eveniet animi numquam odio non reiciendis doloremque laborum velit quas quasi? Quod neque ullam ut rerum?</span>
              <span>Nulla iusto tenetur laboriosam cupiditate eligendi dolore laborum odit eveniet voluptas, quas fugiat quam eius pariatur? Molestias distinctio veritatis deleniti illo facilis natus rem, aut, nisi delectus alias vitae amet.</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore ab deleniti quasi voluptatibus. Beatae quidem numquam perspiciatis cupiditate, totam expedita nostrum autem, eligendi, atque aperiam quod alias odit reprehenderit!</span>
              <span>Reprehenderit asperiores recusandae commodi eius, facere nisi laudantium, earum ipsum quos corporis natus alias, eveniet animi numquam odio non reiciendis doloremque laborum velit quas quasi? Quod neque ullam ut rerum?</span>
              <span>Nulla iusto tenetur laboriosam cupiditate eligendi dolore laborum odit eveniet voluptas, quas fugiat quam eius pariatur? Molestias distinctio veritatis deleniti illo facilis natus rem, aut, nisi delectus alias vitae amet.</span>
            </p>
            <p>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore ab deleniti quasi voluptatibus. Beatae quidem numquam perspiciatis cupiditate, totam expedita nostrum autem, eligendi, atque aperiam quod alias odit reprehenderit!</span>
              <span>Reprehenderit asperiores recusandae commodi eius, facere nisi laudantium, earum ipsum quos corporis natus alias, eveniet animi numquam odio non reiciendis doloremque laborum velit quas quasi? Quod neque ullam ut rerum?</span>
              <span>Nulla iusto tenetur laboriosam cupiditate eligendi dolore laborum odit eveniet voluptas, quas fugiat quam eius pariatur? Molestias distinctio veritatis deleniti illo facilis natus rem, aut, nisi delectus alias vitae amet.</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore ab deleniti quasi voluptatibus. Beatae quidem numquam perspiciatis cupiditate, totam expedita nostrum autem, eligendi, atque aperiam quod alias odit reprehenderit!</span>
              <span>Reprehenderit asperiores recusandae commodi eius, facere nisi laudantium, earum ipsum quos corporis natus alias, eveniet animi numquam odio non reiciendis doloremque laborum velit quas quasi? Quod neque ullam ut rerum?</span>
            </p>
            <p>
              <span>Nulla iusto tenetur laboriosam cupiditate eligendi dolore laborum odit eveniet voluptas, quas fugiat quam eius pariatur? Molestias distinctio veritatis deleniti illo facilis natus rem, aut, nisi delectus alias vitae amet.</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore ab deleniti quasi voluptatibus. Beatae quidem numquam perspiciatis cupiditate, totam expedita nostrum autem, eligendi, atque aperiam quod alias odit reprehenderit!</span>
              <span>Reprehenderit asperiores recusandae commodi eius, facere nisi laudantium, earum ipsum quos corporis natus alias, eveniet animi numquam odio non reiciendis doloremque laborum velit quas quasi? Quod neque ullam ut rerum?</span>
              <span>Nulla iusto tenetur laboriosam cupiditate eligendi dolore laborum odit eveniet voluptas, quas fugiat quam eius pariatur? Molestias distinctio veritatis deleniti illo facilis natus rem, aut, nisi delectus alias vitae amet.</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla inventore ab deleniti quasi voluptatibus. Beatae quidem numquam perspiciatis cupiditate, totam expedita nostrum autem, eligendi, atque aperiam quod alias odit reprehenderit!</span>
              <span>Reprehenderit asperiores recusandae commodi eius, facere nisi laudantium, earum ipsum quos corporis natus alias, eveniet animi numquam odio non reiciendis doloremque laborum velit quas quasi? Quod neque ullam ut rerum?</span>
              <span>Nulla iusto tenetur laboriosam cupiditate eligendi dolore laborum odit eveniet voluptas, quas fugiat quam eius pariatur? Molestias distinctio veritatis deleniti illo facilis natus rem, aut, nisi delectus alias vitae amet.</span>
            </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'home',
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        breakpoints: {
          // when window width is <= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is <= 480px
          480: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is <= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        }
      }
      }
    },
    methods: {
      galaryButtonPlus() {
        this.swiperOption.slidesPerView ++
        console.log(this.swiperOption.slidesPerView)
        
      },
      galaryButtonMinus() {
        this.swiperOption.slidesPerView --
        console.log(this.swiperOption.slidesPerView)
      }
    }
  }
</script>
<style lang="sass" scoped>
  .ui-card
    margin-bottom: 50px
    margin-top: 50px
  .swiper-container
    margin-top: 20px
  .swiper-container-horizontal 
    .swiper-pagination-bullets
      position: relative
      bottom: 0
  .text-center
    text-align: center
  .wrapper-button-home-block
    padding: 20px
  @media only screen and (max-width: 1024px)
    ////
</style>

