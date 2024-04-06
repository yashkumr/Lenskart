import slugify from "slugify";
import eyeModal from "../models/eyeModal.js";


export const createeyeglassController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingeyeglass = await eyeModal.findOne({ name });
    if (existingeyeglass) {
      return res.status(200).send({
        success: false,
        message: "eyeglass Already Exisits",
      });
    }
    const eyeglass = await new eyeModal({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "new eyeglass created",
      eyeglass,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Errro in eyeglass",
    });
  }
};

//update eyeglass
export const updateeyeglassController = async (req, res) => {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const eyeglass = await eyeModal.findByIdAndUpdate(
        id,
        { name, slug: slugify(name) },
        { new: true }
      );
      res.status(200).send({
        success: true,
        messsage: "eyeglass Updated Successfully",
        eyeglass,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while updating eyeglass",
      });
    }
  };
  
  // get all cat
  export const eyeglassControlller = async (req, res) => {
    try {
      const eyeglass = await eyeModal.find({});
      res.status(200).send({
        success: true,
        message: "All Categories List",
        eyeglass,
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
  
  // single eyeglass
  export const singleeyeglassController = async (req, res) => {
    try {
      const eyeglass = await eyeModal.findOne({ slug: req.params.slug });
      res.status(200).send({
        success: true,
        message: "Get SIngle eyeglass SUccessfully",
        eyeglass,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single eyeglass",
      });
    }
  };
  
  //delete eyeglass
  export const deleteeyeglassCOntroller = async (req, res) => {
    try {
      const { id } = req.params;
      await eyeModal.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Categry Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting eyeglass",
        error,
      });
    }
  };
  
