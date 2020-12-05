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
                  :value="trilha_dados.nome"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="status"
                  :value="trilha_dados.status"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="regularidade"
                  :value="trilha_dados.regularidade"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="capacidade"
                  :value="trilha_dados.capacidade"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="dificuldade"
                  :value="trilha_dados.dificuldade"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="comprimento"
                  :value="trilha_dados.comprimento"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="largura"
                  :value="trilha_dados.largura"
                />
                <div class="add-coordenada">
                  <q-input
                    class="inputs"
                    standout="bg-primary text-white"
                    v-model="coordenada1"
                    :value="this.coordenada1"
                    style="margin-right: 10px"
                  />
                  <q-input
                    class="inputs"
                    standout="bg-primary text-white"
                    v-model="coordenada2"
                    :value="this.coordenada2"
                    style="margin-left: 10px"
                  />
                </div>
                <div class="add-coordenada">
                  <q-input
                    class="inputs"
                    standout="bg-primary text-white"
                    v-model="coordenada3"
                    :value="this.coordenada3"
                    style="margin-right: 10px"
                  />
                  <q-input
                    class="inputs"
                    standout="bg-primary text-white"
                    v-model="coordenada4"
                    :value="this.coordenada4"
                    style="margin-left: 10px"
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
      coordenada: null,
    };
  },

  methods: {
    async onSubmit() {
      this.coordenada =
        this.coordenada1 +
        ";" +
        this.coordenada2 +
        ";" +
        this.coordenada3 +
        ";" +
        this.coordenada4;

      if (
        !this.coordenada1.length ||
        !this.coordenada2.length ||
        !this.coordenada3.length ||
        !this.coordenada4.length
      ) {
        this.coordenada = "";
      }

      if (
        this.nome.length &&
        this.coordenada.length &&
        this.capacidade.toString().length &&
        this.dificuldade.length &&
        this.regularidade.length &&
        this.comprimento.toString().length &&
        this.largura.toString().length &&
        this.status.length
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
          .put(
            "http://localhost:3333/trilhas/" + this.$route.params.id_trilha,
            this.trilha
          )
          .then((response) => {
            this.trilha_id = response.data.id;
          })
          .catch((response) => this.$alert(response));

        await this.$axios
          .put(
            "http://localhost:3333/caracteristicas/" +
              this.$route.params.id_caracteristica,
            this.caracteristicas
          )
          .then(() => {
            this.$alert("Trilha alterada com sucesso.");

            this.$router.push("/trilhas");
          })
          .catch((response) => this.$alert(response));
      } else {
        this.$alert("Certifique-se de não deixar nenhum campo em branco.");
      }
    },

    onReset() {
      this.nome = "";
      this.status = "";
      this.regularidade = "";
      this.capacidade = "";
      this.dificuldade = "";
      this.comprimento = "";
      this.largura = "";
      this.coordenada1 = "";
      this.coordenada2 = "";
      this.coordenada3 = "";
      this.coordenada4 = "";
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
        .get(
          "http://localhost:3333/caracteristicas/" +
            this.$route.params.id_caracteristica
        )
        .then((response) => {
          this.caracteristica = response.data;
        })
        .catch((response) => (this.error_message += response));

      this.trilha_dados = this.caracteristica;

      this.trilha_dados.trilha_id = this.trilha.id;
      this.trilha_dados.nome = this.trilha.nome;
      this.trilha_dados.coordenadas = this.trilha.coordenadas;

      this.nome = this.trilha_dados.nome;
      this.status = this.trilha_dados.status;
      this.regularidade = this.trilha_dados.regularidade;
      this.capacidade = this.trilha_dados.capacidade;
      this.dificuldade = this.trilha_dados.dificuldade;
      this.comprimento = this.trilha_dados.comprimento;
      this.largura = this.trilha_dados.largura;
      [
        this.coordenada1,
        this.coordenada2,
        this.coordenada3,
        this.coordenada4,
      ] = this.trilha_dados.coordenadas.split(";");
    },
  },
  async beforeMount() {
    await this.loadTrilha();
  },
};
</script>
