import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { isMobile } from "@/utils/help";

export const useApusStore = defineStore("apus", () => {
  const mobile = ref(isMobile());
  const width = ref(document.body.clientWidth);
  const maxWidth = computed(() => (width.value >= 1160 ? "1100px" : width.value - 60 + "px"));
  function setMobile(flag) {
    mobile.value = flag;
  }
  function setWidth(w) {
    width.value = w;
  }
  return { mobile, width, maxWidth, setMobile, setWidth };
});
