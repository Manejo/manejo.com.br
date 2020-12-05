<template>
  <q-form @submit="onSubmit" @reset="onReset" class="form-trilha">
    <div class="trilhas">
      <div class="menu">
        <button label="Submit" type="submit" color="primary" class="btn">
          <span class="material-icons" style="height: 15px"> save </span>
          Cadastrar
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
          <div class="cadastro row">
            <div class="col-12 col-sm-6 col-lg-5 q-pa-md">
              <h4 class="title-cadastro">Cadastro de Trilha</h4>
              <div class="formulario q-pa-xl">
                <q-input
                  class="inputs"
                  standout="bg-primary text-white"
                  v-model="nome"
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
                    v-model="coordenada"
                    label="Coordenada"
                  />
                  <q-btn class="button-add" round color="primary" icon="add" />
                </div>
                <div class="upload-image q-pa-md">
                  <q-uploader
                    label="Custom header"
                    multiple
                    :url="getUrl"
                    accept=".jpg, image/*"
                  >
                    <template v-slot:header="scope">
                      <div class="row no-wrap items-center q-pa-sm q-gutter-xs">
                        <q-btn
                          v-if="scope.queuedFiles.length > 0"
                          icon="clear_all"
                          @click="scope.removeQueuedFiles"
                          round
                          dense
                          flat
                        >
                          <q-tooltip>Clear All</q-tooltip>
                        </q-btn>
                        <q-btn
                          v-if="scope.uploadedFiles.length > 0"
                          icon="done_all"
                          @click="scope.removeUploadedFiles"
                          round
                          dense
                          flat
                        >
                          <q-tooltip>Remove Uploaded Files</q-tooltip>
                        </q-btn>
                        <q-spinner
                          v-if="scope.isUploading"
                          class="q-uploader__spinner"
                        />
                        <div class="col">
                          <div class="q-uploader__title">Upload Image</div>
                          <div class="q-uploader__subtitle">
                            {{ scope.uploadSizeLabel }} /
                            {{ scope.uploadProgressLabel }}
                          </div>
                        </div>
                        <q-btn
                          v-if="scope.canAddFiles"
                          type="a"
                          icon="add_box"
                          round
                          dense
                          flat
                        >
                          <q-uploader-add-trigger />
                          <q-tooltip>Pick Files</q-tooltip>
                        </q-btn>
                        <q-btn
                          v-if="scope.canUpload"
                          icon="cloud_upload"
                          @click="scope.upload"
                          round
                          dense
                          flat
                        >
                          <q-tooltip>Upload Files</q-tooltip>
                        </q-btn>

                        <q-btn
                          v-if="scope.isUploading"
                          icon="clear"
                          @click="scope.abort"
                          round
                          dense
                          flat
                        >
                          <q-tooltip>Abort Upload</q-tooltip>
                        </q-btn>
                      </div>
                    </template>
                  </q-uploader>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-form>
</template>
<script>
require("../styles/cadastrotrilha.css");
export default {
  name: "trilhas",
  data() {
    return {
      nome: null,
      status: null,
      regularidade: null,
      capacidade: null,
      dificuldade: null,
      comprimento: null,
      largura: null,
      coordenada: null,
      trilha: {},
      caracteristicas: {},
      trilha_id: null,
    };
  },

  methods: {
    async onSubmit() {
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
          .post("http://localhost:3333/trilhas", this.trilha)
          .then((response) => {
            this.trilha_id = response.data.id;
          })
          .catch((response) => this.$alert(response));

        await this.$axios
          .post(
            "http://localhost:3333/caracteristicas/" + this.trilha_id,
            this.caracteristicas
          )
          .then(() => {
            this.$alert("Cadastro efetuado com sucesso.");

            this.$router.push("/trilhas");
          })
          .catch((response) => this.$alert(response));
      } else {
        this.$alert("Preencha todos os dados.");
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
      this.coordenada = null;
    },
    getUrl(files) {
      return `http://localhost:8000/upload?count=${files.length}`;
    },
  },
};
</script>
