const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho fix by VĐT&NTH",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁Admin Bot梁\n
👀 Tên: Nguyễn Văn Thành ( Máy Dập Daklak )
❎ Tuổi: 20
👤 😶 Giới tính: Nam
💫 Chiều cao cân nặng: 1m78 51 kg
💘 Mối quan hệ: Độc thân
😎 Quê quán: DakLak
👫 Gu: Dú to là được :))
🌸 Tính cách: Ối dồi ôi 
🌐 Facebook: https://www.facebook.com/profile.php?id=100005988378453
🌀 Sở thích: Chơi gái, xem phim sex blabla, ăn, ngủ
👉 Contact: https://www.facebook.com/profile.php?id=100005988378453`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100005988378453}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       }