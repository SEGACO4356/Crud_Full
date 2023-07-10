const { Pool } = require('pg')

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: '123456789Sg@@',
    database: 'apires',
    port: '5432'
})

const getUsers = async (req, res) =>{
  const response =  await pool.query('SELECT * FROM USERS')
  res.status(200).json(response.rows)
}; 

const getUsersById = async (req, res) =>{
    const reqId = req.params.id
    const response = await pool.query('SELECT * FROM USERS WHERE ID = $1', [reqId])
    res.json(response.rows)
};

const createUser = async (req, res) =>{
    const { USERNAME, USEREMAIL } = req.body;
    const response = await pool.query('INSERT INTO  USERS (USERNAME, USEREMAIL) VALUES ($1, $2)', [USERNAME, USEREMAIL])
    console.log(response);    
    res.json({
        message: 'User added successfully',
        body: {
            USER: {USERNAME, USEREMAIL}
        }
    })    
};

const updateUser = async (req, res) =>{
    const reqId = req.params.id;
    const { USERNAME, USEREMAIL } = req.body;
    const response = await pool.query('UPDATE USERS SET USERNAME = $1, USEREMAIL = $2 WHERE ID = $3', [
        USERNAME,
        USEREMAIL,
        reqId
    ]);
    console.log(response);
    res.json('Updated Successfully')
};

const deleteUser = async (req, res) =>{
    const reqId = req.params.id
    const response = await pool.query('DELETE FROM USERS WHERE ID = $1', [reqId]);
    console.log(response);
    res.json(`User ${reqId} deleted successfully`);
};
    module.exports = {
        getUsers,
        getUsersById,
        createUser,
        updateUser,
        deleteUser
        
    }