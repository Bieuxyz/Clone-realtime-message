import { create } from 'zustand'

interface ActiveListActions {
  add: (id: string) => void
  remove: (id: string) => void
  set: (id: string[]) => void
}

interface ActiveListStore {
  members: string[]
  actions: ActiveListActions
}

const useActiveListStore = create<ActiveListStore>((set) => ({
  members: [],
  actions: {
    add: (id) => set((state) => ({ members: [...state.members, id] })),
    remove: (id) =>
      set((state) => ({
        members: state.members.filter((memberId) => memberId !== id),
      })),
    set: (ids) => set({ members: ids }),
  },
}))

export const useActiveListMember = () =>
  useActiveListStore((state) => state.members)

export const useActiveListActions = () =>
  useActiveListStore((state) => state.actions)
