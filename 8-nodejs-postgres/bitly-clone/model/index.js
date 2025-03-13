import createUserTable from "./user.js";

async function initModels() {
    await createUserTable();
}

 initModels();