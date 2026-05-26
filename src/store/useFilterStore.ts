import { create } from 'zustand';

export type FilterCategory = 'trigger' | 'emotion' | 'tech' | 'element';
export type ComponentType = 'element' | 'block' | 'animation';

interface FilterState {
  activeFilters: {
    trigger: string | null;
    emotion: string | null;
    tech: string | null;
    element: string | null;
  };
  styleFilters: string[];
  componentType: ComponentType | null;
  searchQuery: string;
  setFilter: (category: FilterCategory, value: string | null) => void;
  toggleStyle: (style: string) => void;
  setComponentType: (type: ComponentType | null) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  activeFilters: {
    trigger: null,
    emotion: null,
    tech: null,
    element: null,
  },
  styleFilters: [],
  componentType: null,
  searchQuery: '',
  setFilter: (category, value) =>
    set((state) => ({
      activeFilters: {
        ...state.activeFilters,
        [category]: state.activeFilters[category] === value ? null : value,
      },
    })),
  toggleStyle: (style) =>
    set((state) => {
      const exists = state.styleFilters.includes(style);
      return {
        styleFilters: exists
          ? state.styleFilters.filter((s) => s !== style)
          : [...state.styleFilters, style],
      };
    }),
  setComponentType: (type) => set({ componentType: type }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  resetFilters: () =>
    set({
      activeFilters: {
        trigger: null,
        emotion: null,
        tech: null,
        element: null,
      },
      styleFilters: [],
      componentType: null,
      searchQuery: '',
    }),
}));
