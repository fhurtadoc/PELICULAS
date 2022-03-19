const pool=require('../../conexion.SQL/conexion');

const LIST=("SELECT s.score  FROM score_movie sm  inner join score s on s.id_score=sm.id_score  where sm.id_movies=?");
const INSERT=("INSERT INTO score (score) VALUES(?)");
const INSERT_SCOREMOVIE=("INSERT INTO score_movie SET ?");

module.exports={
    
    async scores (id_movie, done){
        pool.query(LIST, id_movie, (err, res)=>{
            if(err){                
                done(err);
            }else{
                all_scores=[]
                res.forEach(element => {
                    all_scores.push(element.score);
                });                
                done(all_scores);
            }
        })
    },

    async score (value, done){
        pool.query(INSERT, value, (err, res)=>{
            if(err){
                done(err);
            }else{
                var id=res.insertId                
                done(id);
            }
        })
    },

    async score_movie(data_score, done){
        pool.query(INSERT_SCOREMOVIE, data_score, (err, res)=>{
            if(err){                
                done(err);
            }else{
                console.log(res);                
                //done(res)
            }
        })
    }
    
}