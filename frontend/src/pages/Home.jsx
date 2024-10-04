import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ListCard from "../components/ListCard";
import GridCard from "../components/GridCard";
import axios from "axios";
import { backendUrl } from "../helper";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState(null);

  const [isGridLayout, setIsGridLayout] = useState(false);

  const [isCreateModelShow, setIsCreateModelShow] = useState(false);

  const [title, setTitle] = useState("");

  const [projects, setProjects] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = projects
    ? projects.filter(
        (item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()) // Case insensitive filtering
      )
    : [];

  const navigate = useNavigate();

  const createProject = async () => {
    if (title) {
      await axios
        .post(backendUrl + "/project/createProject", {
          title,
          token: localStorage.getItem("token"),
        })
        .then((res) => {
          console.log(res);
          navigate(`/editor/${res.data.projectId}`);
        })
        .catch((err) => {
          console.log("HOME AXIOS ERROR");
        });
    } else {
      alert("title can't be empty");
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    async function getDetails() {
      await axios
        .post(backendUrl + "/user/getUserDetails", {
          token: localStorage.getItem("token"),
        })
        .then((res) => {
          console.log(res);
          setData(res.data.user);
        })
        .catch((err) => {
          console.log("NAVBAR axios error");
        });
    }

    getDetails();
  }, []);

  const getProjects = async () => {
    await axios
      .post(backendUrl + "/projects/getProjects", {
        token: localStorage.getItem("token"),
      })
      .then((res) => {
        console.log(res);
        setProjects(res.data.projects);
      })
      .catch((err) => {
        console.log("HOME GET PROJECTS AXIOS ERROR");
      });
  };

  return (
    <div>
      <Navbar setIsGridLayout={setIsGridLayout} isGridLayout={isGridLayout}/>

      <div className="flex items-center justify-between px-[100px] my-10">
        <h2 className="text-2xl">Hi, {`${data ? data.username : ""}`} 👋</h2>
        <div className="flex items-center gap-1">
          <div className="w-[350px] bg-[#141414] rounded flex items-center mb-4 ">
            <input
              type="text"
              placeholder="Search here...!"
              className="p-2 bornder-none outline-none bg-transparent text-white text-lg"
              value={searchQuery} // Bind search input to searchQuery state
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            className="bg-[#00AEEF] text-white p-[10px] border-none rounded-md cursor-pointer text-lg mb-4 hover:bg-[#0086b3]"
            onClick={() => setIsCreateModelShow(true)}
          >
            +
          </button>
        </div>
      </div>

      <div>
        {isGridLayout ? (
          <div className="px-[100px] flex flex-wrap gap-2 justify-center">
            {filteredData.length ? (
              filteredData.map((project) => {
                return <GridCard key={project._id} project={project} />;
              })
            ) : (
              <p>Make Projects</p>
            )}
          </div>
        ) : (
          <div className="grid px-[100px]">
            {filteredData.length ? (
              filteredData.map((project) => {
                return <ListCard key={project._id} project={project} />;
              })
            ) : (
              <p>Make Projects</p>
            )}
          </div>
        )}
      </div>

      {isCreateModelShow && (
        <div className="createModelCon fixed top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgb(0,0,0,0.5)] flex items-center justify-center">
          <div className="createModel w-[25vw] min-h-fit shadow-lg shadow-black/50 bg-[#212121] rounded-[10px] p-[20px]">
            <h3 className="text-2xl">Create New Project</h3>
            <div className="bg-[#202020] mt-4">
              <div className="w-full bg-[#141414] rounded flex items-center mb-4">
                <input
                  type="text"
                  placeholder="Project Title"
                  name="projectTitle"
                  className="py-4 px-2 bornder-none outline-none bg-transparent text-white text-base"
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                />
              </div>
            </div>
            <div className="flex items-center gap-[10px] w-full mt-2">
              <button
                className="bg-[#00AEEF] text-white border-none rounded cursor-pointer text-base w-full mt-5 hover:bg-[#0086b3] btnBlue  mb-4 !p-[5px] !px-[10px] !py-[10px]"
                onClick={createProject}
              >
                Create
              </button>
              <button
                onClick={() => {
                  setIsCreateModelShow(false);
                }}
                className=" text-white border-none rounded cursor-pointer text-base w-full mt-5 hover:bg-[#0086b3] btnBlue !bg-[#1A1919] mb-4 !p-[5px] !px-[10px] !py-[10px]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
