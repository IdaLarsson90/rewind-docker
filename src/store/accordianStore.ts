import create from "zustand";

interface AccordianStore {
    isAccordianVisible: boolean;
    toggleAccordianVisible: ()=> void
}


export const useAccordianStore = create<AccordianStore>((set, get)=>({
    isAccordianVisible: false,
    toggleAccordianVisible: ()=> set(state =>({
        isAccordianVisible: !state.isAccordianVisible
    }))
})) 

