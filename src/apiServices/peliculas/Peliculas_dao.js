const pool=require('../../conexion.SQL/conexion');


const INSERT =('INSERT INTO movies SET ?');
const LIST=("SELECT * from movies");
const ONE_MOVIE=("SELECT * FROM movies WHERE id_movie=?");


module.exports={
    
    async create_movie(new_movie, done){
        pool.query(INSERT, new_movie, (err, res)=>{
            if(err){
                done(err);
            }else{
                done(res);
            }
        })
    },
    
    async list_movie(done){
        pool.query(LIST, (err, res)=>{
            if(err){
                done(err);
            }else{
                done(res);
            }
        })
    },

    async one_movie(id_movie, done){
        pool.query(ONE_MOVIE, id_movie, (err, res)=>{
            if(err){
                done(err);
            }else{
                done(res);
            }
        });
    }

}

