import { Event } from "../model/eventCard.js";

export const createEvent = async (req, res) => {
  try {
    const eventData = req.body;

    if (!eventData.userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const newEvent = await Event.create(eventData);
    return res.status(201).json({ message: "Event created", event: newEvent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const updateData = req.body;

    const updatedEvent = await Event.findByIdAndUpdate({_id:eventId}, updateData, { new: true });

    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    return res.status(200).json({ message: "Event updated", event: updatedEvent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteEventField = async (req, res) => {
  try {
    const { eventId, fieldName } = req.params;

    // Find the event by ID
    const event = await Event.findById({_id:eventId});

    // Check if the event exists
    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    // Check if the specified field exists in the event
    if (!event[fieldName]) {
      return res.status(404).json({ error: `Field '${fieldName}' not found in the event` });
    }

    // Remove the specified field from the event
    delete event[fieldName];

    // Save the updated event
    await event.save();

    return res.status(200).json({ message: `Field '${fieldName}' deleted from the event` });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getEventByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    // Find the event by user ID
    const event = await Event.findOne({ userId });

    // Check if the event exists
    if (!event) {
      return res.status(404).json({ error: "Event not found for the user" });
    }

    return res.status(200).json({ message: "Event found", event });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const deletedEvent = await Event.findByIdAndDelete({_id:eventId});

    if (!deletedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }

    return res.status(200).json({ message: "Event deleted", event: deletedEvent });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
