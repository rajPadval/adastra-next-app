"use client";
import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import dynamic from "next/dynamic";
import { uploadImg } from "@/app/helpers";
const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });

const CreateBlog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [category, setCategory] = useState("Technical");
  const [thumbnail, setThumbnail] = useState();

  // function to create post
  const createPost = async () => {
    const data = { title, content, category, creator, linkedin, thumbnail };
    if (title.length < 3) {
      toast.error("Please enter a valid title");
    } else {
      if (content.length < 100) {
        toast.error("Content should be more than 100 words");
      } else {
        if (!category) {
          toast.error("Please reselect the category");
        } else {
          const imageUrl = await uploadImg(thumbnail);

          if (imageUrl) {
            data.thumbnail = imageUrl;
            const res = await fetch("/api/blog/create", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
            await res.json();
            toast.success("Blog created sucessfully");
            setTitle("");
            setContent("");
            setCategory("");
            setLinkedin("");
            setCreator("");
          } else {
            toast.error("Error uploding image");
          }
        }
      }
    }
  };
  // Function to discard post
  const discardPost = () => {
    alert("This will clear everything you wrote");
    setTitle("");
    setContent("");
    setCategory("");
    setCreator("");
    setLinkedin("");
  };

  // fuction to get post
  const getPosts = async () => {
    const res = await fetch(
      "https://adastra-backend.vercel.app/api/getblogpost"
    );
    // const res = await fetch("http://localhost:8000/api/getblogpost");
    const data = await res.json();
    setPosts(data);
  };

  const deletePost = async (postId) => {
    // console.log(`http://localhost:8000/api/deletepost/${postId}`);
    const res = await fetch(
      `https://adastra-backend.vercel.app/api/deletepost/${postId}`,
      // `http://localhost:8000/api/deletepost/${postId}`,
      {
        method: "POST",
      }
    );
    await res.json();
    toast.success("post removed");
  };

  const editor = useRef(null);

  const handleSelectImage = async (e) => {
    const file = e.target.files[0];
    const fileSize = file.size / 1024 / 1024;
    if (fileSize <= 1) {
      console.log(
        "The size of the file is : ",
        fileSize,
        "MB which is less than or equal to 1"
      );
      setThumbnail(file);
    } else {
      toast.error("File size is more than 1 Mb");
    }
  };

  return (
    <>
      <div className="w-full lg:w-[95vw] mx-auto  h-full flex justify-center items-center flex-col md:flex-row gap-5 ">
        <div className="w-[90vw] backdrop-blur-lg rounded-lg bg-white bg-opacity-5 font-montserrat md:w-[60vw] m-5 flex p-3 justify-center gap-5 flex-col shadow-md ">
          <h1 className=" text-xl md:text-3xl ">
            Are you ready for this amazing Blog?
          </h1>
          <div className="flex flex-col gap-3 items-start">
            <label className=" text-lg  md:text-xl font-thin">Title :</label>
            <input
              type="text"
              name=""
              id=""
              className=" text-gray-600 px-3 rounded-md border-2 py-2  w-full  outline-none hover:border-purple-400"
              placeholder="Enter Title Here"
              value={title}
              required
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-3 items-start ">
            <label className=" text-lg  md:text-xl font-thin">Content : </label>
            <JoditEditor
              ref={editor}
              value={content}
              onChange={(newContent) => {
                setContent(newContent);
              }}
              className="text-gray-600"
            />
          </div>
          <div className="flex flex-col gap-3 items-start">
            <label htmlFor="thumbnail" className="font-thin text-lg md:text-xl">
              Thumbnail :
            </label>
            <input
              type="file"
              name="thumbnail"
              id="thubmanil"
              onChange={handleSelectImage}
            />
          </div>
          <div className="flex flex-col gap-3 items-start">
            <label className="font-thin text-lg md:text-xl">
              Category :{" "}
              <select
                name="category"
                id=""
                className=" text-gray-600 px-3 rounded-md font-normal outline-none"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option>Technical</option>
                <option>Non-Technical</option>
              </select>
            </label>
          </div>

          <div className="flex flex-col gap-3 items-start">
            <label className=" text-lg  md:text-xl font-thin">
              Creator's Name :
            </label>
            <input
              type="text"
              name=""
              id=""
              className=" text-gray-600 px-3 rounded-md border-2 py-2  w-full  outline-none hover:border-purple-400"
              placeholder="Enter Creator's Name"
              value={creator}
              onChange={(e) => {
                setCreator(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-3 items-start">
            <label className=" text-lg  md:text-xl font-thin">
              Creator's LinkedIn :
            </label>
            <input
              type="url"
              name=""
              id=""
              className=" text-gray-600 px-3 rounded-md border-2 py-2  w-full  outline-none hover:border-purple-400"
              placeholder="Creator's LinkedIn URL"
              value={linkedin}
              onChange={(e) => {
                setLinkedin(e.target.value);
              }}
            />
          </div>
          <hr />
          <div className="flex gap-3">
            <button
              type="submit"
              className="font-bold py-2 px-5 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all rounded-md"
              onClick={createPost}
            >
              Create
            </button>
            <button
              type="submit"
              className="font-bold py-2 px-5 border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white transition-all rounded-md"
              onClick={discardPost}
            >
              Discard
            </button>
          </div>
        </div>

        {/* Created posts listed here */}
        <div className="lg:bg-white lg:bg-opacity-5 lg:backdrop-blur-lg rounded-lg shadow-md w-[90vw] md:w-[20vw] h-[90vh] p-3 flex flex-col  gap-3">
          {posts.map((post, i) => {
            return (
              <div
                className="flex justify-between items-center  shadow-md  p-3 hover:scale-105 transition-all backdrop-blur-lg rounded-lg bg-white bg-opacity-5"
                key={i}
              >
                {" "}
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold font-montserrat">
                    {post.title.substring(0, 20)}...
                  </h3>
                  <div>
                    <span className=" font-mono">creator : {post.creator}</span>
                  </div>
                </div>
                <MdDelete
                  className="text-xl cursor-pointer hover:text-red-500 transition-colors hover:rotate-6"
                  post-id={post._id}
                  onClick={(e) => {
                    let postId = e.currentTarget.getAttribute("post-id");
                    deletePost(postId);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
