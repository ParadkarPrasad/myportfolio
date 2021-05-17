import React, {useState} from 'react';

const Contact = () => {
 const [data, setData] = useState({
     fullname: "",
     phoneno: "",
     email: "",
     msg: "",

 });
 const InputEvent = (event) =>{
    const {name , value} = event.target;

    setData((preVal) =>{
        return{
            ...preVal,
            [name] : value,
        };
    });
 };
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${data.fullname}. My contact no is ${data.phoneno}. My email is ${data.email}. Here is I would like to say ${data.msg}`);

    };
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Enter Full Name</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter full name" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Phone No.</label>
                            <input type="number" class="form-control" id="exampleFormControlInput1" name="phoneno" value={data.phoneno } onChange={InputEvent} placeholder="Mobile No." />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                        </div>
                        <div className="col-12">
                            <button class="btn btn-outline-primary" type="submit">Submit form</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;