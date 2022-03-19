var coment=(resource)=>({
    coment:resource.coment
});

var single_all = (resource, score, coments) => ({
    id_movie:resource.id_movie,
    title:resource.title,
    description:resource.description,
    long_time:resource.long_time,
    url_youtube:resource.url_youtube,
    date_release:resource.ate_release,
    cover:resource.cover,
    cal_score:score,
    coments:coments
});

var single = (resource, score, coments) => ({
    id_movie:resource.id_movie,
    title:resource.title,
    description:resource.description,
    long_time:resource.long_time,
    url_youtube:resource.url_youtube,
    date_release:resource.ate_release,
    cover:resource.cover,    
});

var multiple = (resources, authUser) => resources.map((resource) => single(resource, authUser));
var multiple_all = (resources, authUser) => resources.map((resource) => single(resource, authUser));

module.exports = {
    single, 
    multiple, 
    single_all,
    multiple_all  
  };