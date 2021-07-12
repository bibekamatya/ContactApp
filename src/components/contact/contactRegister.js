import { useContext, useState } from "react";
import Navbar from "../navbar/navbar";
import { Person, PersonPlus, House, PhoneFill } from "react-bootstrap-icons";
import { ContextProvider } from "../global/ContextProvider";
import ContactTable from "./../contacTable";

const ContactRegister = () => {
  const { dispatch, Contacts } = useContext(ContextProvider);

  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Address, setAddress] = useState("");
  const [Email, setEmail] = useState("");
  const [Edit, setEdit] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", Name, Phone, Address, Email, Contacts });
    setName("");
    setPhone("");
    setAddress("");
    setEmail("");
  };


  const Clicked = (e) => {
    console.log(e);
    setEdit(e);
  };

  return (
    <>
      <Navbar />
      <div className='container-fluid' style={{ paddingTop: "150px" }}>
        <div className='row px-2'>
          <div className='col-md-3'>
            <div className='card shadow-lg'>
              <div className='card-body'>
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

          <div className='col-md-9'>
            <ContactTable Clicked={Clicked} Edit={Edit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactRegister;
