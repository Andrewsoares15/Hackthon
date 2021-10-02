<template>
  <div class="sobre">
    <div class="titulo-container">
      <h1>Sobre nós</h1>
    </div>
    <p class="ml-3 mr-3">
      Somos uma comunidade que além de amar cultura pop (especialmente animes e
      jogos!) acredita que o lazer de forma geral é parte fundamental da nossa
      saúde, principalmente nestes tempos de pandemia em que muitos de nós
      sofremos com questões como ansiedade, fobia social, dentre outros. Aqui,
      além de encontrar nossas sugestões de animes e jogos que amamos, você pode
      também se conectar com outras pessoas que dividem essa mesma paixão,
      trocar ideias e discutir sobre alguma coisa nova. Se quiser nos sugerir
      algo que ainda não conste nas nossas listas, mande seu anime e/ou jogo no
      nosso grupo do Telegram ou Preenchendo o formulário abaixo.
    </p>
    <h2 class="text-center">Fale conosco</h2>
    <v-form id="formulario" ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="nameRules"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>

      <v-select
        v-model="select"
        :items="items"
        :rules="[(v) => !!v || 'Item is required']"
        label="Assunto"
        required
      ></v-select>
      <v-col cols="12" md="6">
        <v-textarea
          solo
          name="input-7-4"
          label="Nos envie sua Mensagem"
        ></v-textarea>
      </v-col>
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="Enviar"
        type="reset"
      >
        Enviar
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "sobre",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Games", "Lazer e Saúde", "Animes", "Outros"],
    checkbox: false,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    enviar() {},
  },
};
</script>

<style scoped>
.titulo-container {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
p {
  text-align: justify;
}

#formulario {
  width: 80%;
  margin-left: 20px;
}
</style>
