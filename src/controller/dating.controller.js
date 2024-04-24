import { Dating } from "../model/datingCard.js";


export const createDatingProfile = async (req, res) => {
  try {
    const userData = req.body;
    if (!userData.userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const newDatingProfile = await Dating.create(userData);
    return res.status(201).json({ message: "Dating card created", user: newDatingProfile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


export const updateDatingProfile = async (req, res) => {
    try {
      const { datingId } = req.params;
      const updateData = req.body;
  
      const updatedDatingProfile = await Dating.findByIdAndUpdate({_id:datingId}, updateData, { new: true });

      if (!updatedDatingProfile) {
        return res.status(404).json({ error: "Dating profile not found" });
      }
  
      return res.status(200).json({ message: "Dating profile updated", user: updatedDatingProfile });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  
export const deleteDatingProfileField = async (req, res) => {
    try {
      const { datingId, fieldName } = req.params;
        
      // Find the dating profile by ID
      const datingProfile = await Dating.findById({_id:datingId});
  
      // Check if the dating profile exists
      if (!datingProfile) {
        return res.status(404).json({ error: "Dating profile not found" });
      }
  
      // Check if the specified field exists in the dating profile
      if (!datingProfile[fieldName]) {
        return res.status(404).json({ error: `Field '${fieldName}' not found in the dating profile` });
      }
  
      // Remove the specified field from the dating profile
      delete datingProfile[fieldName];
  
      // Save the updated dating profile
      await datingProfile.save();
  
      return res.status(200).json({ message: `Field '${fieldName}' deleted from the dating profile` });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };


  export const getDatingProfileByUserId = async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Find the dating profile by user ID
      const datingProfile = await Dating.findOne({ userId });
  
      // Check if the dating profile exists
      if (!datingProfile) {
        return res.status(404).json({ error: "Dating profile not found for the user" });
      }
  
      return res.status(200).json({message:"Your Id User" , user: datingProfile});
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };



  
export const deleteDatingProfile = async (req, res) => {
  try {
    const { datingId } = req.params;
    const deletedDatingProfile = await Dating.findByIdAndDelete({_id:datingId});

    if (!deletedDatingProfile) {
      return res.status(404).json({ error: "Dating profile not found" });
    }

    return res.status(200).json({ message: "Dating profile deleted", dating: deletedDatingProfile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};