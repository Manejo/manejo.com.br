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
                  v-model="name"
                  label="Nome"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="status"
                  label="Status"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="regularidade"
                  label="Regularidade"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="capacidade"
                  label="Capacidade"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="dificuldade"
                  label="Dificuldade"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="comprimento"
                  label="Comprimento"
                />
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="largura"
                  label="Largura"
                />
                <div class="add-coordenada">
                  <q-input
                    class="inputs"
                    standout="bg-primary text-white"
                    v-model="coordenada1"
                    label="Coordenada1"
                    style="margin-right: 10px;"
                  />
                  <q-input
                    class="inputs"
                    standout="bg-primary text-white"
                    v-model="coordenada2"
                    label="Coordenada2"
                    style="margin-left: 10px;"
                  />
                </div>
                <div class="add-coordenada">
                  <q-input
                    class="inputs"
                    standout="bg-primary text-white"
                    v-model="coordenada3"
                    label="Coordenada3"
                    style="margin-right: 10px;"
                  />
                  <q-input
                    class="inputs"
                    standout="bg-primary text-white"
                    v-model="coordenada4"
                    label="Coordenada4"
                    style="margin-left: 10px;"
                  />
                </div>
              </div>
            </div>
            <div class="cont-col2 col-12 col-sm-5 col-lg-5 q-pa-md">
              <Map/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-form>
</template>
<script>
require("../styles/editartrilha.css");
import Map from './Map';
export default {
  name: "visualizartrilha",
  components: {
    Map
  },
  data() {
    return {
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
      this.name = null;
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
  },
};
</script>

