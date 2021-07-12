import { useEffect, useState, useContext } from "react";
import { ContextProvider } from "./global/ContextProvider";
import Avatar from "react-avatar";
import {
  Pencil,
  Trash,
  Person,
  PersonPlus,
  House,
  PhoneFill,
} from "react-bootstrap-icons";

const ContactTable = (props) => {
  const { Clicked, Edit } = props;
  const { dispatch, Contacts } = useContext(ContextProvider);

  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");

  const UpdateContact = (e) => {
    e.preventDefault();
    dispatch({
      type: "UPDATE_CONTACT",
      Name,
      Phone,
      Address,
      Email,
      id: Edit.id,
    });
    setName("");
    setPhone("");
    setAddress("");
    setEmail("");
  };

  useEffect(() => {
    setName(Edit.name);
    setPhone(Edit.phone);
    setAddress(Edit.address);
    setEmail(Edit.email);
  }, [Edit]);

  return (
    <>
      <div className='card shadow-lg'>
        <div className='card-body'>
          <table className='table table-responsive table-hover table-striped'>
            <thead>
              <tr>
                <th scope='col'>SN</th>
                <th scope='col'>Icon</th>
                <th scope='col'>Name</th>
                <th scope='col'>Phone</th>
                <th scope='col'>Address</th>
                <th scope='col'>Email</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {Contacts.map((contact) => {
                return (
                  <tr key={contact.id}>
                    <th scope='row'>{contact.index + 1}</th>
                    <td>
                      <Avatar
                        name={contact.name}
                        size='25'
                        round={true}
                      />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.phone}</td>
                    <td>{contact.address}</td>
                    <td>{contact.email}</td>
                    <td>
                      <Pencil
                        className='text-success me-5 cursor'
                        data-bs-toggle='modal'
                        data-bs-target='#staticBackdrop'
                        onClick={(e) => {
                          Clicked(contact);
                        }}
                      />
                      <Trash
                        className='text-danger cursor'
                        onClick={() => {
                          dispatch({
                            type: "DELETE_CONTACT",
                            id: contact.id,
                            Contacts,
                          });
                        }}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div
        className='modal fade'
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h6 className='modal-title' id='staticBackdropLabel'>
                Update Contact Details...
              </h6>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={UpdateContact}>
                <div className='col-12 pb-3 w-100'>
                  <div className='input-group'>
                    <div className='input-group-text'>
                      <Person />
                    </div>
                    <input
                      type='text'
                      aria-label='name'
                      id='name'
                      className='form-control'
                      required
                      placeholder='Name'
                      value={Name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div className='col-12 pb-3 w-100'>
                  <div className='input-group'>
                    <div className='input-group-text'>
                      <PhoneFill />
                    </div>
                    <input
                      type='string'
                      aria-label='aaa'
                      id='numberadd'
                      className='form-control'
                      required
                      placeholder='Phone'
                      min='9'
                      max='10'
                      value={Phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className='col-12 pb-3 w-100'>
                  <div className='input-group'>
                    <div className='input-group-text'>@</div>
                    <input
                      type='text'
                      aria-label='First name'
                      id='email'
                      className='form-control'
                      placeholder='example@gmail.com'
                      value={Email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className='col-12 pb-3 w-100'>
                  <div className='input-group'>
                    <div className='input-group-text'>
                      <House />
                    </div>
                    <input
                      type='text'
                      aria-label='City'
                      id='city'
                      className='form-control'
                      required
                      placeholder='Address'
                      value={Address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <button
                    type='submit'
                    className='btn btn-primary w-100 mt-4'
                    data-bs-dismiss='modal'
                    style={{ fontSize: "12px" }}
                  >
                    Update Contact
                    <PersonPlus
                      className='ms-2'
                      style={{ marginBottom: "2px" }}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactTable;
