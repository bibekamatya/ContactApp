import { db } from "./../../config";

export const ContactReducer = (state, action) => {
  var docRef = db.collection("contact");
  var NewContacts;

  switch (action.type) {
    case "ADD_CONTACT":
      NewContacts=action.Contacts
      const check = NewContacts.find((contact) => contact.phone === action.Phone);
      if (check) {
        alert("number already added");
        return state;
      } else {
        db.collection("contact").add({
          name: action.Name,
          phone: action.Phone,
          address: action.Address,
          email: action.Email,
        });
      }
      return state;

    case "DELETE_CONTACT":
      docRef.doc(action.id).delete();
      return;

    case "UPDATE_CONTACT":
      docRef.doc(action.id).update({
        name: action.Name,
        phone: action.Phone,
        address: action.Address,
        email: action.Email,
      });
      return;

    default:
      return state;
  }
};
