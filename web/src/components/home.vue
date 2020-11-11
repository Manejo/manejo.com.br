<template>
  <div class="car_div">
    <div class="car">
        <q-carousel class="corousel"
        animated
        v-model="slide"
        navigation
        infinite
        :autoplay="autoplay"
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        >
        <q-carousel-slide :name="1" img-src="https://super.abril.com.br/wp-content/uploads/2017/11/trilhas-original.jpg" />
        <q-carousel-slide :name="2" img-src="https://www.acritica.com/uploads/news/image/753462/show_trilha_5EE73949-98A2-40DE-B258-DFE166061B9E.JPG" />
        <q-carousel-slide :name="3" img-src="https://v.i.uol.com.br/album/amazonia_f_008.jpg" />
        <q-carousel-slide :name="4" img-src="https://blogdescalada.com/wp-content/uploads/2017/09/trilha-chico-mendes7.jpg" />
        </q-carousel>
    </div>
  </div>
</template>
<script>
require('../styles/home.css')
export default {
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  }
}
</script>