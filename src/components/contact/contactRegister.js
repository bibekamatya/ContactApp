import { useContext, useState } from "react";
import { Person, PersonPlus, House, PhoneFill } from "react-bootstrap-icons";
import { ContextProvider } from "../global/ContextProvider";

const ContactRegister = () => {
  const { dispatch, Contacts, User } = useContext(ContextProvider);

  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      Name,
      Phone,
      Address,
      Email,
      Contacts,
      User,
    });
    setName("");
    setPhone("");
    setAddress("");
    setEmail("");
  };

  return (
    <>
      <div
        className='modal fade'
        id='staticBack'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div className='modal modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='staticBackdropLabel'>
                Add Contact...
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form onSubmit={Submit}>
                <div className='col-12 pb-3'>
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

                <div className='col-12 pb-3'>
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

                <div className='col-12 pb-3'>
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
                <div className='col-12 pb-3'>
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
                    Add Contact
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

export default ContactRegister;
