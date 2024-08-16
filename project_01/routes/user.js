const express = require("express");

const router = express.Router();

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
router.app.get("/", async (req, res) => {
    const allDbUsers = await User.find({});

    // res.setHeader("X-MyName", "Harshita dewatwal");   // custom Header
    // // always add X to custom headers
    return res.json(allDbUsers);
});

router
    .route('/api/users/:id')
    .get(async (req, res) => {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "user not found"});
        return res.json(user);
    })
    .patch(async (req, res) => {
        //Edit user with id
        await User.findByIdAndUpdate(req.params.id, { last_name: "Changed" });
        return res.json({status: "Success" });
    })
    .delete(async (req, res) => {
        //delete user with id
        await User.findByIdAndDelete(req.params.id);
        return res.json({status: "Success" });
    });


    router.post('/api/users', async (req, res) => {
        // create users
    const body = req.body;
    // users.push({...body, id: users.length + 1 });
    // fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    // return res.json({ status: "success", id: users.length });
    // });
    if (
        !body ||
        !body.first_name ||
        !body.last_name ||
        !body.email || 
        !body.gender || 
        !body.job_title 
    ) {
        return res.status(400).json({ msg: "All fields are req..."});
    }
    const result = await User.create({
        first_name: body.first_name,
        last_name: body.last_name,
        email: body.email,
        gender: body.gender,
        job_title: body.job_title,
    });

    // console.log("result", result);
    
    return res.status(201).json({ msg: "success"});
});

module.exports = router;