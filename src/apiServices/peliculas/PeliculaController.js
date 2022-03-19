const PeliculaM=require('./Pelicula_model');
const Peliculas_dao=require('./Peliculas_dao');
const Coment_dao=require('../coment/coment_dao');
const score_model=require('../score/score_model');
const peliculas_dto=require('./Pelicula_dto');
const score_dao=require('../score/score_dao');


module.exports={

    async create_movie(req, res){
        
        
        let filePath=req.files.cover.path;        
        let fileSplit = filePath.split("/");
        let fileName = fileSplit[3];

        let title = req.body.title
        let description= req.body.description
        let long_time= req.body.long_time
        let url_youtube= req.body.url_youtube
        let date_release= req.body.date_release
        
        if (!title) return res.sendStatus(400);
        if (!description) return res.sendStatus(400);
        if (!long_time) return res.sendStatus(400);
        if (!url_youtube) return res.sendStatus(400);
        if (!date_release) return res.sendStatus(400);  
        if (!fileName) return res.sendStatus(400);

        var new_pelicula=new PeliculaM(title, description, long_time, url_youtube, date_release, fileName);

        Peliculas_dao.create_movie(new_pelicula, (new_pelicula, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 404})
            if(new_pelicula)return res.send({menssaje:"se creo correctamente", codigo: 200}); 
        });
    },

    async list(req, res){
        Peliculas_dao.list_movie( (movies, err)=>{
            if(err) return res.send({menssaje:"error en query", codigo: 200})
            console.log(movies);
            if(movies)return res.send(peliculas_dto.multiple(movies, req.res)); 
        });
    },

    async oneMovie(req, res){
        var id_movie=req.params.id;        
        if (!id_movie) return res.sendStatus(400);

        Peliculas_dao.one_movie(id_movie, (res_peli_query, err)=>{
            // movie 
            if(err) console.log(err_movie);
            if(res_peli_query) 

            Coment_dao.allcomentsX_movie(id_movie, (coments_query, err)=>{
                if(err) console.log(err_movie);
                if(coments_query){
                    if (coments_query===undefined || coments_query===" " ||  coments_query.length==0 ){
                        coments_query=[{coment:'pelicula sin comentarios'}]
                    }
                } 
                score_model.calc_score(id_movie, (calScore, err)=>{
                    if(err) console.log(err_movie);
                    if (calScore===undefined || calScore===" " ||  calScore.length==0 ){
                        calScore=0
                    }                    
                    return res.send(peliculas_dto.single_all(res_peli_query[0], calScore, coments_query));
                })
            })
        }); 
    },

    async score(req, res){
        score=req.body.score;
        movie_id=req.body.movie_id        
        score_dao.score(score, movie_id, (id_score, err)=>{
            if(err) console.log(err);
            var data_score={
                id_score:id_score,
                movie_id:movie_id
            }
            score_dao.score_movie(data_score, (score_dao, err)=>{
                if(score_dao) return res.send({menssaje:"se actualizo", codigo: 200}); 
            });
            
        })
    }
}