// pageConfig.js
export default {
  index: {
    title: "Mandatory 1",
    css: ["/global.css", "/pages/frontend/index.css"],
    scripts: []
  },
  "web-server": {
    title: "How to start a web server",
    css: ["/global.css", "/pages/web-server/web-server.css", "/pages/web-server/terminalmodal.css"],
    scripts: ["/pages/web-server/modal.js"]
  },
  "no-chatgpt": {
    title: "How to not use ChatGPT",
    css: ["/global.css", "/pages/no-chatgpt/no-chatgpt.css", "/pages/no-chatgpt/chatGPTpicture.css"],
    scripts: []
  },
  seperate: {
    title: "Separate backend and frontend",
    css: ["/global.css", "/pages/seperate/seperate.css", "/pages/seperate/seperatemodal.css"],
    scripts: ["/pages/seperate/modal.js"]
  },
  wishlist: {
    title: "Wishlist for elective",
    css: ["/global.css", "/pages/wishlist/wishlist.css", "/pages/wishlist/wishlist-picture.css", "/pages/wishlist/wishlist-modal.css"],
    scripts: ["/pages/wishlist/wishlist-modal.js"]
  }
};
