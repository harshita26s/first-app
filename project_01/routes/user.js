const express = require("express");
const { 
    handleGetAllUsers, 
    handleGetUserById, 
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
} = require("../controllers/user");

const router = express.Router();

router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser);

//Routes
// router.app.get("/users", async (req, res) => {
//     const allDbUsers = await User.find({});
//     const html = `
//     <ul>
//       ${allDbUsers.map((user) => 
//         `<li>${user.first_name} - ${user.email}</li>`).join("")}
//     </ul>
//     `;
//     res.send(html);
// });

// /api/users/ = / can assume as it is user router
// rest api
// router.app.get("/", async (req, res) => {
//     const allDbUsers = await User.find({});

//     // res.setHeader("X-MyName", "Harshita dewatwal");   // custom Header
//     // // always add X to custom headers
//     return res.json(allDbUsers);
// });

router
    .route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById);



        // create users
    
    // users.push({...body, id: users.length + 1 });
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    // return res.json({ status: "success", id: users.length });
    // });
    

module.exports = router;