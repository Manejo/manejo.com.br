<template>
  <q-form @submit="onSubmit" @reset="onReset" class="form-trilha">
    <div class="trilhas">
      <div class="menu">
        <button label="Submit" type="submit" color="primary" class="btn">
          <span class="material-icons" style="height: 15px"> save </span>
          Finalizar
        </button>
        <button class="btn" label="Reset" type="reset" color="primary">
          <span class="material-icons" style="height: 15px"> delete </span>
          Limpar
        </button>
        <router-link to="/trilhas">
          <button class="btn" ref="/trilhas">
            <span class="material-icons" style="height: 15px">
              keyboard_return
            </span>
            Voltar
          </button>
        </router-link>
      </div>
      <div class="fundo_cards">
        <div class="container">
          <div class="cont row">
            <div class="cont-col1 col-12 col-sm-6 col-lg-5 q-pa-md">
              <h4 class="title-cadastro">Edição de Trilha</h4>
              <div class="formulario">
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="nome"
                  :label="trilha_dados.nome"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="status"
                  :label="trilha_dados.status"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="regularidade"
                  :label="trilha_dados.regularidade"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="capacidade"
                  :label="trilha_dados.capacidade"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="dificuldade"
                  :label="trilha_dados.dificuldade"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="comprimento"
                  :label="trilha_dados.comprimento"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="largura"
                  :label="trilha_dados.largura"
                />
                <div class="add-coordenada">
                  <q-input
                    class="inputs"
                    standout="bg-primary text-white"
                    v-model="coordenada1"
                    :label="trilha_dados.coordenadas.split(';')[0]"
                    style="margin-right: 10px;"
                  />
                  <q-input
                    class="inputs"
                    standout="bg-primary text-white"
                    v-model="coordenada2"
                    :label="trilha_dados.coordenadas.split(';')[1]"
                    style="margin-left: 10px;"
                  />
                </div>
                <div class="add-coordenada">
                  <q-input
                    class="inputs"
                    standout="bg-primary text-white"
                    v-model="coordenada3"
                    :label="trilha_dados.coordenadas.split(';')[1]"
                    style="margin-right: 10px;"
                  />
                  <q-input
                    class="inputs"
                    standout="bg-primary text-white"
                    v-model="coordenada4"
                    :label="trilha_dados.coordenadas.split(';')[1]"
                    style="margin-left: 10px;"
                  />
                </div>
              </div>
            </div>
            <div class="cont-col2 col-12 col-sm-5 col-lg-5 q-pa-md">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-form>
</template>
<script>
require("../styles/editartrilha.css");
import Map from "./Map";
export default {
  name: "visualizartrilha",
  components: {
    Map,
  },
  data() {
    return {
      trilha: null,
      error_message: null,
      trilha_dados: {},
      caracteristicas: {},
      //
      //
      nome: null,
      status: null,
      regularidade: null,
      capacidade: null,
      dificuldade: null,
      comprimento: null,
      largura: null,
      coordenada1: null,
      coordenada2: null,
      coordenada3: null,
      coordenada4: null,
      coordenada: null
    };
  },

  methods: {
    async onSubmit() {

      this.coordenada = this.coordenada1 + ";" + this.coordenada2 + ";" + this.coordenada3 + ";" + this.coordenada4

      if (
        this.nome != null &&
        this.coordenada != null &&
        this.capacidade != null &&
        this.dificuldade != null &&
        this.regularidade != null &&
        this.comprimento != null &&
        this.largura != null &&
        this.status != null
      ) {
        this.trilha = {
          nome: this.nome,
          coordenadas: this.coordenada,
        };

        this.caracteristicas = {
          capacidade: this.capacidade,
          dificuldade: this.dificuldade,
          regularidade: this.regularidade,
          comprimento: this.comprimento,
          largura: this.largura,
          status: this.status,
        };

        await this.$axios
          .put("http://localhost:3333/trilhas/6", this.trilha)
          .then((response) => {
            this.trilha_id = response.data.id;
          })
          .catch((response) => this.$alert(response));

        await this.$axios
          .put(
            "http://localhost:3333/caracteristicas/" + this.trilha_dados.id,
            this.caracteristicas
          )
          .then(() => {
            this.$alert("Trilha alterada com sucesso.");

            this.$router.push("/trilhas");
          })
          .catch((response) => this.$alert(response));
      } else {
        this.$alert("Preencha todos os dados.");
      }
    },

    onReset() {
      this.nome = null;
      this.status = null;
      this.regularidade = null;
      this.capacidade = null;
      this.dificuldade = null;
      this.comprimento = null;
      this.largura = null;
      this.coordenada1 = null;
      this.coordenada2 = null;
      this.coordenada3 = null;
      this.coordenada4 = null;
    },
    getUrl(files) {
      return `http://localhost:8000/upload?count=${files.length}`;
    },
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

      await this.$axios
        .get("http://localhost:3333/caracteristicas/" + this.$route.params.id_caracteristica)
        .then((response) => {
          this.caracteristica = response.data;
        })
        .catch((response) => (this.error_message += response));

      this.trilha_dados = this.caracteristica;

      this.trilha_dados.trilha_id = this.trilha.id;
      this.trilha_dados.nome = this.trilha.nome;
      this.trilha_dados.coordenadas = this.trilha.coordenadas;
    },
  },
  async beforeMount() {
    await this.loadTrilha();
  },
};
</script>
