import express from "express";
import path from "path";
import pageConfig from "./pageConfig.js"
import expressLayouts from "express-ejs-layouts";

const app = express();

// ------------------------ STATIC FILES -----------------------------
app.use(express.static(path.join(import.meta.dirname, "public")));

// ------------------------ VIEW ENGINE ------------------------------
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));



// Enable layouts
app.use(expressLayouts);
app.set("layout", "layouts/main"); //

// ------------------------ ROUTES -----------------------------------


Object.entries(pageConfig).forEach(([route, config]) => {
  const pathName = route === "index" ? "/" : `/${route}`;
  app.get(pathName, (req, res) => res.render(route, config));
});

// ------------------------ SERVER START -----------------------------
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`✅ Server running on: http://localhost:${PORT}`);
});
