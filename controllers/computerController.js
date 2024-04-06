import slugify from "slugify";
import computerModal from "../models/computerModal.js";

export const createcomputerController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingcomputer = await computerModal.findOne({ name });
    if (existingcomputer) {
      return res.status(200).send({
        success: false,
        message: "computer Already Exisits",
      });
    }
    const computer = await new computerModal({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "new computer created",
      computer,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Errro in computer",
    });
  }
};

//update computer
export const updatecomputerController = async (req, res) => {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const computer = await computerModal.findByIdAndUpdate(
        id,
        { name, slug: slugify(name) },
        { new: true }
      );
      res.status(200).send({
        success: true,
        messsage: "computer Updated Successfully",
        computer,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while updating computer",
      });
    }
  };
  
  // get all cat
  export const computerControlller = async (req, res) => {
    try {
      const computer = await computerModal.find({});
      res.status(200).send({
        success: true,
        message: "All Categories List",
        computer,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while getting all categories",
      });
    }
  };
  
  // single computer
  export const singlecomputerController = async (req, res) => {
    try {
      const computer = await computerModal.findOne({ slug: req.params.slug });
      res.status(200).send({
        success: true,
        message: "Get SIngle computer SUccessfully",
        computer,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single computer",
      });
    }
  };
  
  //delete computer
  export const deletecomputerCOntroller = async (req, res) => {
    try {
      const { id } = req.params;
      await computerModal.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Categry Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting computer",
        error,
      });
    }
  };
  
