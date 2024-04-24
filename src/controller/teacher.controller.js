import { Teacher } from "../model/teacherCard.js";

export const createTeacherProfile = async (req, res) => {
  try {
    const teacherData = req.body;
    const newTeacherProfile = await Teacher.create(teacherData);
    return res.status(201).json({ message: "Teacher profile created", teacher: newTeacherProfile });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


export const updateTeacherProfile = async (req, res) => {
    try {
      const { teacherId } = req.params;
      const updateData = req.body;
  
      const updatedTeacherProfile = await Teacher.findByIdAndUpdate({_id:teacherId}, updateData, { new: true });
  
      
      if (!updatedTeacherProfile) {
        return res.status(404).json({ error: "Teacher profile not found" });
      }
  
      return res.status(200).json({ message: "Teacher profile updated", teacher: updatedTeacherProfile });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  export const deleteTeacherProfileField = async (req, res) => {
    try {
      const { teacherId, fieldName } = req.params;
  
      const teacherProfile = await Teacher.findById({_id:teacherId});
  
      if (!teacherProfile) {
        return res.status(404).json({ error: "Teacher profile not found" });
      }
  
      if (!teacherProfile[fieldName]) {
        return res.status(404).json({ error: `Field '${fieldName}' not found in the teacher profile` });
      }
  
      delete teacherProfile[fieldName];
      await teacherProfile.save();
  
      return res.status(200).json({ message: `Field '${fieldName}' deleted from the teacher profile` });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };


  export const getTeacherProfileByUserId = async (req, res) => {
    try {
      const { userId } = req.params;
  
      const teacherProfile = await Teacher.findOne({ userId });
  
      if (!teacherProfile) {
        return res.status(404).json({ error: "Teacher profile not found for the user" });
      }
  
      return res.status(200).json(teacherProfile);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };

  export const deleteTeacherProfile = async (req, res) => {
    try {
      const { teacherId } = req.params;
      
      const deletedTeacherProfile = await Teacher.findByIdAndDelete({_id:teacherId});
  
      if (!deletedTeacherProfile) {
        return res.status(404).json({ error: "Teacher profile not found" });
      }
  
      return res.status(200).json({ message: "Teacher profile deleted", teacher: deletedTeacherProfile });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  };