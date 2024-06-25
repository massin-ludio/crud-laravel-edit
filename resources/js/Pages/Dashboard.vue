<template>

    <Head title="Dashboard" />
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 text-gray-900">
                        <div>
                            <table class="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Email</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="profile in profiles" :key="profile.id">
                                        <td>{{ profile.name }}</td>
                                        <td>{{ profile.email }}</td>
                                        <td>
                                            <button @click="openEditModal(profile)"
                                                class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Editar</button>
                                            <button @click="deleteProfile(profile.id)"
                                                class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Eliminar</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div v-if="showEditModal" @close="closeModalView">
                                <h2>Editar Perfil</h2>
                                <form @submit.prevent="updateProfile">
                                    <label for="name">Nombre:</label>
                                    <input type="text" id="name" v-model="form.name" required>

                                    <label for="email">Email:</label>
                                    <input type="email" id="email" v-model="form.email" required>

                                    <button type="submit">Guardar Cambios</button>
                                    <button type="button" @click="closeModalView">Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
      <Register/>
    </AuthenticatedLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePage, useForm } from '@inertiajs/vue3';
import Register from './Auth/Register.vue';



const { props } = usePage();
const profiles = ref(props.profiles);
const showEditModal = ref(false);
const form = useForm({
    name: '',
    email: ''
});
let currentProfileId = null;

const fetchProfiles = () => {
    form.get(route('profiles.index'), {       
        onSuccess: (page) => {
            profiles.value = page.props.profiles;
        },
    });
};

onMounted(fetchProfiles);

const openEditModal = (profile) => {
    form.name = profile.name;
    form.email = profile.email;
    currentProfileId = profile.id;
    showEditModal.value = true;
};

const updateProfile = () => {
    form.put(route('profiles.update', currentProfileId), {
        onSuccess: () => {
            showEditModal.value = false;
            const updatedProfile = profiles.value.find(profile => profile.id === currentProfileId);
            if (updatedProfile) {
                updatedProfile.name = form.name;
                updatedProfile.email = form.email;
            }
           
        },
        onError: (errors) => {
            console.error(errors);
        }
    });
};

const closeModalView = () => {
    showEditModal.value = false;
};
const deleteProfile = (profileId) => {
  form.delete(route('profiles.destroy', profileId), {
    onSuccess: () => {
      profiles.value = profiles.value.filter(profile => profile.id !== profileId);
    },
    onError: (errors) => {
      console.error(errors);
    }
  });
};

</script>