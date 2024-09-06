import React, { useEffect, useState } from "react";
import { Button } from "antd";
import axios from "../../api/index";
import { Add } from "../add/add";
import { useSelector } from "react-redux";

const Blogs = ({ data }) => {
  const [show, setShow] = useState(false);
  const [reload,setReload] = useState(false)
  const profile = useSelector(state => state.profile)
  // console.log(profile?._id);
  
  useEffect(() => {
    setReload(data);
  }, [reload]);
  const handlDelete = (id) => {
    axios
      .delete(`/blogs/${id}`)
      .then((res) => {
      setReload((p) => !p);
    });
  };

  const handleCreate = (values) => {
    let blog = {
      title: values.title,
      desc: values.desc,
    };
    axios
      .post("/blogs", blog)
      .then((res) => {
        setReload((p) => !p);
      });
  };
  // const handleUpdate = (values) => {
  //   let updateBlog = {
  //     title: values.title,
  //     desc: values.desc,
  //   };
  //   axios
  //     .patch(`/blogs/${_id}`, updateBlog)
  //     .then((res) => {
  //       setReload((p) => !p);
  //     });
  // };
  let items = data?.map((blog) => (
    <div key={blog._id} className="w-56 flex gap-2 bg-slate-200 flex-col rounded-xl p-5 border ">
      <h3 className="text-xl font-bold">{blog.title}</h3>
      <p className="text-[16px] font-sans">{blog.desc}</p>
      <p className="bg-slate-300 p-2 rounded-md">Created by: {blog.userId.fname}</p>
      {
        profile?._id === blog.userId._id ?
        <Button className="bg-red-400 text-white" onClick={() => handlDelete(blog._id)}>Delete</Button>
        :
        <Button type="primary" disabled>Indelible</Button>
      }
      {/* <Button className="bg-red-400 text-white" onClick={() => handleUpdate(blog._id)}>Update</Button> */}
    </div>
  ));
 
  return (
    <div className="container mx-auto mt-8 mb-10">
      <Button onClick={() => setShow(true)} className="mb-6  bg-green-400 text-white ">
        <p className="font-bold">Add</p>
      </Button>
      <div className="grid gap-4 grid-cols-1  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
        {items}
      </div>
      <Add show={show} setShow={setShow} handleCreate={handleCreate} />
    </div>
  );
};

export default Blogs;
