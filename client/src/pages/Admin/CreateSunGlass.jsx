import React, { useEffect, useState }  from 'react'
import AdminLayout from '../../adminComponents/AdminLayout'
import axios from "axios";
import { Modal } from "antd";
import toast from "react-hot-toast";
import SunGlassForm from '../../components/Form/SunGlassForm.jsx';

const CreateSunGlass = () => {
  const [sunGlass, setSunGlass] = useState([]);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/v1/sunglass/create-sunglass", {
        name,
      });
      if (data?.success) {
        toast.success(`${name} is created successfully`);
        getAllSunGlass();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in sunglass");
    }
  };

  //getAll category
  const getAllSunGlass = async () => {
    try {
      const { data } = await axios.get("/api/v1/sunglass/get-sunglass");
      if (data?.success) {
        setSunGlass(data?.sunglass);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in sunglass");
    }
  };
  useEffect(() => {
    getAllSunGlass();
  }, []);

  //update sunglass
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `/api/v1/sunglass/update-sunglass/${selected._id}`,
        {
          name: updatedName,
        }
      );

      if (data?.success) {
        toast.success(`${updatedName} is updated successfully`);
        setSelected(null);
        setUpdatedName("");
        setVisible(false);
        getAllSunGlass();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in categroy");
    }
  };

  // delete sunglass
  const handleDelete = async (pId) => {
    try {
      const { data } = await axios.delete(
        `/api/v1/sunglass/delete-sunglass/${pId}`
      );

      if (data?.success) {
        toast.success("sunglass Deleted successfully");
        getAllSunGlass();
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong in delete categroy");
    }
  };

  return (
    <>
    <AdminLayout title={"Dashboard - create-sunglass"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row ">
          <div className="col-md-3"></div>
          <div className="col-md-9">
            <h2>Manage SunGlass</h2>
            <div className="p-3 w-50">
              <SunGlassForm
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
                  {sunGlass?.map((c) => (
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
              <SunGlassForm
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
  )
}

export default CreateSunGlass