import { Link } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { container, enrollForm } from "./enroll.module.css";
import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <div style={{ marginBottom: "2rem" }}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  // React treats radios and checkbox inputs differently from other input types: select and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <div style={{ marginBottom: "2rem" }}>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div style={{ marginBottom: "2rem" }}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const Enroll = () => {
  return (
    <main>
      <Layout pageTitle="Enroll">
        <div className={container}>
          <Formik
            initialValues={{
              parentName: "",
              studentName: "",
              email: "",
              studentAge: "",
              phoneNumber: "",
              studioLocation: "",
              acceptedTerms: false,
            }}
            validationSchema={Yup.object({
              parentName: Yup.string().required("Required"),
              studentName: Yup.string().required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              studentAge: Yup.string().required("Required"),
              phoneNumber: Yup.string().required("Required"),
              studioLocation: Yup.string().required("Required"),
              acceptedTerms: Yup.boolean()
                .required("Required")
                .oneOf([true], "You must accept the terms and conditions."),
            })}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className={enrollForm}>
                <MyTextInput
                  label={"Parent Name"}
                  name={"parentName"}
                  type={"text"}
                />

                <MyTextInput
                  label={"Student Name"}
                  name={"studentName"}
                  type={"text"}
                />

                <MyTextInput label={"Email"} name={"email"} type={"text"} />

                <MyTextInput
                  label={"Student Age"}
                  name={"studentAge"}
                  type={"text"}
                />

                <MyTextInput
                  label={"Phone Number"}
                  name={"phoneNumber"}
                  type={"text"}
                />

                <MySelect label="Studio Location" name="studioLocation">
                  <option value="">Select a studio</option>
                  <option value="sf">
                    San Francisco (near Golden Gate Park)
                  </option>
                  <option value="nv">Noe Valley</option>
                  <option value="o">Oakland</option>
                  <option value="sl">Sugar Land (Riverstone)</option>
                  <option value="sa">South Austin (Bee Cave)</option>
                  <option value="ds">Dripping Springs</option>
                  <option value="sa">San Antonio</option>
                  <option value="a">Austin (Mueller)</option>
                </MySelect>

                <MyCheckbox name="acceptedTerms">
                  I accept the terms and conditions
                </MyCheckbox>

                <button type="submit" disabled={isSubmitting}>
                  SUBMIT
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </Layout>
    </main>
  );
};

export default Enroll;

export const Head = () => <Seo title="Enroll" />;
