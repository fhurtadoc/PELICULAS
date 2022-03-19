const score_dao=require ('./score_dao');
const lodash = require('lodash');

class Score {
    
    constructor (score){
        this.score=score;        
    }

}

Score.calc_score=function(id, done ){
    score_dao.scores(id, done, (err, res)=>{
        if(err){            
            done(err);            
        }else{            
            let sum_score = lodash.sum(res);
            let allScore=res.length;
            let prome=allScore/sum_score
            done(prome);
        }
    })
}


module.exports=Score;