const e = require('express')
const express= require('express')
const router=express.Router()
const mongoose= require('mongoose')
const Group= mongoose.model('Group')
const User= mongoose.model('User')



router.get('/myGroups',(req,res)=>{
    const{userId}=req.body

    User.findById(userId).then((getUser)=>{
        if(!getUser){
            return res.status(422).json({error:"User does not exist"})
        }
        res.json(getUser)

    }).catch(err=>{
        console.log(err)
    })


});

router.post('/createGroup',(req,res)=>{
      const{name,members}=req.body
      
      const group=new Group({
        name,
        members
       })
       group.save()
       .then(group=>{
           members.forEach(id => {
            User.findByIdAndUpdate(id,{
                $push:{groups:group._id}
              }).exec((err,result)=>
              {
                  if(err)
                    res.status(422).json({error:err})     
              })
           })
           res.json(User.findById(req.user._id))
     
       })
       .catch(err=>console.log(err)) 

});  


router.put('/addMembers',(req,res)=>{
    const{membersId,groupId}= req.body

    
    User.findByIdAndUpdate(membersId,{
        $push:{groups: groupId}
    }).exec((err,result)=>
    {
        if(err)
        res.status(422).json({error:err})
    })

    Group.findByIdAndUpdate(groupId,{
        $push:{members: membersId}
    }).exec((err,result)=>
    {
        if(err)
          res.status(422).json({error:err})
    })
    res.json("Member added succesfully")
   

}); 


router.post('/addExpense',(req,res)=>{
    const{groupId,memberList,amount}= req.body

    const memberMap = memberList.map(members => members);
    const split = amount/memberMap.length
    Group.findById(groupId).then(group=>{
        memberMap.forEach(id =>{
            Group.members.findById(id).then((member)=>{
                if(member.isOwed > split){
                    req.User._id.owes += member.isOwed-split;
                    member.isOwed = req.User._id.owes;
                }
                else{
                    member.owes += split-member.isOwed;
                }
                req.User.isOwed += member.isOwed;
            }).catch(err=>console.log(err))
        })
        res.json(group);
    }).catch(err=>console.log(err)) 
});

router.post('/settleUp',(req,res)=>{
    const{memberId,amount} = req.body

    Group.members.findById(memberId).then((member)=>{
        member.isOwed -= amount
        req.User._id.owes -= amount
        res.json(member)
    }).catch(err=>console.log(err))
});

module.exports = router;









