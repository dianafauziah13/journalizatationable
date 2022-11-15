<template>
  <div class="containers mt-30">
      <div class="mt-20 w-1/3">
        <p class="mt-3 text-lg font-bold" style="color: #1E272E;">Masuk akun</p>
        <div class="mt-3">
          <p class="text-xs font-semibold" style="color: #1E272E;">Email atau whatsapp</p>
          <input
            type="text"
            v-model="editedItemLogin.email"
            id="text_placeholder"
            placeholder="Masukkan email atau whatsapp anda"
            class="mt-1 w-full text-xs px-3 py-2 max-w-xs rounded shadow shadow-transparent border-gray-300 px-2 py-1 hover:none focus:outline-none"/>
        </div>
        <div class="mt-2">
          <p class="text-xs font-semibold" style="color: #1E272E;">Kata sandi</p>
          <input
            type="password"
            v-model="editedItemLogin.password"
            id="text_placeholder"
            placeholder="Masukkan kata sandi anda"
            class="mt-1 w-full text-xs px-3 py-2 max-w-xs rounded shadow shadow-transparent border-hidden border-gray-300 px-2 py-1 hover:none focus:outline-none"
            />
        </div>
        <p class="p1 mt-4">Klik <a href="#!"><u>di sini</u></a> jika lupa kata sandi.
        <br>Belum punya akun? <NuxtLink to="/signUp" class="link"><u>daftar sekarang!</u></NuxtLink>
        </p>
        <p class="text-xs text-red-600">
          {{ errorMessage }}
        </p>
        <div class="mt-8 flex justify-end">
          <button
            class="buttons max-w-xs rounded-md border border px-10 py-2 font-normal text-xs"
            @click.stop="save"
          >
            Masuk
          </button>
          <button
            class="buttons max-w-xs rounded-md border border px-10 py-2 font-normal text-xs opacity-75"
            disabled
          >
            Masuk
          </button>
        </div>
      </div>
      <div class="absolute right-48">
      </div>
    </div>
</template>

<script>

export default {
  name: 'SignIn',
  data () {
    return {
      errorMessage: '',
      editedItemLogin: {
        email: '',
        password: ''

      }
    }
  },

  methods: {
    
  }
}
</script>

<style>
  #text_placeholder::placeholder {
    font-size: 12px;
    font-style: italic;
  }
  .buttons {
    background-color: #5388FF;
    color: white;
    font-family: 'Montserrat';
  }
  .p1 {
    font-size: 62.5%;
    color: #1E272E;
  }
  u {
    color: #D82129;
    font-size: 10px;
    font-family: 'Montserrat';
  }
  .containers{
    background-color: #b6bfd4;
    border : px;
  }
</style>

