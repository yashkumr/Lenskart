import slugify from "slugify";
import sunModal from "../models/sunModal.js";

export const createsunglassController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Name is required" });
    }
    const existingsunglass = await sunModal.findOne({ name });
    if (existingsunglass) {
      return res.status(200).send({
        success: false,
        message: "sunglass Already Exisits",
      });
    }
    const sunglass = await new sunModal({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "new sunglass created",
      sunglass,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Errro in sunglass",
    });
  }
};

//update sunglass
export const updatesunglassController = async (req, res) => {
    try {
      const { name } = req.body;
      const { id } = req.params;
      const sunglass = await sunModal.findByIdAndUpdate(
        id,
        { name, slug: slugify(name) },
        { new: true }
      );
      res.status(200).send({
        success: true,
        messsage: "sunglass Updated Successfully",
        sunglass,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error while updating sunglass",
      });
    }
  };
  
  // get all cat
  export const sunglassControlller = async (req, res) => {
    try {
      const sunglass = await sunModal.find({});
      res.status(200).send({
        success: true,
        message: "All Categories List",
        sunglass,
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
  
  // single sunglass
  export const singlesunglassController = async (req, res) => {
    try {
      const sunglass = await sunModal.findOne({ slug: req.params.slug });
      res.status(200).send({
        success: true,
        message: "Get SIngle sunglass SUccessfully",
        sunglass,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: "Error While getting Single sunglass",
      });
    }
  };
  
  //delete sunglass
  export const deletesunglassCOntroller = async (req, res) => {
    try {
      const { id } = req.params;
      await sunModal.findByIdAndDelete(id);
      res.status(200).send({
        success: true,
        message: "Categry Deleted Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "error while deleting sunglass",
        error,
      });
    }
  };
  
