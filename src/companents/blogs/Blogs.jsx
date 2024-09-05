import React, { useEffect, useState } from "react";
import { Button } from "antd";
import axios from "../../api/index";
import { Add } from "../add/Add";

const Blogs = ({ data }) => {
  const [show, setShow] = useState(false);
  const [reload,setReload] = useState(false)
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
  let items = data?.map((blog) => (
    <div key={blog._id} className="w-56 flex gap-2 flex-col rounded-xl p-5 border ">
      <h3 className="text-xl font-sans">{blog.title}</h3>
      <p className="text-xs font-sans">{blog.desc}</p>
      <p>Created by: {blog.userId.fname}</p>
      <Button className="bg-red-400 text-white" onClick={() => handlDelete(blog._id)}>Delete</Button>
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
