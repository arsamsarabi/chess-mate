const set = (key: string, item: string): void => localStorage.setItem(key, item)
const get = (key: string): string | null => localStorage.getItem(key)
const remove = (key: string): void => localStorage.removeItem(key)
const clear = (): void => localStorage.clear()

export default {
  set,
  get,
  remove,
  clear,
}
