import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    id: '',
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },
    editContact(state, action) {
      console.log(action.payload);
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.items.splice(index, 1);
    },
    setId(state, action) {
      state.id = action.payload;
    },
  },
});

export const { addContact, deleteContact, editContact, setId } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContacts = state => state.contacts.items;
export const selectId = state => state.contacts.id;
