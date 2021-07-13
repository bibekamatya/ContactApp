import { useEffect, useState, useContext } from "react";
import { ContextProvider } from "../global/ContextProvider";
import Avatar from "react-avatar";
import Navbar from "../navbar/navbar";
import {
  Pencil,
  Trash,
  Person,
  PersonPlus,
  House,
  PhoneFill,
} from "react-bootstrap-icons";
import ContactRegister from "./contactRegister";

const ContactTable = () => {
  const { dispatch, Contacts, Clicked, Edit, User } =
    useContext(ContextProvider);

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
      Contacts,
      User,
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

  function myFunction() {
    var input, filter, table, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    var rows = table.getElementsByTagName("tr");
    for (i = 0; i < rows.length; i++) {
      var cells = rows[i].getElementsByTagName("td");
      var j;
      var rowContainsFilter = false;
      for (j = 0; j < cells.length; j++) {
        if (cells[j]) {
          if (cells[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
            rowContainsFilter = true;
            continue;
          }
        }
      }

      if (!rowContainsFilter) {
        rows[i].style.display = "none";
      } else {
        rows[i].style.display = "";
      }
    }
  }

  return (
    <>
      <Navbar />

      <div className='container' style={{ marginTop: "110px" }}>
        <div className='input-group'>
          <input
            className='form-control'
            id='myInput'
            type='text'
            placeholder='Search by name, address, phone number or email...'
            onKeyUp={myFunction}
          />
          <div
            className='input-group-text cursor'
            data-bs-toggle='modal'
            data-bs-target='#staticBack'
          >
            <PersonPlus className='me-2' style={{ marginBottom: "2px" }} />
            <span className='pb-1 add-new-contact'> Add new contact</span>
          </div>
        </div>

        <div className='text-start'>
          <ContactRegister />
        </div>
        <div className='card shadow-lg' style={{ marginTop: "50px" }}>
          <div className='card-body'>
            <div className='table-responsive contact-table'>
              <table className='table table-hover table-striped'>
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
                <tbody id='myTable'>
                  {Contacts.map((contact) => {
                    return (
                      <tr key={contact.id}>
                        <th scope='row'>{contact.index + 1}</th>
                        <td>
                          <Avatar name={contact.name} size='25' round={true} />
                        </td>
                        <td style={{ whiteSpace: "nowrap" }}>{contact.name}</td>
                        <td>{contact.phone}</td>
                        <td style={{ whiteSpace: "nowrap" }}>
                          {contact.address}
                        </td>
                        <td>{contact.email}</td>
                        <td>
                          <span>
                            <Pencil
                              className='text-success me-2 me-md-5 me-lg-5 me-xxl-5 me-xl-5 cursor'
                              data-bs-toggle='modal'
                              data-bs-target='#staticBackdrop'
                              onClick={(e) => {
                                Clicked(contact);
                              }}
                            />
                          </span>
                          <span>
                            <Trash
                              className='text-danger cursor delete'
                              onClick={() => {
                                dispatch({
                                  type: "DELETE_CONTACT",
                                  id: contact.id,
                                  Contacts,
                                  User,
                                });
                              }}
                            />
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
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
                        id='fullname'
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
                        id='number'
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
                        id='emailid'
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
                        id='city_'
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
      </div>
    </>
  );
};

export default ContactTable;
