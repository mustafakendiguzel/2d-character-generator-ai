import { defineStore } from 'pinia'

export const useCreditStore = defineStore('credit', {
  state: () => ({
    remainingCredits: 100 // Başlangıç değeri olarak 100 kredi
  }),
  actions: {
    updateCredits(amount: number) {
      this.remainingCredits = amount
    }
  }
})
