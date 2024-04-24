import { Business } from "../model/businessCard.model.js";

export const createBusinessProfile = async (req, res) => {
  try {
    const businessData = req.body;

    if (!businessData.userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const newBusinessProfile = await Business.create(businessData);
    return res.status(201).json({ message: "Business profile created", user: newBusinessProfile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateBusinessProfile = async (req, res) => {
  try {
    const { businessId } = req.params;
    const updateData = req.body;

    const updatedBusinessProfile = await Business.findByIdAndUpdate({_id:businessId}, updateData, { new: true });

    if (!updatedBusinessProfile) {
      return res.status(404).json({ error: "Business profile not found" });
    }

    return res.status(200).json({ message: "Business profile updated", user: updatedBusinessProfile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteBusinessProfileField = async (req, res) => {
  try {
    const { businessId, fieldName } = req.params;
    const businessProfile = await Business.findById({_id:businessId});
    if (!businessProfile) {
      return res.status(404).json({ error: "Business profile not found" });
    }
    if (!businessProfile[fieldName]) {
      return res.status(404).json({ error: `Field '${fieldName}' not found in the business profile` });
    }
    delete businessProfile[fieldName];
    await businessProfile.save();
    return res.status(200).json({ message: `Field '${fieldName}' deleted from the business profile` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getBusinessProfileByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the business profile by user ID
    const businessProfile = await Business.findOne({ userId });

    // Check if the business profile exists
    if (!businessProfile) {
      return res.status(404).json({ error: "Business profile not found for the user" });
    }

    return res.status(200).json({ message: "Business profile found", user: businessProfile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteBusinessProfile = async (req, res) => {
  try {
    const { businessId } = req.params;
    const deletedBusinessProfile = await Business.findByIdAndDelete({_id:businessId});

    if (!deletedBusinessProfile) {
      return res.status(404).json({ error: "Business profile not found" });
    }

    return res.status(200).json({ message: "Business profile deleted", business: deletedBusinessProfile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
