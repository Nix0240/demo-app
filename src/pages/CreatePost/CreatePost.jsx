import React, { useRef, useState } from "react";
import { StyledButton } from "../../components/Button/Buttonstyle";
import DeleteIcon from "../../components/Icon/DeleteIcon";

import { CreatePostContainer } from "./CreatePostStyle";
import { useFormik } from "formik";
// import * as Yup from "yup";
import { addPost } from "../../features/CreatePost";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [file, setFile] = useState([]);
  const fileInputRef = useRef();
  const dispatch = useDispatch();
  const { userAuth } = useSelector((state) => state);
  console.log("UI", userAuth);
  const navigate = useNavigate();

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    console.log("Target", e.target.files);

    // for (let i = 0; i < e.target.file.length; i++) {
    //   const imgfile = e.target.files[i];
    //   const base64 = await convertToBase64(imgfile);
    //   formik.setFieldValue("postImage", base64);
    //   setFile([...file, URL.createObjectURL(e.target.files[i])]);
    // }
    // console.log("Image file", file);

    if (e.target.files.length) {
      let allFiles = [...e.target.files];
      // console.log("allfiles", allFiles);
      let base64 = formik.values.postImage;
      // console.log(formik);
      const filesBlob = [...file];
      allFiles.forEach(async (item) => {
        // console.log("itsssm", item);
        base64.push(await convertToBase64(item));
        // setFile([...file, URL.createObjectURL(item)]);
      });
      // console.log("blobs", filesBlob);
      setFile([...filesBlob]);
      setFile([...file, ...e.target.files]);

      // const imgfile = e.target.files[0];
      // const base64 = await convertToBase64(imgfile);

      // console.log("allfilesAfter", allFiles);
      // console.log("base64", base64);
      // let fileArr = [];
      // for (let i = 0; i <= fileArr.length; i++) {
      //   fileArr[i].push(base64);
      // }
      // formik.setFieldValue("postImage", fileArr);
      // console.log("imageArray", fileArr);
      // formik.setFieldValue("postImage", base64);
    }
  };

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
  }
  console.log("file after delete", file);

  const initialValues = {
    postImage: [],
    description: "",
  };

  console.log("Profile", userAuth);
  const date = new Date().getTime();
  // const date = timeStamp;
  const currentDate = date;
  // const date = moment(currentDate).format();
  // console.log("momemnt", date);

  const onSubmit = (values) => {
    dispatch(addPost({ ...values, ...userAuth, currentDate }));
    toast("Post created successfully");
    navigate("/postlist");
    formik.resetForm();
    console.log("item deleted", values);
  };

  // const validationSchema = Yup.object({
  //   postImage: Yup.mixed().nullable().required("Required"),
  //   description: Yup.string().required("Required"),
  // });

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <CreatePostContainer>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="postHeading">Create post</div>
          <div className="DescriptionBox">
            <div className="description">Add a Description</div>
            <div className="text_box">
              <textarea
                rows="18"
                cols="90"
                name="description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
            </div>
          </div>
          <div className="addMediaBtn">
            <StyledButton
              variant="register"
              height="40px"
              width="140px"
              onClick={() => fileInputRef.current.click()}
              type="button"
            >
              Add media
            </StyledButton>
            <input
              multiple="multiple"
              ref={fileInputRef}
              type="file"
              hidden
              onChange={handleFileUpload}
            />

            {/* <input
            type="file"
            id="actual-btn"
            accept="image/*"
            style={{ display: "none" }}
          />
          <label htmlFor="actual-btn">
            <StyledButton variant="register" height="40px" width="140px">
              Add Media
            </StyledButton>
          </label> */}
          </div>
          <div className="imageField">
            {!!file.length &&
              file?.map((item, index) => {
                return (
                  <div key={index}>
                    <div
                      className="deleteBtn"
                      onClick={() => deleteFile(index)}
                    >
                      <DeleteIcon height="15px" width="15px" />
                    </div>
                    <img src={URL.createObjectURL(item)} alt="" />
                  </div>
                );
              })}
          </div>
          <div className="createPostBtn">
            <StyledButton
              variant="outlined"
              width="140px"
              height="40px"
              color="#222A33;"
              type="button"
            >
              Cancel
            </StyledButton>
            <StyledButton
              width="140px"
              height="40px"
              variant="register"
              type="submit"
            >
              Create Post
            </StyledButton>
            <ToastContainer />
          </div>
        </form>
      </div>
    </CreatePostContainer>
  );
};

export default CreatePost;
