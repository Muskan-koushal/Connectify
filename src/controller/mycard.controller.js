import { Card } from "../model/card.model.js";
export const getUserCard = (request,response,next)=>{
    let {userId} = request.body;
    console.log(userId)
    Card.find({userId}).populate("userId").populate("mycard.businessId")
    .populate("mycard.datingId").populate("mycard.appointmentId")
    .populate("mycard.teacherId").populate("mycard.eventId")
    .then(result=>{
        console.log(result);
        return response.status(200).json({cart: result});})
    .catch(err=>{
        console.log(err);
        return response.status(500).json({error: "Internal Server Error"});})
}
export const setUserCard = async (request,response,next)=>{
    try{
      let {userId,businessId,datingId,appointmentId,teacherId,eventId} = request.body;
      let cart = await Card.findOne({userId});
      if(cart){
        let status = cart.mycard.some(((business)=>business.businessId==businessId)||((dating)=>dating.datingId==datingId)||((business)=>business.businessId==businessId)||((dating)=>dating.datingId==datingId)||((business)=>business.businessId==businessId));
        if(status)
           return response.status(200).json({message: "Card already added in cart.."});
        cart.mycard.push({businessId,datingId,appointmentId,teacherId,eventId});
        await cart.save();
        return response.status(200).json({message: "Card  successfull added in cart"});  
      }
      else{
        cart = await Card.create({userId,mycard:[{businessId,datingId,appointmentId,teacherId,eventId}]});
        return response.status(200).json({message: "Card  added in cart", cart: cart});
      }
    }
    catch(err){
        console.log(err);
        return response.status(500).json({error: "Internal server error"});
    }
}