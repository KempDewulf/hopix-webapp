<script>
export default {
  name: "CustomPagination",
  props: {
    linkData: Object,
    maxPages: {
      type: Number,
      default: 5,
    },
  },
  computed: {
    displayedLinks() {
      if (!this.linkData || !this.linkData.links) {
        return [];
      }
      // Exclude the first and last link when calculating the start and end indices
      const linksWithoutFirstAndLast = this.linkData.links.slice(1, this.linkData.links.length - 1);

      // Get the start and end indices for slicing the linksWithoutFirstAndLast array
      const start = Math.max(0, this.linkData.current_page - 3); // Subtract 3 to include the current page and two pages before it
      const end = Math.min(this.linkData.last_page, this.linkData.current_page + 2); // Add 2 to include the current page and two pages after it

      // Get the middle links
      const middleLinks = linksWithoutFirstAndLast.slice(start, end);

      // Always include the first and last link
      return [this.linkData.links[0], ...middleLinks, this.linkData.links[this.linkData.links.length - 1]];
    },
  },
  methods: {
    changePage(url) {
      this.$emit('page-changed', url);
    },
  },
}
</script>

<template>
  <div class="pagination flex justify-center space-x-4 py-2">
    <button
        v-for="link in displayedLinks"
        :key="link.label"
        :disabled="link.url === null"
        @click="changePage(link.url)"
        class="pagination-button px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300"
        v-html="link.label"
    >
    </button>
  </div>
</template>
