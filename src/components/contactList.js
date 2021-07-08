import { useEffect, useState } from "react";
import { db } from "../config";
import { Pencil, Trash } from "react-bootstrap-icons";

const ContactList = () => {
  const [Contacts, setContacts] = useState([]);

  useEffect(() => {
    db.collection("contact")
      .orderBy("name")
      .onSnapshot((snap) => {
        setContacts(
          snap.docs.map((doc, index) => ({
            ...doc.data(),
            index,
          }))
        );
      });
  }, []);

  return (
    <div className='card shadow-lg'>
      <div className='card-body'>
        <table className='table table-responsive table-hover table-striped'>
          <thead>
            <tr>
              <th scope='col'>SN</th>
              <th scope='col'>Name</th>
              <th scope='col'>Phone</th>
              <th scope='col'>Address</th>
              <th scope='col'>Email</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {Contacts.map((contact, index) => {
              return (
                <tr key={index}>
                  <th scope='row'>{contact.index + 1}</th>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.address}</td>
                  <td>{contact.email}</td>
                  <td>
                    <Pencil className='text-success me-5 cursor' />
                    <Trash className='text-danger cursor' />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
