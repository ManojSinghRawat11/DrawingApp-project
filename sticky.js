let sticky = document.querySelector("#sticky");

sticky.addEventListener("click", function(){
    let textArea = document.createElement("textarea");

    textArea.setAttribute("rows", "10");
    textArea.setAttribute("cols", "33");
   
    let stickyContent = createsticky();
    stickyContent.appendChild(textArea);

});
function createsticky(){
    let sticky = document.createElement("div");
    let stickyHeader = document.createElement("div");
    let minimize = document.createElement("div");
    let close = document.createElement("div");


    let stickyContent = document.createElement("div");

    sticky.setAttribute("class", "sticky");
    stickyHeader.setAttribute("class", "sticky-header");
    minimize.setAttribute("class", "minimize");
    close.setAttribute("class", "close");
    stickyContent.setAttribute("class", "sticky-content");

    stickyHeader.appendChild(minimize);
    stickyHeader.appendChild(close);

    sticky.appendChild(stickyHeader);
    sticky.appendChild(stickyContent);
    

    document.body.appendChild(sticky);

    close.addEventListener("click", function(){
        sticky.remove();

    });
    minimize.addEventListener("click", function(){
        stickyContent.style.display = stickyContent.style.display == "none"? "block" : "none";
    });

    let initialX;
    let initialY;
    let stickyHolded = false;
    stickyHeader.addEventListener("mousedown", function(e){
        stickyHolded = true;
        initialX = e.clientX;
        initialY = e.clientY;
    });

    window.addEventListener("mousemove", function(e){
        if(stickyHolded){
            let finalX = e.clientX;
            let finalY = e.clientY;

            let dx = finalX - initialX;
            let dy = finalY - initialY;
            
            let {top, left} = sticky.getBoundingClientRect();
            sticky.style.top = top+dy+"px";
            sticky.style.left = left+dx+"px";

            initialX = finalX;
            initialY = finalY;
        }
    });

    stickyHeader.addEventListener("mouseup", function(e){
        stickyHolded = false;
    })
    

    return stickyContent;
}

