<template>
  <q-form @submit="onSubmit" @reset="onReset" class="form-trilha">
    <div class="trilhas">
      <div class="menu">
        <!-- <router-link to="/trilhas/editartrilha"> -->
        <router-link :to="{ name: 'editartrilha', params: { id_trilha: this.trilha_id, id_caracteristica: this.caracteristica_id }}">
          <button label="Submit" type="submit" color="primary" class="btn">
            <span class="material-icons" style="height: 15px"> edit </span>
            Editar
          </button>
        </router-link>
        <button class="btn" label="Reset" type="reset" color="primary">
          <span class="material-icons" style="height: 15px"> delete </span>
          Excluir
        </button>
        <router-link to="/trilhas">
          <button class="btn">
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
              <div class="formulario">
                <q-input
                  class="inputs"
                  disable
                  standout="bg-primary text-white"
                  :label="trilha_dados.nome"
                />
                <q-input
                  class="inputs"
                  disable
                  standout="bg-primary text-white"
                  :label="trilha_dados.status"
                />
                <q-input
                  class="inputs"
                  disable
                  standout="bg-primary text-white"
                  :label="trilha_dados.regularidade"
                />
                <q-input
                  class="inputs"
                  disable
                  standout="bg-primary text-white"
                  :label="trilha_dados.capacidade"
                />
                <q-input
                  class="inputs"
                  disable
                  standout="bg-primary text-white"
                  :label="trilha_dados.dificuldade"
                />
                <q-input
                  class="inputs"
                  disable
                  standout="bg-primary text-white"
                  :label="trilha_dados.comprimento"
                />
                <q-input
                  class="inputs"
                  disable
                  standout="bg-primary text-white"
                  :label="trilha_dados.largura"
                />
                <div class="add-coordenada">
                  <q-input
                    class="inputs"
                    disable
                    standout="bg-primary text-white"
                    :label="trilha_dados.coordenadas.split(';')[0]"
                    style="margin-right: 10px;"
                  />
                  <q-input
                    class="inputs"
                    disable
                    standout="bg-primary text-white"
                    :label="trilha_dados.coordenadas.split(';')[1]"
                    style="margin-left: 10px;"
                  />
                </div>
                <div class="add-coordenada">
                  <q-input
                    class="inputs"
                    disable
                    standout="bg-primary text-white"
                    :label="trilha_dados.coordenadas.split(';')[2]"
                    style="margin-right: 10px;"
                  />
                  <q-input
                    class="inputs"
                    disable
                    standout="bg-primary text-white"
                    :label="trilha_dados.coordenadas.split(';')[3]"
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
require("../styles/visualizartrilha.css");
import Map from "./Map";
export default {
  name: "visualizartrilha",
  components: {
    Map,
  },
  data() {
    return {
      trilha: null,
      caracteristica: null,
      error_message: null,
      trilha_dados: {},
      trilha_id: null,
      caracteristica_id: null,
      //
      //
      name: null,
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
    };
  },

  methods: {
    onSubmit() {
      if (this.accept !== true) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "You need to accept the license and terms first",
        });
      } else {
        this.$q.notify({
          color: "green-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Submitted",
        });
      }
    },

    onReset() {
      this.$confirm("Você tem certeza que deseja excluir essa trilha?").then(
        async () => {
          await this.$axios
            .delete("http://localhost:3333/trilhas/" + this.$route.params.id_trilha)
            .then(() => {
              this.$alert("Trilha excluida com sucesso.");

              this.$router.push('/trilhas');
            })
            .catch((response) => this.$alert(response));
        }
      );
    },
    getUrl(files) {
      return `http://localhost:8000/upload?count=${files.length}`;
    },
    //
    //
    async loadTrilha() {
      await this.$axios
        .get("http://localhost:3333/trilhas/" + this.$route.params.id_trilha)
        .then((response) => {
          this.trilha = response.data;

          if(this.trilha == null) {
            this.$alert("Não foi possível encontrar a trilha desejada.")
            this.$router.push("/trilhas")
          }

        })
        .catch((response) => (this.error_message = response));

      await this.$axios
        .get("http://localhost:3333/caracteristicas/" + + this.$route.params.id_caracteristica)
        .then((response) => {
          this.caracteristica = response.data;
        })
        .catch((response) => (this.error_message += response));

      this.trilha_dados = this.caracteristica;

      this.trilha_dados.trilha_id = this.trilha.id;
      this.trilha_dados.nome = this.trilha.nome;
      this.trilha_dados.coordenadas = this.trilha.coordenadas;

      this.trilha_id = this.trilha_dados.trilha_id;
      this.caracteristica_id = this.trilha_dados.id;
    },
  },
  async beforeMount() {
    await this.loadTrilha();
  },
};
</script>
