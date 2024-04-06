import React, { useEffect, useState } from "react";
import AdminLayout from "../../adminComponents/AdminLayout.jsx";
import axios from "axios";
import { Modal } from "antd";
import toast from "react-hot-toast";
import ComputerForm from "../../components/Form/ComputerForm.jsx";

const CreateComputerGlass = () => {
  const [computer, setComputer] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/computer/create-computer", {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is created successfully`);
        getAllComputer();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in computer");
    }
  };

  //getAll computer
  const getAllComputer = async () => {
    try {
      const { data } = await axios.get("/api/v1/computer/get-computer");
      if (data?.success) {
        setComputer(data?.computer);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in computer");
    }
  };
  useEffect(() => {
    getAllComputer();
  }, []);

  //update computer
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/computer/update-computer/${selected._id}`,
        {
          name: updatedName,
        }
      );

      if (data?.success) {
        toast.success(`${updatedName} is updated successfully`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllComputer();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in categroy");
    }
  };

  // delete computer
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/computer/delete-computer/${pId}`
      );

      if (data?.success) {
        toast.success("computer Deleted successfully");
        getAllComputer();
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in delete computer");
    }
  };

  return (
    <>
      <AdminLayout title={"Dashboard - create-computer"}>
        <div className="container-fluid m-3 p-3 dashboard">
          <div className="row ">
            <div className="col-md-3"></div>
            <div className="col-md-9">
              <h2>Manage computer</h2>
              <div className="p-3 w-50">
                <ComputerForm
                  handleSubmit={handleSubmit}
                  value={name}
                  setValue={setName}
                />
              </div>
              <div className="w-75">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {computer?.map((c) => (
                      <>
                        <tr>
                          <td key={c._id}>{c.name}</td>
                          <td>
                            <button
                              className="btn btn-primary ms-2"
                              onClick={() => {
                                setVisible(true);
                                setUpdatedName(c.name);
                                setSelected(c);
                              }}
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger ms-2"
                              onClick={() => {
                                handleDelete(c._id);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
              <Modal
                onCancel={() => setVisible(false)}
                footer={null}
                visible={visible}
              >
                <ComputerForm
                  value={updatedName}
                  setValue={setUpdatedName}
                  handleSubmit={handleUpdate}
                />
              </Modal>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default CreateComputerGlass;
