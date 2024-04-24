import { User} from "../model/user.model.js";
export const setShareCard = async (request,response,next)=>{
    try{
      let {senderId,receiverId,businessId,datingId,appointmentId,teacherId,eventId} = request.body;
      let cart = await User.findOne({_id:receiverId});
      if(cart){
        let status = cart.requestCard.some(((business)=>business.businessId==businessId)||((dating)=>dating.datingId==datingId)||((business)=>business.businessId==businessId)||((dating)=>dating.datingId==datingId)||((business)=>business.businessId==businessId));
        if(status)
           return response.status(200).json({message: "Allready Card Share"});
        cart.requestCard.push({userId:senderId,businessId,datingId,appointmentId,teacherId,eventId});
        await cart.save();
        return response.status(200).json({message: "Card Share Successfully"});  
      }
        return response.status(401).json({message: "User is Not Found", cart: cart});
    }
    catch(err){
        console.log(err);
        return response.status(500).json({error: "Internal server error"});
    }
}