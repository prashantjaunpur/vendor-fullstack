<template>
  <div class="vendor-list">
    <!-- Model opening when want to delete the particular user -->
    <div v-if="showModal" class="modal-overlay">
  <div class="modal">
    <p>Are you sure you want to delete the vendor {{vendorToDelete}}?</p>
    <div class="modal-buttons">
      <button @click="confirmDelete">Yes</button>
      <button @click="cancelDelete">Cancel</button>
    </div>
  </div>
</div>

    <h2>Vendor List</h2>
    <div v-if="vendorStore.loading">Loading vendors...</div>
    <!-- <div v-else-if="vendorStore.error" class="error">  {{ typeof vendorStore.error === 'string' ? vendorStore.error : 'An error occurred' }}</div> -->
    <div v-else-if="vendorStore.vendors.length === 0" class="no-vendors">No vendors found. Add your first vendor!</div>
    <table v-else class="vendors-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Contact Person</th>
          <th>Email</th>
          <th>Partner Type</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="vendor in vendorStore.vendors" :key="vendor.id">
          <td>{{ vendor.id }}</td>
          <td>{{ vendor.name }}</td>
          <td>{{ vendor.contact_person }}</td>
          <td>{{ vendor.email }}</td>
          <td>{{ vendor.partner_type }}</td>
          <td><button @click="openDeletePopup(vendor.id)"><i class="fas fa-trash"></i></button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useVendorStore } from '../stores/vendorStore';
import { toast } from 'vue3-toastify'


// Using the vendor store directly, no need for local props or state
const vendorStore = useVendorStore();

onMounted(() => {
  vendorStore.fetchVendors();
});
const showModal = ref(false);
const vendorToDelete = ref<string | null>(null);

// storing the id and opeing the modal
const openDeletePopup = (id: string) => {
  vendorToDelete.value = id;
  showModal.value = true;
  console.log(vendorToDelete,'aa')
};

// Taking the confirmation while deleting the User
const confirmDelete = async () => {
  if (!vendorToDelete.value) return;

  try {
    await vendorStore.deleteVendor(vendorToDelete.value);
    showModal.value = false;
    toast.success(`Vendor ${vendorToDelete.value} deleted successfully!`)
    vendorToDelete.value = null;

  } catch (error) {
    console.error("Failed to delete vendor:", error);
  }
};

// If Don't want to delete and want to close the modal
const cancelDelete = () => {
  showModal.value = false;
  vendorToDelete.value = null;
};
</script>

<style scoped>
.vendor-list {
  margin: 20px 0;
}

.vendors-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 15px;
}

.vendors-table th,
.vendors-table td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.vendors-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.vendors-table tr:hover {
  background-color: #f5f5f5;
}

.error {
  color: red;
  padding: 10px;
}

.no-vendors {
  padding: 20px;
  text-align: center;
  color: #666;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  text-align: center;
}

.modal-buttons {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

</style>