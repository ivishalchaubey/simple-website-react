import { useFormik } from "formik";
import { contactSchema } from "../../schema";

const initialValues = {
  name: "",
  email: "",
  contact: "",
  msg: "",
};

const Contact = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: contactSchema,
      onSubmit: (values, action) => {
        alert(`
        Login Successfull...
        Name:${values.name}
        Email:${values.email}
        Phone No:${values.contact}
        `);
        console.log("🚀 ~ file: Contact.js:17 ~ Contact ~ values:", values);
        action.resetForm();
      },
    });

  return (
    <div className="contect p-4 bg-dark mt-5 rounded" id="contact">
      <h1 className="text-center">Contact me</h1>
      <div className="row container-fluid p-4">
        <div className="col-md-4">
          <h3>Email</h3>
          <p>vishalchaubey0011@gmail.com</p>
          <br />
          <h3>Phone</h3>
          <p>+91 9519922769</p>
          <br />
          <h3>Address</h3>
          <p>Gorakhpur (UP)</p>
        </div>
        <div className="col-md-8 p-4">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control mb-3 p-2"
                  placeholder="your name"
                  name="name"
                  aria-describedby="nameHelp"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div id="nameHelp" className="form-text text-danger">
                  {errors.name && touched.name ? <>{errors.name}</> : null}
                </div>
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control mb-3 p-2"
                  placeholder="your email"
                  name="email"
                  aria-describedby="emailHelp"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div id="emailHelp" className="form-text text-danger">
                  {errors.email && touched.email ? <>{errors.email}</> : null}
                </div>
              </div>
              <div className="col-md-12">
                <input
                  type="text"
                  className="form-control mb-3 p-2"
                  placeholder="contact no."
                  name="contact"
                  aria-describedby="contactHelp"
                  value={values.contact}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div id="contactHelp" className="form-text text-danger">
                  {errors.contact && touched.contact ? (
                    <>{errors.contact}</>
                  ) : null}
                </div>
              </div>
              <div className="col-md-12">
                <textarea
                  name="msg"
                  cols={30}
                  rows={5}
                  className="form-control mb-3"
                  placeholder="enter your messages"
                  aria-describedby="msgHelp"
                  value={values.msg}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div id="msgHelp" className="form-text text-danger">
                  {errors.msg && touched.msg ? <>{errors.msg}</> : null}
                </div>
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
