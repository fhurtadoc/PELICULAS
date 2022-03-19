const pool=require('../../conexion.SQL/conexion');

const LIST=("SELECT c.coment  FROM coment_movie cm  inner join coment c  on c.id_coment=cm.id_coments where cm.id_movie=?");

module.exports={
    
    async allcomentsX_movie (id_movie, done){
        pool.query(LIST, id_movie, (err, res)=>{
            if(err){
                done(err);
            }else{
                done(res);
            }
        })
    },
    
}