import { create } from 'zustand';

export interface VariantSelection {
  [category: string]: string[]; // e.g., 'nav': ['mega-menu-slide', 'dock-menu']
}

export interface WizardState {
  platform: 'web' | 'mobile' | 'landing' | null;
  theme: string | null;
  layout: string | null;

  // New: granular component selection allowing multiple per category
  selectedVariants: VariantSelection;

  // Actions
  setPlatform: (platform: 'web' | 'mobile' | 'landing') => void;
  setTheme: (theme: string) => void;
  setLayout: (layout: string) => void;

  // Select a specific variant for a category (e.g. Nav -> Glasscrumb)
  // Logic: Toggle if exists, otherwise add. 
  selectVariant: (category: string, variantId: string) => void;

  // Clear a specific category
  clearCategory: (category: string) => void;

  reset: () => void;
}

export const useWizardStore = create<WizardState>((set) => ({
  platform: null,
  theme: null,
  layout: null,
  selectedVariants: {},

  setPlatform: (platform) => set({ platform }),
  setTheme: (theme) => set({ theme }),
  setLayout: (layout) => set({ layout }),

  selectVariant: (category, variantId) => set((state) => {
    const current = state.selectedVariants[category] || [];
    const exists = current.includes(variantId);
    
    // Toggle logic
    let newSelection;
    if (exists) {
      newSelection = current.filter(id => id !== variantId);
    } else {
      newSelection = [...current, variantId];
    }

    return {
      selectedVariants: {
        ...state.selectedVariants,
        [category]: newSelection
      }
    };
  }),

  clearCategory: (category) => set((state) => ({
    selectedVariants: {
      ...state.selectedVariants,
      [category]: []
    }
  })),

  reset: () => set({ platform: null, theme: null, layout: null, selectedVariants: {} }),
}));
