<template>
  <div class="p-4">
    <input type="file" @change="uploadImage" />
    <div v-if="imageUrl">
      <p>Uploaded Image:</p>
      <img :src="imageUrl" alt="Uploaded Image" class="w-64 mt-2" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from './supabase'

const imageUrl = ref(null)

const uploadImage = async (event) => {
  const file = event.target.files[0]
  if (!file) return

  const filePath = `public/${Date.now()}_${file.name}`

  const { data, error } = await supabase.storage
    .from('pi-images') // tu stavljamo svoj bucket name
    .upload(filePath, file)

  if (error) {
    console.error('Upload error:', error.message)
  } else {
    const { data: publicUrlData } = supabase.storage
      .from('pi-images') // tu stavljamo svoj bucket name
      .getPublicUrl(filePath)

    imageUrl.value = publicUrlData.publicUrl
  }
}
</script>
