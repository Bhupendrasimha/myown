import { useState } from "react";
import ButtonOutline from "../../components/buttons/buttonOutline";
import ButtonPrimary from "../../components/buttons/buttonPrimary";
import InputPrimary from "../../components/inputPrimary";
import MainContainer from "../../components/mainContainer";
import SelectRole from "../../components/selectRole";
import {Formik, Field, ErrorMessage} from "formik";
import {MdSecurity, MdRemoveRedEye, MdCardTravel} from "react-icons/md";

// Styles
import "./styles.scss";
import SelectPrimary from "../../components/selectPrimary";

function AddAdmin() {

  const [adminRole, setAdminRole] = useState({})
const [type,setType]=useState({})

  const roleList = [
    {
      id: 1,
      icon: <MdSecurity />,
      title: "Admin",
      description: "Description for the specific role in 1 line",
    },
    {
      id: 2,
      icon: <MdCardTravel />,
      title: "Client",
      description: "Description for the specific role in 1 line",
    },
    {
      id: 3,
      icon: <MdRemoveRedEye />,
      title: "Viewer",
      description: "Description for the specific role in 1 line",
    },
  ];
  console.log(type)
  console.log(adminRole,'set')
  return (
    <div className="create-content-style">
      <MainContainer pageTitle="Add Admin" backButton>

      <Formik
                enableReinitialize
                initialValues={{
                  firstName:"",
                  lastName:"",
                  email: "",
                  phone: "",
                  user_type: 1,
                  role:"",
                }}
                // validationSchema={yup.object().shape({
                //   email: yup.string().email().required("Email is required"),
                //   password: yup.string().required("Password is required"),
                // })}
                onSubmit={values => {
                  console.log(values);
                  //</MainContainer>const response = await props.login(values);
                  //</div>console.log(response);
                 // if (response?.success) {
                   // handleClick();
                  //} else {
                    //console.log("Incorrect username or password");
                  //}
                }}
              >
                {({values, setFieldValue, submitForm}) => (
                  <>
        <div className="card">
          <div className="info-content">
            <h4 className="title4">Basic Information</h4>
            <div className="description">
              Some preliminary information about the content
            </div>
          </div>

          <div className="row mt--25">
            <div className="col-sm-6">
              <Field
              component={InputPrimary}
               placeholder="First Name" 
               label="First Name"
               name="firstName"
               value={values.firstName} 
            />
            </div>
            <div className="col-sm-6">
             < Field
              component={InputPrimary} 
              placeholder="" 
              label="Last Name" 
              name="lastName"
              value={values.lastName}
              />
            </div>
            <div className="col-sm-6">
              
              <Field
              component={InputPrimary}
               placeholder=""
                name="email"
                label="Email Address"
                value={values.email} />
            </div>
            <div className="col-sm-6">
              <Field
              component={InputPrimary}
               placeholder="" 
               label="Phone Number" 
               name="phone"
               value={values.phone}
               />
            </div>
          </div>

          <div className="divider" />
          <div className="row">
            <div className="col-sm-12">
              <h5 className="title5">Admin Role</h5>
              <div className="description">
                How will this user use this dashboard?
              </div>
            </div>
          </div>
          <div className="row mt--25">
            {roleList.map((data, index) => {
              return (
                <div className="col-sm-3" key={index}>
                  <Field
                  component={SelectRole}
                  name="role"
                  value={values.role}
                    title={data.title}
                    description={data.description}
                    icon={data.icon}
                    id={data.id}
                    name="role"
                    adminRole={adminRole}
                    selectAdminRole={setAdminRole}
                  />
                </div>
              );
            })}
          </div>
          <div className="divider" />
          <div className="row">
            <div className="col-sm-12">
              <h5 className="title5">Usage Rights</h5>
              <div className="description">
                What access level does this admin have?
              </div>
            </div>

            <div className="col-sm-6 mt--20">
              <SelectPrimary
              selectType={type}
              setSelect={setType}
                lable="Access Level"
                placeholder="choose"
                options={["test1", "test2", "test3"]}
              />
            </div>
          </div>
        </div>
        <div className="divider" />

        <div className="row">
          <div className="col-sm-12 d-flex justify-content-end">
            <ButtonOutline title="Cancel" btnStyle="mr--10 sm" />
            <ButtonPrimary title="Save" btnStyle="sm" onClick={submitForm} />
          </div>
        </div>
        </>
                )}
                </Formik>
      </MainContainer>
    </div>
  );
}

export default AddAdmin;
