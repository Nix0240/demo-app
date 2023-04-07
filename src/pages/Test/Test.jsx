import { Form, Formik } from "formik";
import React from "react";
// import { TestStyle } from "./testStyle";

const Test = () => {
  return (
    <>
      <Formik
      // initialValues={{
      //   email: "",
      //   password: "",
      //   gender: "",
      // }}
      // validations
      // validationSchema={SignupSchema}
      // onSubmit={(values) => {
      //   console.log(values);
      // }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            //Your Other inputs........
            <div className="custom-control">
              <input
                id="male"
                type="radio"
                value="male"
                name="gender"
                onChange={formik.handleChange}
                defaultChecked={formik.values.gender === "male"}
              />
              <label className="custom-control-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="custom-control">
              <input
                id="female"
                type="radio"
                value="female"
                name="gender"
                onChange={formik.handleChange}
                defaultChecked={formik.values.gender === "female"}
              />
              <label className="custom-control-label" htmlFor="female">
                Female
              </label>
            </div>
            //Your Other inputs......
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
};
// const fileInputRef = useRef();

// const handleChange = () => {
//   // do something with event data
// };

// return (
//   <TestStyle>
//     <button onClick={() => fileInputRef.current.click()}>UPLOAD</button>
//     <input
//       onChange={handleChange}
//       multiple={false}
//       ref={fileInputRef}
//       type="file"
//       hidden
//     />
//   </TestStyle>
// );

// const [file, setFile] = useState([]);

// function uploadSingleFile(e) {
//   setFile([...file, URL.createObjectURL(e.target.files[0])]);
//   console.log("file", file);
// }

// function upload(e) {
//   e.preventDefault();
//   console.log(file);
// }

// function deleteFile(e) {
//   const s = file.filter((item, index) => index !== e);
//   setFile(s);
//   console.log(s);
// }
// return (
//   <TestStyle>
//     <form>
//       <div className="form-group preview">
//         {file.length > 0 &&
//           file.map((item, index) => {
//             return (
//               <div key={item}>
//                 <img src={item} alt="" />
//                 <button type="button" onClick={() => deleteFile(index)}>
//                   delete
//                 </button>
//               </div>
//             );
//           })}
//       </div>

//       <div className="form-group">
//         <input
//           type="file"
//           disabled={file.length === 5}
//           className="form-control"
//           onChange={uploadSingleFile}
//         />
//       </div>
//       <button
//         type="button"
//         className="btn btn-primary btn-block"
//         onClick={upload}
//       >
//         Upload
//       </button>
//     </form>
//   </TestStyle>
// );
// };

export default Test;
