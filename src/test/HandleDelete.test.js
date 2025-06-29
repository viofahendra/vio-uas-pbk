import { describe, it, expect, vi, beforeEach } from 'vitest'
import { ref } from 'vue'

describe('handleDeleteMenu', () => {
  let store
  let isLoading
  let handleDeleteMenu

  beforeEach(() => {
    isLoading = ref(false)

    store = {
      deleteMenu: vi.fn().mockResolvedValue()
    }

    handleDeleteMenu = async (id) => {
      const confirmed = window.confirm("Yakin ingin menghapus menu ini?")
      if (!confirmed) return

      try {
        isLoading.value = true
        await store.deleteMenu(id)
        console.log("Menu berhasil dihapus.")
      } catch (err) {
        console.error("Gagal menghapus:", err)
      } finally {
        isLoading.value = false
      }
    }
  })

  it('should not call deleteMenu if user cancels', async () => {
    vi.spyOn(window, 'confirm').mockReturnValueOnce(false)

    await handleDeleteMenu(1)

    expect(store.deleteMenu).not.toHaveBeenCalled()
    expect(isLoading.value).toBe(false)
  })

  it('should call deleteMenu if user confirms', async () => {
    vi.spyOn(window, 'confirm').mockReturnValueOnce(true)

    await handleDeleteMenu(42)

    expect(store.deleteMenu).toHaveBeenCalledWith(42)
  })

  it('should set isLoading during delete', async () => {
    vi.spyOn(window, 'confirm').mockReturnValueOnce(true)

    const promise = handleDeleteMenu(5)
    expect(isLoading.value).toBe(true)

    await promise
    expect(isLoading.value).toBe(false)
  })
})
