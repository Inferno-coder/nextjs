const mongoose=require('mongoose')
const sch=new mongoose.Schema({
  title:String,
  desc:String,
  img:String,
  createdAt:String
},{toJSON:{virtuals:true}})

sch.virtual('short_desc').get(function(){
  return this.desc.substr(0,50)+'...'
})

sch.virtual('created_at_formatted').get(function() {
  return changeDateFormat(this.createdAt)
});

function changeDateFormat(date_str) {
  const date = new Date(date_str);
  const months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

const mod=mongoose.models.Post || mongoose.model('Post',sch)
export default mod
