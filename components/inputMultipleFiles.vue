<template>
    <v-container>
        <v-file-input v-model="selectedFiles" label="Select files" multiple show-size
            @change="handleFileChange"></v-file-input>

        <v-list>
            <v-list-item-group v-if="selectedFiles.length">
                <v-list-item v-for="(file, index) in selectedFiles" :key="index">
                    <v-list-item-content>
                        <v-list-item-title>{{ file.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ formatSize(file.size) }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-container>
</template>
  
<script>
export default {
    data() {
        return {
            selectedFiles: [],
        };
    },
    methods: {
        handleFileChange() {
            // Handle file change event
            // console.log('Selected Files:', this.selectedFiles);
        },
        formatSize(size) {
            // Function to format file size
            const units = ['B', 'KB', 'MB', 'GB', 'TB'];
            let i = 0;
            while (size >= 1024 && i < units.length - 1) {
                size /= 1024;
                i++;
            }
            return size.toFixed(2) + ' ' + units[i];
        },
    },
};
</script>
  
<style scoped>
/* Add any custom styling here */
</style>