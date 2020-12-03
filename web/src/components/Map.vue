<template >
  <div class="text-light p-3 bg-info text-center">

    <GmapMap
      :center="{
        lat: parseFloat(this.coordenadas[0]),
        lng: parseFloat(this.coordenadas[1]),
      }"
      :zoom="15"
      class="mapSty"
      ref="mapRef"
    >
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
      <gmap-polygon :paths="paths"> </gmap-polygon>
    </GmapMap>
  </div>
</template>
<style lang="css" scoped>
.mapSty {
  background-color: "red";
  padding: 20px;
  height: 500px;
  width: "100%";
}
</style>
<script>

export default {
  name: "Map",
  data() {
    return {
      map: null,
      myCoordinates: {
        lat: 0,
        lng: 0,
      },
      markers: [],
      paths: [],
      coordenadas: [],
    };
  },
  created() {
    // does the user have a saved center? use it instead of the default
    this.$getLocation({})
      .then((coordinates) => {
        this.myCoordinates = coordinates;
      })
      .catch((error) => alert(error));
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => (this.map = map));
  },
  methods: {
    drawDirection() {
      this.paths = [
        {
          lat: parseFloat(this.coordenadas[0]),
          lng: parseFloat(this.coordenadas[1]),
        },
        {
          lat: parseFloat(this.coordenadas[2]),
          lng: parseFloat(this.coordenadas[3]),
        },
      ];
    },
    clearMap() {},
    async loadTrilha() {
      await this.$axios
        .get("http://localhost:3333/trilhas/" + this.$route.params.id_trilha)
        .then((response) => {
          this.trilha = response.data;
          if (this.trilha == null) {
            this.$alert("Não foi possível encontrar a trilha desejada.");
            this.$router.push("/trilhas");
          }
        })
        .catch((response) => (this.error_message = response));

      this.coordenadas = this.trilha.coordenadas.split(";");
      this.drawDirection();
    },
  },
  async beforeMount() {
    await this.loadTrilha();
  },
};
</script>