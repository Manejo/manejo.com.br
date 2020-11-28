<template>
<div class="trilhas">
  <div class="menu">
    <a class="a-btn" href="/cadastrotrilha">
      <button class="btn">
        <span class="material-icons" style="height: 15px;">
          add
        </span>
        Cadastrar Trilha
      </button>
    </a>
    <button class="btn">
      <span class="material-icons" style="height: 15px;">
        visibility
      </span>
      Visualizar Ocorrencias
    </button>
    <button class="btn">
      <span class="material-icons" style="height: 15px;">
        visibility
      </span>
      Visualizar Relatorios
    </button>
    <button class="btn">
      <span class="material-icons" style="height: 15px;">
        picture_as_pdf
      </span>
      Relatorio PDF
    </button>
  </div>
  <div class="fundo_cards">
    <div class="container">
      <div class="row" >
        <div class="col-12 col-sm-6 col-lg-4 q-pa-md" v-for="dados in trilha_dados" :key="dados.trilha_id">
          <router-link :to="{ name: 'visualizartrilha', params: { id_trilha: dados.trilha_id, id_caracteristica: dados.id }}">
          <q-card clickable v-ripple class="shadow-2 q-mb-sm">
            <q-card-section class="top-card">
              <div class="text-h6">{{ dados.nome }}</div>
              <div class="text-subtitle2">{{ dados.status }}</div>
            </q-card-section>
          </q-card>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
  require('../styles/trilhas.css');
export default {
  name: 'trilhas',
  data() {
    return {
      error_message: null,
      trilhas: [],
      caracteristicas: [],
      trilha_dados: []
    };
  },
  methods: {
    async loadTrilhas () {

      await this.$axios.get('http://localhost:3333/trilhas').then(response => {
        this.trilhas = response.data
      }).catch(response => (this.error_message = response))


      await this.$axios.get('http://localhost:3333/caracteristicas').then(response => {
        this.caracteristicas = response.data
      }).catch(response => (this.error_message += response))

      this.trilha_dados = this.caracteristicas.map((caracteristica) => ({
        ...this.trilhas.find((o) => o.id === caracteristica.trilha_id),
        ...caracteristica
      }));
    }
  },
  beforeMount () {
    this.loadTrilhas()
  }
}
</script>

