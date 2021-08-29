function testimonial(){
    fetch('https://testimonialapi.toolcarton.com/api')
    .then(ress => ress.json())
    .then(data => getComment(data))
};
testimonial();

function getComment(data) {
    for (let comment of data){
        const slider = document.getElementById('slider');
        const div = document.createElement('div');
        div.classList.add("carousel-item");
        if (comment == data[0]){
            div.classList.add("active");
        }
        div.innerHTML = `
             <div class="card">
                <img src="${comment.avatar}" width ="150px" height="150px" class="mx-auto mt-2 rounded-circle">
                <div class="card-body">
                  <h5 class="card-title text-center">${comment.name} <span class="rating">${comment.rating}</span> </h5>
                  <p class="text-center sub-title">${comment.designation}, ${comment.location}</p>
                  <p class="card-text"><i>&ldquo;${comment.message}&rdquo;</i></p>
                </div>
            </div>
        `
        slider.appendChild(div);
        console.log(comment);
    }
}