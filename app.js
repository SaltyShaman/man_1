import express from "express";
import path from "path";

const app = express();

// ------------------------ STATIC FILES -----------------------------
app.use(express.static(path.join(import.meta.dirname, "public")));

// ------------------------ VIEW ENGINE ------------------------------
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

// ------------------------ ROUTES -----------------------------------

app.get("/", (req, res) => {
    res.render("index", { 
        title: "Mandatory 1",
        css: ["/pages/frontend/index.css"]  // matches pages/frontend/index.css
    });
});

app.get("/web-server", (req, res) => {
    res.render("web-server", { 
        title: "How to start a web server",
        css: [
            "/pages/web-server/web-server.css",
            "/pages/web-server/terminalmodal.css"
        ],
        scripts: ["/pages/web-server/modal.js"]
    });
});

app.get("/no-chatgpt", (req, res) => {
    res.render("no-chatgpt", { 
        title: "How to not use ChatGPT",
        css: [
            "/pages/no-chatgpt/no-chatgpt.css",
            "/pages/no-chatgpt/chatGPTpicture.css"
        ]
    });
});

app.get("/seperate", (req, res) => {
    res.render("seperate", { 
        title: "Separate backend and frontend",
        css: [
            "/pages/seperate/seperate.css",
            "/pages/seperate/seperatemodal.css"
        ],
        scripts: ["/pages/seperate/modal.js"]
    });
});

app.get("/wishlist", (req, res) => {
    res.render("wishlist", { 
        title: "Wishlist for elective",
        css: [
            "/pages/wishlist/wishlist.css",
            "/pages/wishlist/wishlist-picture.css",
            "/pages/wishlist/wishlist-modal.css"
        ],
        scripts: ["/pages/wishlist/wishlist-modal.js"]
    });
});
// ------------------------ SERVER START -----------------------------
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`✅ Server running on: http://localhost:${PORT}`);
});
