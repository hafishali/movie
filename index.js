const search = async () =>{
    let Mname = input.value
    console.log(Mname);
    if(Mname){
        const response = await fetch(`https://www.omdbapi.com/?apikey=fa1c9c03&t=${Mname}`)
        response.json().then((data)=>{
            console.log(data);


            let tit =  data.Title
            console.log(tit);

            let res = data.Released
            console.log(res);
            
            let act = data.Actors
            console.log(act);

            let plo = data.Plot
            console.log(plo);

            let pos = data.Poster
            console.log(tit);

            let rating = data.Ratings
            console.log(rating);


            results.innerHTML=`<div class="card mt-5 ms-5" style="width: 20rem;">
           <img style="height:300px;" src=${pos} class="card-img-top" alt="...">
               <div class="card-body">
                 <h3 class="card-title">${tit}</h3>
                   
                </div>
                  <ul class="list-group list-group-flush">
                     <li class="list-group-item"><b>Release Date</b>:${res}</li>
                     <li class="list-group-item"><b>Plot</b> :${plo}</li>
                     <li class="list-group-item"><b>Actors</b> : ${act}</li>

                 <li class="list-group-item" ><b>Rating</b> :

                     <ul>
                     ${rating.map((item)=> `<li> ${item.Source} : ${item.Value}</li>`)}        

                      </ul>
                </li>

                     
                 </ul>
               
            </div>`
        })
    }
    else{
        alert('no data fetch');
    }
}
